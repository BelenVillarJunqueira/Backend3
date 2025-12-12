import GenericRepository from "./genericRepository.js";

export default class AdoptionRepository extends GenericRepository {
    constructor(dao){
        super(dao);
    }

    async getAdoptionsByUser(userId) {
        return this.dao.get({ owner: userId });
    }
}
