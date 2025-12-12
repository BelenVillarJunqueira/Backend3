import mocksRepository from "../repository/mocks.repository.js";
import userModel from "../dao/models/users.models.js";
import petsModel from "../dao/models/pets.models.js";

class MocksService {

generateUsers(amount) {
    const users = [];
    for (let i = 0; i < amount; i++) {
    users.push(mocksRepository.generateMockUser());
    }
    return users;
}

generatePets(amount) {
    const pets = [];
    for (let i = 0; i < amount; i++) {
        pets.push(mocksRepository.generateMockPet());
    }
    return pets;
}

async insertData(usersAmount, petsAmount) {
    const users = this.generateUsers(usersAmount);
    const pets = this.generatePets(petsAmount);

    const usersInserted = await userModel.insertMany(users);
    const petsInserted = await petsModel.insertMany(pets);

    return { usersInserted, petsInserted };
}
}

export default new MocksService();
