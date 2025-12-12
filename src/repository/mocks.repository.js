import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

class MocksRepository {
generateMockUser() {
    return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync("coder123", 10), 
    role: Math.random() > 0.5 ? "admin" : "user",
    pets: []
    };
}

generateMockPet() {
    return {
    name: faker.animal.petName(),
    specie: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
    adopted: false,
    adoptedBy: null
    };
}
}

export default new MocksRepository();
