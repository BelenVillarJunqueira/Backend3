import userModel from "../dao/models/users.models.js";
import bcrypt from "bcrypt";

export const createAdminUser = async () => {
    try {
    const adminEmail = "adminCoder@coder.com";


    const admin = await userModel.findOne({ email: adminEmail });
    if (admin) {
    console.log("Admin ya existente, no se crea uno nuevo.");
    return;
    }


    const hashedPassword = await bcrypt.hash("coder123", 10);

    await userModel.create({
    first_name: "Admin",
    last_name: "Coder",
    email: adminEmail,
    password: hashedPassword,
    role: "admin"
    });

    console.log("Administrador creado correctamente.");
} catch (error) {
    console.error("Error creando admin:", error);
}
};
