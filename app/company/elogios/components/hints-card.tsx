import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Image from "next/image";

export function HintsCard() {
    return (
        <Card>
            <CardContent className="text-muted-foreground flex flex-col gap-6 text-sm" >
                <Image
                    src="/ilustration-01.png"
                    alt="Business illustration"
                    width={600}
                    height={400}
                />
                <h1 className="text-md font-bold text-center">3 dicas para dar um bom elogio</h1>
                <div>
                    <h2 className="font-semibold">1 - Adicione um valor</h2>
                    <p>Mostre como o elogio está alinhado aos valores da empresa.</p>
                    <p><span className="font-semibold">Dica</span>: use # para adicionar valores</p>
                    <p>Exemplo:</p>
                    <div className="ml-2 flex items-center gap-2">
                        <Check size={16} color="green" />
                        <span className="flex-1">
                            #FocoNoCliente
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold">2 - Seja específico</h2>
                    <p>Descreva ações específicas e com contexto claro</p>
                    <p>Exemplos:</p>
                    <div className="ml-2 flex items-center gap-2">
                        <X size={16} color="red" />
                        <span className="flex-1">
                            “O jeito como você atende clientes”
                        </span>
                    </div>
                    <div className="ml-2 flex items-start gap-2">
                        <Check size={16} color="green" />
                        <span className="flex-1">
                            “A forma com você lidou com Ana durante a ligação de sexta-feira”
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold">3 - Fale das consequências</h2>
                    <p>Diga qual o impacto da ação realizada</p>
                    <p>Exemplo:</p>
                    <div className="ml-2 flex items-start gap-2">
                        <Check
                            size={16}
                            className="mt-1 shrink-0 text-green-600"
                        />
                        <span className="flex-1">
                            “Sua postura calma na ligação mostrou para o time como reagir a um cliente
                            furioso e reverteu uma perda iminente de cliente”
                        </span>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}