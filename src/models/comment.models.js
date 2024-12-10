/*
comments [icon: message-circle] {
  id string pk
  content string
 createdAt Date
  updateAt Date
  video object videos
  owner object users
} */

import mongoose, { Schema } from "mongoose";
import { User } from "./user.models";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
  {
    content: {
      type: String,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref:User
    },
  },
  { timestamps: true }
);

commentSchema.plugin(mongooseAggregatePaginate)
export const Comments = mongoose.model("Comments", commentSchema);