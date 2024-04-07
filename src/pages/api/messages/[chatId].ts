import type { NextApiRequest, NextApiResponse } from 'next'

import { CustomObjectResponse } from '@/bussiness/api.types'
import {
  // CustomCreateMessageResponse,
  CustomMessageResponse,
  MessageData,
} from '@/bussiness/messages.types'

const MESSAGES: MessageData[] = [
  {
    id: '01',
    chatId: 'ch-01',
    userId: 'u01',
    userName: 'ev',
    message: 'Nunc justo erat, ultricies pretium lorem. 😀',
  },
  {
    id: '02',
    chatId: 'ch-01',
    userId: 'u02',
    userName: 'LR',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo erat, ultricies pretium lorem a, tempor maximus tortor. Donec ut erat nec urna egestas malesuada. Proin in nisi eu sem pharetra rhoncus. Suspendisse consectetur egestas purus eu posuere. Sed dolor nulla, cursus id malesuada vel, dapibus id nisi. Suspendisse finibus urna id malesuada scelerisque. Nulla vel nulla ex. Phasellus auctor tellus in enim semper pretium. Morbi sodales pharetra velit, nec tristique eros porta vitae. Sed nec congue sapien, nec bibendum sem. Vestibulum semper ipsum nec suscipit commodo.',
  },
  {
    id: '03',
    chatId: 'ch-01',
    userId: 'u01',
    userName: 'ev',
    message: 'Whats upp!',
  },
]

const getMessageByChat = (req: NextApiRequest, res: NextApiResponse) => {
  const response: CustomMessageResponse = {
    data: { messages: MESSAGES },
    error: '',
  }
  return res.status(200).json(response)
}

type CreateMessageBody = {
  message: string
  userId: string
  userName: string
}

export type CustomCreateMessageBody = {
  data: CreateMessageBody
}

type CreateMessageInput = {
  id: string
  userId: string
  userName: string
  message: string
  chatId: string
}

export type CreateMessageResponse = null

export type CustomCreateMessageResponse =
  CustomObjectResponse<CreateMessageResponse>

const createMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const chatId = req.query.chatId as string
  console.log('server', req.body)
  const { data } = req.body as CustomCreateMessageBody
  const { message, userId, userName } = data
  const newMessage: CreateMessageInput = {
    id: `0${MESSAGES.length}`,
    userId,
    userName,
    message,
    chatId,
  }

  MESSAGES.push(newMessage)
  const response: CustomCreateMessageResponse = {
    data: null,
    error: '',
  }
  return res.status(200).json(response)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') return getMessageByChat(req, res)
  if (req.method === 'POST') return createMessage(req, res)

  res.status(200).json({ data: null, error: 'Invalid Petition' })
}
