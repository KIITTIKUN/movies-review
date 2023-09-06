import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewDatasSchema = new Schema({
  title: String,
  image: String,
  point: Number,
  review: String,
});

const reviewDatasModel = mongoose.model("reviewDatas", reviewDatasSchema);

export default reviewDatasModel;