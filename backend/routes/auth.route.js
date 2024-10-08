import express from "express"
import multer from "multer"
import { login,register } from "../controller/auth.controller.js"

const router =express.Router()

// multer configuration
const storage = multer.diskStorage({
    destination:function(_req, _file, cb){
        cb(null, "public/uploads/")
    },
    filename:function(_req, file, cb){
        cb(null,file.originalname)
    },
})
const upload=multer({ storage })


router.post("/register",upload.single("profileImage"),register)
router.post("/login",login)


export default router

