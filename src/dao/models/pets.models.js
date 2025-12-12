import mongoose from "mongoose";

const collection = "pets";

const petsSchema = new mongoose.Schema({
name: { type: String, required: true },
specie: { type: String, required: true },
age: { type: Number, default: 0 },

adopted: { type: Boolean, default: false },

adoptedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
    default: null
}
});

const petsModel = mongoose.model(collection, petsSchema);

export default petsModel;
