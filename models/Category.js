import mongoose from "mongoose";
import cloudinary from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
});

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    cover: ImageSchema,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  {
    timestamps: true,
  }
);

CategorySchema.statics.findByIdAndPublished = async function (id) {
  return this.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        status: "published",
      },
    }
  );
};

CategorySchema.statics.findByIdAndDraft = async function (id) {
  return this.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        status: "draft",
      },
    }
  );
};

CategorySchema.statics.findBySlugIsExists = async function (slug) {
  return this.findOne({ slug }).select("_id slug");
};

CategorySchema.pre("findOneAndUpdate", async function (next) {
  const ck = this.getUpdate();

  if (
    ck.$set &&
    (ck.$set.status === "draft" || ck.$set.status === "published")
  ) {
    next();
  } else {
    const updateCoverWith = this.getUpdate().$set.cover;
    const { cover: currentCover } = await this.model.findOne(this.getQuery());

    if (currentCover.public_id === updateCoverWith.public_id) {
      next();
    } else {
      const result = await cloudinary.v2.api.delete_resources(
        currentCover.public_id
      );
      if (result) {
        next();
      } else {
        next(new Error("Category Update Failed"));
      }
    }
  }
});

CategorySchema.post("findOneAndDelete", async function (doc) {
  const { cover: currentCover } = doc;
  const result = await cloudinary.v2.api.delete_resources(
    currentCover.public_id
  );
  if (result) {
    console.log("Category Deleted");
  } else {
    console.log("Category Delete Failed");
  }
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
