import adoptionsModel from "../dao/models/adoption.models.js";

class AdoptionsController {

    async getAllAdoptions(req, res) {
        try {
            const adoptions = await adoptionsModel
                .find()
                .populate("owner")
                .populate("pet");

            res.send({ status: "success", payload: adoptions });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    async getAdoptionById(req, res) {
        try {
            const adoption = await adoptionsModel
                .findById(req.params.aid)
                .populate("owner")
                .populate("pet");

            if (!adoption)
                return res.status(404).send({ error: "Not found" });

            res.send({ status: "success", payload: adoption });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    async createAdoption(req, res) {
        try {
            const { owner, pet } = req.body;

            if (!owner || !pet) {
                return res.status(400).send({ error: "owner and pet are required" });
            }

            const adoption = await adoptionsModel.create({ owner, pet });

            res.status(201).send({ status: "success", payload: adoption });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

export default new AdoptionsController();
