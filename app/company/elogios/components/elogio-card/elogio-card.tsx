import { Card, CardContent } from "@/components/ui/card"
import { ElogioHeader } from "./elogio-header"
import { Separator } from "@base-ui/react"
import { ElogioContent } from "./elogio-content"
import { ElogioActions } from "./elogio-actions"
import { ElogioComments } from "./elogio-comments"

interface Props { }

export function ElogioCard({ }: Props) {
    return (
        <Card>
            <CardContent className="flex flex-col gap-4">

                <ElogioHeader
                    avatarSrc={"https://github.com/shadcn.png"}
                    avatarFallback={"CN"}
                    name={"Nome da Pessoa"}
                    departament={"Desenvolvimento Organizacional"}
                    formatedDate={"3 dias"}
                />

                <ElogioContent />

                <Separator />

                <ElogioActions
                    liked={false}
                    likeQuantity={5}
                    commentsQuantity={2}
                />

                <ElogioComments />

            </CardContent>
        </Card>
    )
}