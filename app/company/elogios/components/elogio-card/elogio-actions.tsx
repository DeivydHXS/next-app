import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";

interface Props {
    liked: boolean
    likeQuantity: number
    commentsQuantity: number
}

export function ElogioActions({ liked, likeQuantity, commentsQuantity }: Props) {
    return (
        <div className="flex items-center justify-between">
            <Button variant={'outline'} className="cursor-pointer" disabled={liked}>
                <ThumbsUp size={16} />
                <p>Curtir</p>
            </Button>
            <div className="flex items-center gap-1 font-regular text-sm">
                <div className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    <p>{likeQuantity}</p>
                </div>
                <p> • {commentsQuantity} comentário(s)</p>
            </div>
        </div>
    );
}