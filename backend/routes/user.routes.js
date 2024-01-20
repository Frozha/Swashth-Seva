import { Router } from 'express';
import { getCurrentUser, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/multer.middleware.js';
import { spawn } from 'child_process';

const router = Router();

router.route("/registerUser").post(registerUser);

router.route("/loginUser").post(loginUser);

//secured routes
router.route('/logoutUser').post(verifyJWT, logoutUser);
router.route('/getCurrentUser').get(verifyJWT, getCurrentUser);

router.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file)
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const imagePath = req.file.path;

    // Execute the Python script using child process
    const pythonProcess = spawn('python', ['../../ml/test.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python script output: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python script process exited with code ${code}`);
    });

    return res.status(200).json({ imagePath });
});

export default router;
