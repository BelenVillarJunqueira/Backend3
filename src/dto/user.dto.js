export default class UserDTO {
    static getUserTokenFrom = (user) =>{
        return {
            id: user._id?.toString(),
            first_name: user.first_name,
            last_name: user.last_name,
            name: `${user.first_name} ${user.last_name}`,
            role: user.role,
            email: user.email
        }
    }
}
