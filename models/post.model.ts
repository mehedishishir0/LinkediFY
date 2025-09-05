import mongoose from 'mongoose'
import { IUser } from './user.model'

export interface Ipost {
    description: string
    imageUrl?: string
    user: IUser
    likes?: string[]
    comments?: any
}

export interface IPostDocument extends Ipost, mongoose.Document {
    createdAt: Date,
    updatedAt: Date
}

const postSchema = new mongoose.Schema<IPostDocument>({
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: ""
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: {
        type: [String],
        default: []
    },
    comments:{
        type:mongoose.Schema.ObjectId,
        ref:'Comment'

    }
}, { timestamps: true })

export const PostModel = mongoose.model<IPostDocument>('Post', postSchema)