import express, { Request, Response } from 'express';

const router = express.Router();

const data = [
    {
        "key": "value",
        "key2": "value2"
    },
    {
        "key3": "value3",
        "key4": "value4"
    },
]

router.get('/', (req, res)=>{
    res.json(data)
});



export default router;
