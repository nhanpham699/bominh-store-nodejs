"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
// const authMiddleWare = require('../middleware/auth.middleware')
router.get("/", product_controller_1.default.getAll);
// Router.post('/logout', authMiddleWare, controller.logout)
exports.default = router;
//# sourceMappingURL=product.route.js.map