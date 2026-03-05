import { UserAvatar } from "@/components/shared/user-avatar";
import { Input } from "@/components/ui/input";

export function ElogioComments() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <UserAvatar src="" fallback="DH" />
                <Input placeholder="Deixe seu comentário" />
            </div>
            
            <div className="flex gap-2 items-center">
                <UserAvatar src="https://github.com/shadcn.png" fallback="CN" />

                <div className="text-muted-foreground text-sm">
                    <div>
                        <span className="font-semibold">Outra Pessoa</span>
                        <span> • há 3 dias</span>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proident.</p>
                </div>
            </div>
        </div>
    );
}