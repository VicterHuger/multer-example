import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app = express();

app.use(cors());

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null, './images')
    },
    filename: (req, file, callback)=>{
        callback(null, Date.now() + '--' + file.originalname);
    },
});

const upload=multer({storage:fileStorageEngine});

app.post('/single', upload.single('image'), (req,res)=>{
    console.log(req.file);
    res.send("Single File upload sucess")
})
app.post('/multiples', upload.array('images',3),(req,res)=>{
    console.log(req.files);
    res.send("Multiples Files upload sucess");

});

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>console.log(`Server is listening on PORT ${PORT}`));

