import { Router } from 'express';
import userRouter from './user-router';
import minioRouter from './minio-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/minio', minioRouter);


// Export default.
export default baseRouter;
