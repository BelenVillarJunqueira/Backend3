import petsModel from "../dao/models/pets.models.js";

class PetsController {
    async createPet(req, res) {
        try {
            const pet = await petsModel.create(req.body);
            res.status(201).send({ status: "success", payload: pet });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }


    async getPets(req, res) {
        try {
            const pets = await petsModel.find().populate("adoptedBy");
            res.send({ status: "success", payload: pets });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }


    async getPetById(req, res) {
        try {
            const { pid } = req.params;
            const pet = await petsModel.findById(pid);

            if (!pet) {
                return res.status(404).send({
                    status: "error",
                    message: "Pet not found"
                });
            }

            res.send({ status: "success", payload: pet });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }


    async updatePet(req, res) {
        try {
            const { pid } = req.params;
            const updatedPet = await petsModel.findByIdAndUpdate(pid, req.body, { new: true });

            if (!updatedPet) {
                return res.status(404).send({
                    status: "error",
                    message: "Pet not found"
                });
            }

            res.send({ status: "success", payload: updatedPet });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }


    async deletePet(req, res) {
        try {
            const { pid } = req.params;
            const deletedPet = await petsModel.findByIdAndDelete(pid);

            if (!deletedPet) {
                return res.status(404).send({
                    status: "error",
                    message: "Pet not found"
                });
            }

            res.send({ status: "success", message: "Pet deleted", payload: deletedPet });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

export default new PetsController();
