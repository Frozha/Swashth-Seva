import { Router } from 'express';
import { getCurrentHospital, loginHospital, logoutHospital, registerHospital } from '../controllers/hospital.controller.js';
import { verifyHospitalJWT } from '../middleware/auth.hospital.middleware.js'

const router = Router();

router.route( "/registerHospital" ).post( registerHospital );

router.route( "/loginHospital" ).post( loginHospital );

//secured routes
router.route( '/logoutHospital' ).post( verifyHospitalJWT, logoutHospital );
router.route( '/getCurrentHospital' ).get( verifyHospitalJWT, getCurrentHospital );

export default router;