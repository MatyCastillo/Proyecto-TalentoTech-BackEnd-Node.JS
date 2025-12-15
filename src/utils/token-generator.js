import jwt from "jsonwebtoken"
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY || "mySuperSecretKey1234567890!";

export const generateToken = (userData) =>{
    const user = {id: userData.id, email: userData.email};
    const expiration = {expiresIn: '1hr'}

    return jwt.sign(user,secret_key,expiration)
}