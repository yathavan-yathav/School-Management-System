// import mongoose from "mongoose";

// export const dbConnection = () => {
//     mongoose.connect(process.env.MONGO_URL, {
//         dbName: "SCHOOL_MANAGEMENT_SYSTEM",
//     })
//     .then(() => {
//         console.log("Connected to database");
//     })
//     .catch((error) => {
//         console.log("Error occured while connecting to database");
//     });
// };

import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error occurred while connecting to database:", error.message);
    process.exit(1);  // Stop the server if DB connection fails
  }
};

