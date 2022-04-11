import mongoose from "mongoose";

const TagsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const GuestUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const CommentSchema = new mongoose.Schema(
  {
    commenter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    guest: GuestUserSchema,
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
    content: {
      type: String,
      required: true,
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ArticleSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["draft", "published", "blocked", "revalidate"],
    default: "draft",
  },
  title: {
    type: String,
    trim: true,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  slug: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  excerpt: {
    type: String,
    trim: true,
    minLength: 5,
    maxLength: 75,
  },
  content: {
    type: String,
    required: true,
    minLength: 30,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  tags: [TagsSchema],
  comments: [CommentSchema],
  commentsCount: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isRecommended: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
