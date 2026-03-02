import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, SearchIcon, SquarePen, ThumbsUp, X } from "lucide-react";
import Image from "next/image";

export default function Elogios() {
    return (
        <Tabs defaultValue="mural">
            <TabsList variant="line" className="w-full flex justify-between">
                <div>
                    <TabsTrigger value="mural">Mural</TabsTrigger>
                    <TabsTrigger value="elogios">Seus elogios</TabsTrigger>
                </div>
                <Button className="flex gap-2 cursor-pointer">
                    <SquarePen />
                    <p>Quer escrever um elogio agora?</p>
                </Button>
            </TabsList>
            <TabsContent value="mural" className="grid grid-cols-12 gap-8">
                <div className="col-span-7 flex flex-col gap-8">
                    <div className="w-full flex justify-between">
                        <div className="flex gap-4">
                            <Select>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Todos da empresa" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecionar alvo</SelectLabel>
                                        <SelectItem value="all">Todos da empresa</SelectItem>
                                        <SelectItem value="lated">Seus pares</SelectItem>
                                        <SelectItem value="future">Seus liderados diretos e indiretos</SelectItem>
                                        <SelectItem value="future">Seus liderados diretos</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Field className="max-w-sm">
                                <InputGroup>
                                    <InputGroupInput id="inline-start-input" placeholder="Buscar por nome" />
                                    <InputGroupAddon align="inline-end">
                                        <SearchIcon className="text-muted-foreground" />
                                    </InputGroupAddon>
                                </InputGroup>
                            </Field>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <Card>
                                <CardContent className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center">
                                        <Avatar size="lg">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h1 className="font-semibold">Nome da Pessoa</h1>
                                            <p className="text-sm">recebeu um elogio de <span className="font-semibold">Desenvolvimento Organizacional</span> • há 3 dias</p>
                                        </div>
                                    </div>

                                    <div> {/** Conteudo */}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br />
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <br />

                                        <Image
                                            src={'/person-01.jpg'}
                                            alt=""
                                            width={600}
                                            height={400}
                                        />
                                        <br />

                                        <p>#CEMPORCENTOFOCO</p>
                                    </div>

                                    <Separator />

                                    <div className="flex items-center justify-between"> {/** Curtidas */}
                                        <Button variant={'outline'} className="cursor-pointer">
                                            <ThumbsUp size={16} />
                                            <p>Curtir</p>
                                        </Button>
                                        <div className="flex items-center gap-1 font-regular text-sm">
                                            <div className="flex items-center gap-1">
                                                <ThumbsUp size={16} />
                                                <p>3</p>
                                            </div>
                                            <p> • 2 comentários</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/** Comentarios */}
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Input placeholder="Deixe seu comentário" />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="text-muted-foreground text-sm">
                                                <div>
                                                    <span className="font-semibold">Outra Pessoa</span>
                                                    <span> • há 3 dias</span>
                                                </div>
                                                <p>Excepteur sint occaecat cupidatat non proident.</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                        <li>
                            <Card>
                                <CardContent className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center">
                                        <Avatar size="lg">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h1 className="font-semibold">Nome da Pessoa</h1>
                                            <p className="text-sm">recebeu um elogio de <span className="font-semibold">Desenvolvimento Organizacional</span> • há 3 dias</p>
                                        </div>
                                    </div>

                                    <div> {/** Conteudo */}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br />
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <br />

                                        <Image
                                            src={'/person-01.jpg'}
                                            alt=""
                                            width={600}
                                            height={400}
                                        />
                                        <br />

                                        <p>#CEMPORCENTOFOCO</p>
                                    </div>

                                    <Separator />

                                    <div className="flex items-center justify-between"> {/** Curtidas */}
                                        <Button variant={'outline'} className="cursor-pointer">
                                            <ThumbsUp size={16} />
                                            <p>Curtir</p>
                                        </Button>
                                        <div className="flex items-center gap-1 font-regular text-sm">
                                            <div className="flex items-center gap-1">
                                                <ThumbsUp size={16} />
                                                <p>3</p>
                                            </div>
                                            <p> • 2 comentários</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/** Comentarios */}
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Input placeholder="Deixe seu comentário" />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="text-muted-foreground text-sm">
                                                <div>
                                                    <span className="font-semibold">Outra Pessoa</span>
                                                    <span> • há 3 dias</span>
                                                </div>
                                                <p>Excepteur sint occaecat cupidatat non proident.</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                        <li>
                            <Card>
                                <CardContent className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center">
                                        <Avatar size="lg">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h1 className="font-semibold">Nome da Pessoa</h1>
                                            <p className="text-sm">recebeu um elogio de <span className="font-semibold">Desenvolvimento Organizacional</span> • há 3 dias</p>
                                        </div>
                                    </div>

                                    <div> {/** Conteudo */}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br />
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <br />

                                        <Image
                                            src={'/person-01.jpg'}
                                            alt=""
                                            width={600}
                                            height={400}
                                        />
                                        <br />

                                        <p>#CEMPORCENTOFOCO</p>
                                    </div>

                                    <Separator />

                                    <div className="flex items-center justify-between"> {/** Curtidas */}
                                        <Button variant={'outline'} className="cursor-pointer">
                                            <ThumbsUp size={16} />
                                            <p>Curtir</p>
                                        </Button>
                                        <div className="flex items-center gap-1 font-regular text-sm">
                                            <div className="flex items-center gap-1">
                                                <ThumbsUp size={16} />
                                                <p>3</p>
                                            </div>
                                            <p> • 2 comentários</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/** Comentarios */}
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Input placeholder="Deixe seu comentário" />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="text-muted-foreground text-sm">
                                                <div>
                                                    <span className="font-semibold">Outra Pessoa</span>
                                                    <span> • há 3 dias</span>
                                                </div>
                                                <p>Excepteur sint occaecat cupidatat non proident.</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                        <li>
                            <Card>
                                <CardContent className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center">
                                        <Avatar size="lg">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h1 className="font-semibold">Nome da Pessoa</h1>
                                            <p className="text-sm">recebeu um elogio de <span className="font-semibold">Desenvolvimento Organizacional</span> • há 3 dias</p>
                                        </div>
                                    </div>

                                    <div> {/** Conteudo */}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br />
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <br />

                                        <Image
                                            src={'/person-01.jpg'}
                                            alt=""
                                            width={600}
                                            height={400}
                                        />
                                        <br />

                                        <p>#CEMPORCENTOFOCO</p>
                                    </div>

                                    <Separator />

                                    <div className="flex items-center justify-between"> {/** Curtidas */}
                                        <Button variant={'outline'} className="cursor-pointer">
                                            <ThumbsUp size={16} />
                                            <p>Curtir</p>
                                        </Button>
                                        <div className="flex items-center gap-1 font-regular text-sm">
                                            <div className="flex items-center gap-1">
                                                <ThumbsUp size={16} />
                                                <p>3</p>
                                            </div>
                                            <p> • 2 comentários</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/** Comentarios */}
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Input placeholder="Deixe seu comentário" />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Avatar size="lg">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="text-muted-foreground text-sm">
                                                <div>
                                                    <span className="font-semibold">Outra Pessoa</span>
                                                    <span> • há 3 dias</span>
                                                </div>
                                                <p>Excepteur sint occaecat cupidatat non proident.</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                    </ul>
                </div>

                <div className="col-span-5 ">
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
                </div>

            </TabsContent>
            <TabsContent value="elogios">
                <h1>Seus elogios</h1>
            </TabsContent>
        </Tabs>
    );
}