import { Router } from "express";
import {listTestimonial} from '../controllers/testimonial'

const route = Router()

route.get("/testimonial", listTestimonial)

export default route