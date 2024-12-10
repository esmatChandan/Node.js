/*tweets [icon: twitter] {
  id string pk
  owner objectId users
  createdAt Date
  updateAt Date
}
 */

import mongoose,{Schema} from "mongoose";
const TweetsSchema = new Schema(
    {
        owner:{
            type: Schema.Types.ObjectId,
            ref: 'users',
        }
    },{ timestamps:true}
)

export const Tweet = mongoose.model("Tweet", TweetsSchema);