import express from "express";
import multer from "multer";
import {
  createListing,
  getListingDetails,
  getListings,
  getListingsBySearch,
} from "../controller/listing.controller.js";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/create", upload.array("listingPhotos"), createListing);
router.get("/", getListings);
router.get("/:listingId", getListingDetails);
router.get("/search/:search", getListingsBySearch);

export default router;
