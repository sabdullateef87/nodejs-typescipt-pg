import { Express, Request, Response, Router } from "express";

const router = Router();

router.get('/healthcheck', (req: Request, res: Response) => {
    res.send("health check complete");
})

export default router;