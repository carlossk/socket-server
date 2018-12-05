import {Router, Request, Response} from 'express';

const router= Router();

router.get('/mensajes',(req:Request, res: Response)=>{
    res.json({
        ok: true,
        message:'all ok'
    })
});
router.post('/mensajes/:id',(req:Request, res: Response)=>{
    console.log(req.body);
    res.json({params:req.params});

});
router.post('/mensajes',(req:Request, res: Response)=>{
    console.log(req.body);
    res.json(req.body);

});

export default router;