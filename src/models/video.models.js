/*video [icon: video] {
    id string pk
    owner object users
    videoFile string
    thumbnali string
    title string
    description string
    duration number
    views number
    isPublisied boolean
    createdAt Date
    updateAt Date
  }*/
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const VideoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudenary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudenary url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
    },
    views: {
      type: Number,
    },
    isPublisied: {
      type: Boolean,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);
VideoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", VideoSchema);
