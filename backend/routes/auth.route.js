import express from "express"
import multer from "multer"
import { login, register } from "../controller/auth.controller.js"
import { createListing } from "../controller/listing.controller.js" // Import the listing controller

const router = express.Router()

// multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`) // Adding timestamp for uniqueness
  },
})

const upload = multer({ storage })

// Single file upload for profile image in register
router.post("/register", upload.single("profileImage"), register)

// Multiple file upload for listing photos in createListing
router.post("/createListing", upload.array("listingPhotos", 5), createListing) // allows up to 5 files

router.post("/login", login)

export default router
