import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    institutionName: {type: String, required: true},
    requirements: {type: String},
});
const userModel = mongoose.model("User", userSchema);
export default userModel;