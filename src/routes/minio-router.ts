import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import minioService from '@services/minio-server';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/bucket',
} as const;


router.get(p.get, (_: Request, res: Response) => {
    const list = minioService.getListBuckets();
    
    return res.status(OK).json({list});
});


// Export default
export default router;
