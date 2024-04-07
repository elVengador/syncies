import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, TextField } from 'ev-component-library'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ChatInputProps = {
  sendMessage: (_message: string) => void
  className?: string
}
export const ChatInput = ({ sendMessage, className }: ChatInputProps) => {
  const [message, setMessage] = useState('')

  const onSendMessage = () => {
    try {
      setMessage('')
      sendMessage(message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className={twMerge(
        'w-full min-h-[40px] p-[10px] flex items-center justify-between dark:bg-neutral-700',
        className
      )}
    >
      <TextField
        variant="flat"
        value={message}
        placeholder="Write something ..."
        onChange={setMessage}
        className=" dark:text-ev-light"
      />
      <IconButton
        color="foreground"
        onPress={onSendMessage}
        isDisabled={!message}
      >
        <FontAwesomeIcon
          icon={faRocket}
          //   className={`transition ${message ? 'rotate-0 ' : 'rotate-45'}`}
        />
      </IconButton>
    </div>
  )
}
