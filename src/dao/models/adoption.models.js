import mongoose from "mongoose";

const collection = "adoptions";

const schema = new mongoose.Schema({
owner: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "users",   
  required: true,
},
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pets",
    required: true,
  }
});

const adoptionModel = mongoose.model(collection, schema);

export default adoptionModel;
