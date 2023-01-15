import { Response } from 'express';
import { Request } from 'express';
import logger from '../../utils/logger';
export const createUserHandler = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        logger.error(error);
        return res.status(409).send(error.message)
    }
}