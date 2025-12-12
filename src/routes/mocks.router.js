import { Router } from "express";
import mocksService from "../services/mocks.service.js";

const router = Router();


router.get("/mockingusers", (req, res) => {
const cant = req.query.cant ? parseInt(req.query.cant) : 50;
const users = mocksService.generateUsers(cant);
res.send({ status: "success", payload: users });
});


router.get("/mockingpets", (req, res) => {
const pets = mocksService.generatePets(50);
res.send({ status: "success", payload: pets });
});


router.post("/generateData", async (req, res) => {
try {
    const { users, pets } = req.query;

    const usersAmount = parseInt(users) || 0;
    const petsAmount = parseInt(pets) || 0;

    const result = await mocksService.insertData(usersAmount, petsAmount);

    res.send({
    status: "success",
    inserted: result
    });
} catch (error) {
    res.status(500).send({ status: "error", message: error.message });
}
});

export default router;
