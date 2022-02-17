"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// const authMiddleWare = require('../middleware/auth.middleware')
router.get("/test", (req, res) => {
    res.send('test');
});
// Router.post('/logout', authMiddleWare, controller.logout)
exports.default = router;
//# sourceMappingURL=test.route.js.map