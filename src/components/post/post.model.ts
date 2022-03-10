import { Schema, model } from 'mongoose';
import Post from '@/components/post/post.interface';

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default model<Post>('Post', PostSchema);
