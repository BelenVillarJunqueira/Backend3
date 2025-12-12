export default class PetDTO {
    static getPetInputFrom = (pet) =>{
        return {
            name: (pet.name && pet.name.trim()) || null,
            specie: (pet.specie && pet.specie.trim()) || null,
            image: pet.image || null,
            birthDate: pet.birthDate ? new Date(pet.birthDate) : null,
            adopted: pet.adopted ?? false,
            owner: pet.owner || null
        }
    }
}
