import mongoose from "mongoose";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const UserSchema = new mongoose.Schema({
  // Defaults defined in next-auth user model

  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    immutable: true,
  },
  image: {
    type: String,
    trim: true,
    default:
      "https://res.cloudinary.com/dvgqaevma/image/upload/v1649702266/myopia-upload/Profile_Photo_Placeholder_qx5411.jpg",
  },

  // Custom defined

  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },

  role: {
    type: String,
    enum: ["admin", "author", "stuff", "user"],
    default: "user",
  },

  bio: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
  occupation: {
    type: String,
    trim: true,
  },

  //   User Assets

  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

UserSchema.statics.findProfileByUsername = async function (username) {
  const user = await this.findOne({ username: username }).exec();
  return user;
};
UserSchema.statics.findPublicProfileByUsername = async function (username) {
  const user = await this.findOne({ username: username })
    .select({ email: 0 })
    .exec();
  return user;
};
UserSchema.statics.updateUserProfile = async function (uname, body) {
  const { name, image, username, bio, location, website, occupation } = body;

  const user = await this.findOneAndUpdate(
    { username: uname },
    {
      $set: {
        name,
        image,
        username,
        bio,
        location,
        website,
        occupation,
      },
    },
    {
      runValidators: true,
    }
  );
  return user;
};

UserSchema.pre("findOneAndUpdate", async function (next) {
  const updateImageWith = this.getUpdate().$set.image;
  const { image: currentImage } = await this.model.findOne(this.getQuery());

  if (updateImageWith && updateImageWith === currentImage) {
    next();
  } else {
    if (
      currentImage ===
      "https://res.cloudinary.com/dvgqaevma/image/upload/v1649702266/myopia-upload/Profile_Photo_Placeholder_qx5411.jpg"
    ) {
      next();
    }
    const public_id = currentImage
      .split("/")
      .slice(7)
      .join("/")
      .split(".")
      .slice(0, 1)
      .join("/");

    const result = await cloudinary.v2.api.delete_resources(public_id);
    if (result) {
      next();
    } else {
      next(new Error("Image not deleted"));
    }
  }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
