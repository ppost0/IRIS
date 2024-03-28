"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const userRouter = require('./routes/userRouter.js');
/*==================================================================*/
// Handle parsing of request body
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Handle requests for static files
app.use(express_1.default.static(path.resolve(__dirname, '../client/public')));
// Define route handlers
app.use('/user', userRouter);
/*=====================================================================*/
// Catch-all route handler
app.use('/*', (req, res) => {
    return res.status(404).send('Page not found - 404');
});
// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
// Listen on PORT in .env
app.listen(port, () => {
    console.log(`Server is listening on PORT:${port}`);
});
