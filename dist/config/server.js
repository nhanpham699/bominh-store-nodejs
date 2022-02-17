"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const user_route_1 = __importDefault(require("../routes/user.route"));
const test_route_1 = __importDefault(require("../routes/test.route"));
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});
app.use('/user', user_route_1.default);
app.use('/test1', test_route_1.default);
//# sourceMappingURL=server.js.map