import { Router } from "express";
const router = Router()
import controller from '../controllers/user.controller'
// const authMiddleWare = require('../middleware/auth.middleware')

router.get("/test", (req, res) => {
    res.send('test')
})
// Router.post('/logout', authMiddleWare, controller.logout)

export default router