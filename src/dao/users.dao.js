import userModel from "./models/users.models.js";

export default class Users {

    get = async (params) =>{
        return await userModel.find(params).lean();
    }

    getBy = async (params) =>{
        return await userModel.findOne(params).lean();
    }

    save = async (doc) =>{
        return await userModel.create(doc);
    }

    update = async (id,doc) =>{
        return await userModel.findByIdAndUpdate(
            id,
            { $set: doc },
            { new: true }
        ).lean();
    }

    delete = async (id) =>{
        return await userModel.findByIdAndDelete(id).lean();
    }
}
