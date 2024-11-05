import { Router } from 'express';
import { continentController } from './continent.controller';

const router = Router();

router.get('/', (req, res) => continentController.getItems(req, res));

export default router;
