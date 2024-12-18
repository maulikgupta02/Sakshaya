import express from 'express';
import {store,retrieve} from "../controllers/notary-documentsController.js"

const router = express.Router(); 

router.route('/store').post(store);
router.route('/retrieve').get(retrieve);

export default router;