import GenericRepository from "./genericRepository.js";

export default class PetRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }

    async getPetsByOwner(ownerId) {
        return this.dao.get({ owner: ownerId });
    }
}
