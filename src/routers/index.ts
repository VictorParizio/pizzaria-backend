import express from "express";
import userRouter from "./useRouter";
import productRouter from "./productRouter";
import testimonialRouter from "./testimonialRouter";
import swaggerRouter from "./swaggerRouter";

const router = express();

router.use(swaggerRouter);
router.use(userRouter);
router.use(productRouter);
router.use(testimonialRouter);

export default router;
