import userModel from "../dao/models/users.models.js";
import bcrypt from "bcrypt";

const usersController = {
    
    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.find();
            res.json({ status: "success", payload: users });
        } catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.uid);
            if (!user) return res.status(404).json({ status: "error", message: "User not found" });

            res.json({ status: "success", payload: user });
        } catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const { first_name, last_name, email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await userModel.create({
                first_name,
                last_name,
                email,
                password: hashedPassword
            });

            res.json({ status: "success", payload: newUser });
        } catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await userModel.findByIdAndUpdate(
                req.params.uid,
                req.body,
                { new: true }
            );

            res.json({ status: "success", payload: updatedUser });
        } catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            await userModel.findByIdAndDelete(req.params.uid);
            res.json({ status: "success", message: "User deleted" });
        } catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
};

export default usersController;
