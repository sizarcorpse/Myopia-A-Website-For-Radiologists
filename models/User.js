import mongoose from "mongoose";

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

  //   User Assets

  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
