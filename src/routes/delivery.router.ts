import { Router } from 'express';
import secureMiddleware from '../middlewares/secure.middleware';
import deliveryController from '../controllers/delivery.controller';
import validateBody from '../middlewares/validateBody.middleware';
import deliverySchema from '../schemas/delivery.schema';

const router = Router();

/**
 * @swagger
 * /delivery/validate-and-redirect:
 *   post:
 *     summary: Validate and redirect to Uchat
 *     tags:
 *       - Delivery
 *     parameters:
 *       - in: query
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: API key
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parcel:
 *                 type: object
 *                 properties:
 *                   telephone:
 *                     type: string
 *                     description: Phone number to validate
 *                     example: "+380123456789"
 *                   status:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                         description: Current status of the delivery
 *                         enum:
 *                           - Driver en route
 *                           - Delivered
 *                           - Awaiting customer pickup
 *                         example: Delivered
 *             required:
 *               - parcel
 *     responses:
 *       200:
 *         description: Redirected to Uchat
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

router.post(
	'/validate-and-redirect',
	secureMiddleware,
	validateBody(deliverySchema),
	deliveryController.redirectToUchat
);

export default router;
