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

  const onSendMessage = (e: any) => {
    try {
      e.preventDefault()
      setMessage('')
      sendMessage(message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={(e) => onSendMessage(e)}
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
      <IconButton color="foreground" isDisabled={!message}>
        <FontAwesomeIcon icon={faRocket} />
      </IconButton>
    </form>
  )
}
