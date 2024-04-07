import type { NextApiRequest, NextApiResponse } from 'next'

import { CustomArrayResponse } from '@/bussiness/api.types'

type Chat = {
  id: string
  name: string
}

const CHATS: Chat[] = [
  { id: '01', name: 'chat-01' },
  { id: '02', name: 'chat-02' },
  { id: '03', name: 'chat-03' },
]

export type ChatsResponse = { chat: Chat[] }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomArrayResponse<ChatsResponse>>
) {
  if (req.method === 'GET')
    return res.status(200).json({ data: { chat: CHATS }, error: '' })

  res.status(200).json({ data: null, error: 'Invalid Petition' })
}
