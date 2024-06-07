import express from "express";
import userRouter from "./useRouter";
import productRouter from "./productRouter";
import testimonialRouter from "./testimonialRouter";

const apiPizzarIA = express();

apiPizzarIA.use(userRouter);
apiPizzarIA.use(productRouter);
apiPizzarIA.use(testimonialRouter);

export default apiPizzarIA;
