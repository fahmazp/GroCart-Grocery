import express from 'express'
import { userRouter } from './userRoutes.js'
import { productRouter } from './productRoutes.js'
import { cartRouter } from './cartRoutes.js'
import { categoryRouter } from './categoryRoutes.js'

const router = express.Router()

router.use("/user",userRouter)
router.use("/products",productRouter)
router.use("/cart",cartRouter)
router.use("/categories",categoryRouter)

export { router as apiRouter }