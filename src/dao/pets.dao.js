import petModel from "./models/pets.models.js";

export default class Pet {

    get = async (params) =>{
        return await petModel.find(params).lean();
    }

    getBy = async (params) =>{
        return await petModel.findOne(params).lean();
    }

    save = async (doc) =>{
        return await petModel.create(doc);
    }

    update = async (id,doc) =>{
        return await petModel.findByIdAndUpdate(
            id,
            { $set: doc },
            { new: true }
        ).lean();
    }

    delete = async (id) =>{
        return await petModel.findByIdAndDelete(id).lean();
    }
}
