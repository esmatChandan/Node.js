/*users [icon: user, color: blue] {
    id string pk
    uaername string
    fullname string
    avtar string
    coverimage  string
    watchHistory object[] value
    password string
    refreshTocken string
    createdAt Date
    updateAt Date
  }*/

import mongoose, { Schema } from "mongoose";
const userScama = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudenary
      required: true,
    },
    coverImg: {
      type: String, //cloudenary
    },
    watchHistory: [
      {
        type: [Schema.Types.ObjectId],
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "password is require"],
    },
    refreshTocken: {
      type: String,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userScama);
