import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewDatasSchema = new Schema({
  username_review: String,
  title: String,
  image: String,
  point: Number,
  review: String,
});

const reviewDatasModel = mongoose.model("reviewDatas", reviewDatasSchema);

export default reviewDatasModel;