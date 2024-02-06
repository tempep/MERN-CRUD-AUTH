import {Router} from 'express';
import { authRequire } from '../middlewares/validateToken.js';
import { getTasks, getOneTask, createTask, deleteTask, updateTask } from '../controllers/task.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { taskSchema } from '../schemas/task.schema.js';

const router = Router();

router.get('/tasks', authRequire, getTasks );
router.get('/tasks/:id', authRequire, getOneTask );
router.post('/tasks', authRequire, validateSchema(taskSchema), createTask );
router.delete('/tasks/:id', authRequire, deleteTask );
router.put('/tasks/:id', authRequire, updateTask );

export default router;