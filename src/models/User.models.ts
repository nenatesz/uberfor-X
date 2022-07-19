import {Schema, Model, model, Document} from "mongoose";
import moment from "moment"
import { Moment } from "moment";

export interface UserDocument extends Document {
    _id: string,
    firstName: string,
    LastName: string,
    email: string,
    password: string
    iat: Date | Moment
}

export interface UserModel extends Model<UserDocument> {

}
const userSchema = new Schema<UserDocument>({
    _id: {type: String, required: true},
    firstName: {type: String, required: true},
    LastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    iat: {type: Date, default: moment()}
}, {
    timestamps: true
})

const User = model<UserDocument, UserModel>("User", userSchema);

export default User;