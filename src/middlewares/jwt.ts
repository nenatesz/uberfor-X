import jwt, {JwtPayload} from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from "../../config";
import User, {UserDocument} from "../models/User.models";
import moment from "moment";

export interface Payload {
    userId: string;
    email: String;
    firstName: string;
    iat: number;
}

export interface Result {
    token: string;
    iat: number;
}

export type DecodeToken = {
    type: "Valid"
    payload: Payload;
} | {type: Record<string, unknown>}

export const generateToken = (user: UserDocument, secret: string): Result => {
    const {_id, email, firstName} = user;
    const iat = moment().millisecond();
    const payload: Payload = {
        userId: _id, email, firstName, iat
    }

    const token = jwt.sign(payload, secret, { algorithm: 'RS256', expiresIn: '24h'});

    return {
        token, 
        iat
    }   
};

const decodeToken = (token: string, secret: string): DecodeToken => {
    
    jwt.verify(token, secret, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err){
            return {
                type: 
            }
        }
    });
}

