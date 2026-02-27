import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil } from "lucide-react";

export default function OneOne() {
    return (
        <div className="w-full flex justify-center">

            <div className="w-[80%] my-8">
                <Tabs defaultValue="overview">
                    <TabsList variant="line" className="w-full flex justify-between">
                        <div>
                            <TabsTrigger value="overview">Líder</TabsTrigger>
                            <TabsTrigger value="analytics">Colegas</TabsTrigger>
                        </div>
                        <div>
                            <Button variant={'ghost'}>Sincronizar 1:1s com calendário</Button>
                            <Button variant={'ghost'}>Nova 1:1</Button>
                        </div>
                    </TabsList>
                    <TabsContent value="overview">
                        <Card>
                            <div className="flex justify-between items-center px-4">
                                <div className="flex justify-center items-center gap-2">
                                    <Avatar size="lg">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h1 className="text-2xl font-bold text-muted-foreground">Rogério Santos</h1>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground">Frequência de 1:1</p>
                                    <Select>
                                        <SelectTrigger className="w-full max-w-48">
                                            <SelectValue placeholder="A cada 2 semanas" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Quanto tempo?</SelectLabel>
                                                <SelectItem value="1-week">Toda semana</SelectItem>
                                                <SelectItem value="2-weeks">A cada 2 semanas</SelectItem>
                                                <SelectItem value="3-weeks">A cada 3 semanas</SelectItem>
                                                <SelectItem value="4-weeks">A cada 4 semanas</SelectItem>
                                                <SelectItem value="dont">Não repete</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </Card>

                        <div className="w-full mt-8 flex justify-between">
                            <div className="flex gap-4">
                                <Select>
                                    <SelectTrigger className="w-full max-w-48">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Status</SelectLabel>
                                            <SelectItem value="all">Todas</SelectItem>
                                            <SelectItem value="lated">Atrasada</SelectItem>
                                            <SelectItem value="future">Futura</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <Select>
                                    <SelectTrigger className="w-full max-w-48">
                                        <SelectValue placeholder="Filtrar por tema" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Temas</SelectLabel>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button variant={'outline'}>Tarefas com Rogerio</Button>
                        </div>

                        <div className="w-full mt-8 flex justify-center items-center">
                            <p className="text-sm">Nenhuma 1:1 por aqui. Que tal marcar uma nova?</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="analytics">
                        <h1>Colegas</h1>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}