/*layliste [icon: book]{
  id string pk
  name string
  description string
  createdAt Date
  updateAt Date
  video objectId[] video
  owner objectId users
} */
import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    video: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
