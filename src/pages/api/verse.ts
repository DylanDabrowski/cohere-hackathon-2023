import { tts } from './../../services/uberduck-service';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    
    res.status(200).json({ name: (await tts("drake", "drake")) });
}
