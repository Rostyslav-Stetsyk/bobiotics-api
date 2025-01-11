import { Router } from 'express';
import { getTestItem } from '../controllers/testController';
import { logMiddleware } from '../middlewares/testMiddlewares';

const router = Router();

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Test endpoint
 *     description: Return test item
 *     tags:
 *       - Test
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 succes:
 *                  type: boolean
 *                 data:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 */
router.get('/test', logMiddleware, getTestItem);

export default router;
