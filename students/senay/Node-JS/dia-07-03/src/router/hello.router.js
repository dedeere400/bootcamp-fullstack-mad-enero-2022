import express from 'express';
import { fromController } from '../controler/hello.controller.js';



const router = express.Router();

router.route('/')
    .get(fromController)

export default router;