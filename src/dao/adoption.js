import adoptionModel from "./models/adoption.models.js";

export default class Adoption {

    get = async (params) =>{
        return await adoptionModel.find(params).lean();
    }

    getBy = async (params) =>{
        return await adoptionModel.findOne(params).lean();
    }

    save = async (doc) =>{
        return await adoptionModel.create(doc);
    }

    update = async (id,doc) =>{
        return await adoptionModel.findByIdAndUpdate(id, {$set:doc}, { new: true }).lean();
    }
    
    delete = async (id) =>{
        return await adoptionModel.findByIdAndDelete(id).lean();
    }
}
