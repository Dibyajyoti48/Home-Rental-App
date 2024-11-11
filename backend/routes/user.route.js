import express from "express"
import {
    // addListingToWishList,
    // getPropertyList,
    // getReservationList,
    getTripList,
  } from "../controller/user.controller.js"

const router = express.Router()

router.get("/:userId/trips", getTripList)
 
export default router