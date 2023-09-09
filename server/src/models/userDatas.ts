import mongoose from 'mongoose';
const { Schema } = mongoose;

const userDatasSchema = new Schema({
    username: String,
    password: String,
    email: String,
    gender: String,
    age: Number,
});

const userDatasModel = mongoose.model("userDatas", userDatasSchema);

export default userDatasModel;