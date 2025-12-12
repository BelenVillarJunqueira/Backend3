import mongoose from "mongoose";

const collection = "users";

const userSchema = new mongoose.Schema({
first_name: String,
last_name: String,
email: { type: String, unique: true },
password: String,
role: { type: String, enum: ["user", "admin"], default: "user" },
pets: { type: Array, default: [] }
});

const userModel = mongoose.model(collection, userSchema);

export default userModel;
