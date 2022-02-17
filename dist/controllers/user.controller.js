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
const user_model_1 = __importDefault(require("../models/user.model"));
// const auth = require("../middleware/auth.middleware")
exports.default = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userName = req.body.userName;
            const password = req.body.password;
            const user = yield user_model_1.default.findByCredentials(userName, password);
            if (!user) {
                return res
                    .status(401)
                    .send({ error: "Login failed! Check authentication credentials" });
            }
            const { tokenDevices } = req.body;
            const token = yield user.generateAuthToken(tokenDevices);
            res.send({ user, token });
        }
        catch (error) {
            // res.status(400).send(error);
            res.send({ error: true });
        }
    }),
};
//# sourceMappingURL=user.controller.js.map