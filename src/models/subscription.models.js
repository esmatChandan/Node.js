/*
subscriptions [icon: money] {

  id string pk
  subscriber object user
  channel objectId users
  createdAt Date
  updateAt Date
 
}*/
import mongoose, { Schema } from "mongoose";
import { User } from "./user.models";
const SubscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);
export const Subscriber = mongoose.model("Subscriber", SubscriptionSchema);
