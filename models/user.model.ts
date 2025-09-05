import mongoose from 'mongoose'

export interface IUser {
    firstName: string,
    lastName: string,
    userId: string,
    profilePhoto: string,
    bio?: string
}

export interface IuserDocument extends IUser, mongoose.Document {
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema<IuserDocument>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    }
}, { timestamps: true })

export const UserModel = mongoose.model<IuserDocument>('User', userSchema)