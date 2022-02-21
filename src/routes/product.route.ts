import { Router } from "express";
const router = Router()
import controller from '../controllers/product.controller'
// const authMiddleWare = require('../middleware/auth.middleware')

router.get("/", controller.getAll)
// Router.post('/logout', authMiddleWare, controller.logout)

export default router