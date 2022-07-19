import dotenv from "dotenv";

dotenv.config();

const  { 
    JWT_SECRET,
    PORT,
} = process.env;


const config = {JWT_SECRET, PORT};

export default config;