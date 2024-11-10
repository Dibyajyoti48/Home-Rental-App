import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import listingRoutes from "./routes/listing.route.js";
// import bookingRoutes from "./routes/booking.route.js";
// import userRoutes from "./routes/user.route.js";

dotenv.config();

// Connect to MongoDB (updated to remove deprecated options)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Route handlers
app.use("/api/auth", authRoutes);
app.use("/api/listing", listingRoutes);
// app.use("/api/booking", bookingRoutes);
// app.use("/api/user", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start server after setting up routes
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
