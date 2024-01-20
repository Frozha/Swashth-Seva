import { Router } from 'express';
import { getCurrentUser, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router.route( "/registerUser" ).post( registerUser );

router.route( "/loginUser" ).post( loginUser );

//secured routes
router.route( '/logoutUser' ).post( verifyJWT, logoutUser );
router.route( '/getCurrentUser' ).get( verifyJWT, getCurrentUser );

router.post('/upload', upload.single('image'), (req, res) => {
  console.log( req.file )
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    const imagePath = req.file.path;
    // You can save the imagePath to your database or perform other actions with it
  
    return res.status(200).json({ imagePath });
  });

export default router;