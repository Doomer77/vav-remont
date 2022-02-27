// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { socials } from './data/socials'

type SocialsTypes = {
    id: number
    icon: string
    path: string
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<SocialsTypes>,
) {
    if (req.method === 'GET') {
        res.status(200).json(socials)
    }
}
