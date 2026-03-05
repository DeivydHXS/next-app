import { UserAvatar } from "@/components/shared/user-avatar"

interface Props {
    avatarSrc: string
    avatarFallback: string
    name: string
    departament: string
    formatedDate: string
}

export function ElogioHeader({ formatedDate, departament, name, avatarFallback, avatarSrc }: Props) {
    return (
        <div className="flex gap-2 items-center">
            <UserAvatar src={avatarSrc} fallback={avatarFallback} />
            <div>
                <h1 className="font-semibold">{name}</h1>
                <p className="text-sm">recebeu um elogio de <span className="font-semibold">{departament}</span> • há {formatedDate}</p>
            </div>
        </div>
    );
}