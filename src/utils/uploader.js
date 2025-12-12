import __dirname from "./index.js";
import multer from 'multer';
import fs from 'fs';

const uploadPath = `${__dirname}/../public/img`;

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, uploadPath)
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uploader = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
        if (file.mimetype && file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed"));
        }
    }
});

export default uploader;
