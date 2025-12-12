import { EErrors } from "../utils/errors/errorTypes.js";

export default (error, req, res, next) => {
req.logger.error(error.message);

switch (error.code) {
    case EErrors.INVALID_TYPES_ERROR:
    return res.status(400).send({ status: "error", error: error.message });

    case EErrors.DATABASE_ERROR:
    return res.status(500).send({ status: "error", error: "Database error" });

    case EErrors.ROUTING_ERROR:
    return res.status(404).send({ status: "error", error: "Route not found" });

    default:
    return res.status(500).send({ status: "error", error: "Unhandled error" });
}
};
