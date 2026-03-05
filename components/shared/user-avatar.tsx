import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface Props {
    src: string
    fallback: string
}

export function UserAvatar({ src, fallback }: Props) {
  return (
    <Avatar size="lg">
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}