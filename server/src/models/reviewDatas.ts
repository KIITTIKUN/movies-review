import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewDatasSchema = new Schema({
  title: String,
  point: Number,
  review: String,
  image: String,
});

const reviewDatasModel = mongoose.model("reviewDatas", reviewDatasSchema);

export default reviewDatasModel;