import { twMerge } from 'tailwind-merge'

type MessageProps = {
  message: string
  author: {
    nickname: string
    color: string
  }
  className?: string
}
export const Message = ({ message, author, className }: MessageProps) => {
  return (
    <p className={twMerge('p-2 text-ev-dark dark:text-ev-light', className)}>
      <span className="font-semibold" style={{ color: author.color }}>
        {author.nickname}
      </span>
      : {message}
    </p>
  )
}
