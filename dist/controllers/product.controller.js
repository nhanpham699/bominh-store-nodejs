"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product.model"));
// const auth = require("../middleware/auth.middleware")
exports.default = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield product_model_1.default.find();
        res.json(products);
    }),
    getById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield product_model_1.default.findOne({ _id: req.params.id });
            res.json(product);
        }
        catch (error) {
            res.send({ error: true });
        }
    }),
};
//# sourceMappingURL=product.controller.js.map