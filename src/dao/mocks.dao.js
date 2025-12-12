import { faker } from "@faker-js/faker";
import CustomError from "../utils/errors/CustomError.js";
import { EErrors } from "../utils/errors/errorTypes.js";

export default class MocksDAO {

    generateProducts(quantity) {
        const products = [];
        for (let i = 0; i < quantity; i++) {
            products.push({
                id: faker.database.mongodbObjectId(),
                title: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                price: faker.commerce.price(),
                category: faker.commerce.department(),
                stock: faker.number.int({ min: 1, max: 500 }),
                image: faker.image.url()
            });
        }
        return products;
    }

    loggerTest(logger) {
        logger.fatal("Test fatal");
        logger.error("Test error");
        logger.warning("Test warning");
        logger.info("Test info");
        logger.http("Test http");
        logger.debug("Test debug");

        return "Logs enviados al logger";
    }

    generateError() {
        throw CustomError.createError({
            name: "InvalidTypeError",
            cause: "Datos inválidos enviados",
            message: "Se generó un error a propósito desde DAO",
            code: EErrors.INVALID_TYPES_ERROR
        });
    }
}
