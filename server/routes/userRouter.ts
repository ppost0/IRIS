import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', userController.login, (req: Request, res: Response) => {
  return res.status(200).json('dummy response - login');
});

router.post('/signup', userController.signup, (req: Request, res: Response) => {
  return res.status(200).json('dummy response - signup');
});


module.exports = router;