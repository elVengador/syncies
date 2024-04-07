import { CustomArrayResponse } from './api.types'

export type MessageData = {
  id: string
  chatId: string
  userId: string
  userName: string
  message: string
}

export type MessagesResponse = { messages: MessageData[] }

export type CustomMessageResponse = CustomArrayResponse<MessagesResponse>

// export type CreateMessageResponse = null

// export type CustomCreateMessageResponse =
//   CustomObjectResponse<CreateMessageResponse>
