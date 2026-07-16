import express from 'express';
import { authenticateToken, authorize } from '../middleware/auth.js';
import {
  getCampaigns,
  getCampaignById,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  trackInteraction
} from '../controllers/campaignController.js';

const router = express.Router();

// Public routes
router.get('/', getCampaigns);
router.get('/:id', getCampaignById);
router.post('/track/:id', trackInteraction);

// Protected routes (Admin only)
router.post('/', authenticateToken, authorize(['admin', 'editor']), createCampaign);
router.put('/:id', authenticateToken, authorize(['admin', 'editor']), updateCampaign);
router.delete('/:id', authenticateToken, authorize(['admin']), deleteCampaign);

export default router;
