import { Router } from "express";
import petsController from "../controllers/pets.controller.js";

const router = Router();


router.get("/", (req, res) => petsController.getPets(req, res));


router.get("/:pid", (req, res) => petsController.getPetById(req, res));


router.post("/", (req, res) => petsController.createPet(req, res));


router.put("/:pid", (req, res) => petsController.updatePet(req, res));


router.delete("/:pid", (req, res) => petsController.deletePet(req, res));

export default router;
