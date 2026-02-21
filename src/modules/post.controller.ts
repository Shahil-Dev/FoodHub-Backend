import { Request, Response } from "express"


const createPost = (req: Request, res: Response) => {
    console.log({
        req, res
    })
}

export const postController = {
    createPost
}