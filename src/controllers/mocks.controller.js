import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const mockStore = {
    users: [],
    pets: []
};

const mocksController = {
    getMockingUsers: (req, res) => {
        try {
            const users = [];

            for (let i = 0; i < 50; i++) {
                users.push({
                    id: faker.string.uuid(),
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                    age: faker.number.int({ min: 18, max: 80 }),
                    role: faker.helpers.arrayElement(["user", "admin"])
                });
            }

            return res.json({
                status: "success",
                payload: users
            });

        } catch (error) {
            return res.status(500).json({
                status: "error",
                message: error.message
            });
        }
    },

    generateData: (req, res) => {
        try {
            const users = [];
            const pets = [];

            for (let i = 0; i < 50; i++) {
                users.push({
                    id: faker.string.uuid(),
                    name: faker.person.fullName(),
                    email: faker.internet.email()
                });

                pets.push({
                    id: faker.string.uuid(),
                    name: faker.animal.petName(),
                    type: faker.animal.type()
                });
            }


            mockStore.users = users;
            mockStore.pets = pets;

            return res.status(200).json({
                status: "success",
                message: "Mock data generated",
                data: mockStore
            });

        } catch (error) {
            return res.status(500).json({
                status: "error",
                message: error.message
            });
        }
    },

    getGeneratedUsers: (req, res) => {
        return res.json({
            status: "success",
            payload: mockStore.users
        });
    },

    getGeneratedPets: (req, res) => {
        return res.json({
            status: "success",
            payload: mockStore.pets
        });
    }
};

export default mocksController;