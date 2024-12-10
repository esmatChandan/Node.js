/*likes [icon: thumbs-up] {
  id string pk
  comments objectId comments
  createdAt Date
  video objectId videos
  updateAt Date
  likeBy objectId users
  tweet objectId tweets
  
} */

  import mongoose, {Schema} from "mongoose";
  const likeSchema = new Schema({
    comments:{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    },
    video:{
        type: Schema.Types.ObjectId,
        ref: 'videos'
    },
    likeBy:{
        type: Schema.Types.userId,
        ref:'User'
    },
    tweet:{
        type: Schema.Types.ObjectId,
        ref:'Tweet'
    }
  })
  export const like = mongoose.model("like", likeSchema)
  