import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const SALT_ROUNDS = 10;

export function newObjectId() {
    return new mongoose.Types.ObjectId();
}


export async function generateMockUser() {
const plain = 'coder123';
const password = await bcrypt.hash(plain, SALT_ROUNDS);

const first_name = faker.person.firstName();
const last_name = faker.person.lastName();
const email = faker.internet.email({ firstName: first_name, lastName: last_name }).toLowerCase();

return {
    _id: newObjectId(),
    first_name,
    last_name,
    email,
    password,
    role: Math.random() < 0.15 ? 'admin' : 'user',
    pets: []
};
}


export async function generateNUsers(n = 50) {
const arr = [];
for (let i = 0; i < n; i++) {

    const u = await generateMockUser();
    arr.push(u);
}
return arr;
}

export function generateMockPet() {
return {
    _id: newObjectId(),
    name: faker.animal.name(),
    species: faker.animal.type(),
    age: faker.number.int({ min: 0, max: 15 }),
    description: faker.lorem.sentence()
};
}


export function generateNPets(n = 10) {
const arr = [];
for (let i = 0; i < n; i++) arr.push(generateMockPet());
return arr;
}
