import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge";
import { EllipsisVertical } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Pdi() {
    return (
        <Tabs defaultValue="overview">
            <TabsList variant="line" className="w-full flex justify-between">
                <div>
                    <TabsTrigger value="overview">Meu desenvolvimento</TabsTrigger>
                    <TabsTrigger value="analytics">Instruções de PDI</TabsTrigger>
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full max-w-48 text-sm font-bold border-0 border-b-2">
                            <SelectValue placeholder="Trilha de Onboarding" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Escolha o PDI</SelectLabel>
                                <SelectItem value="onboarding">Trilha de Onboarding</SelectItem>
                                <SelectItem value="pdi-cycle">Ciclo PDI</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </TabsList>

            <TabsContent value="overview" className="flex flex-col gap-8">

                <Drawer direction="right">
                    <Card>
                        <CardContent>
                            <div className="flex justify-between items-center gap-8">
                                <div className="min-w-fit flex justify-center items-center gap-4">
                                    <Avatar size="lg">
                                        <AvatarImage src="https://github.com/deivydhxs.png" />
                                        <AvatarFallback>DH</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <h1 className="text-2xl font-bold text-muted-foreground">Deivyd Homam</h1>
                                        <p className="text-xs font-bold">Perfil</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Field className="w-full">
                                        <FieldLabel htmlFor="progress-pdi">
                                            <span>Progresso geral em PDI</span>
                                            <span className="ml-auto">75%</span>
                                        </FieldLabel>
                                        <Progress value={75} id="progress-pdi" />
                                    </Field>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="w-full mt-8 flex justify-between">
                        <div className="flex gap-4">
                            <Select>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Filtrar por" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Filtrar por</SelectLabel>
                                        <SelectItem value="finished">Finalizada</SelectItem>
                                        <SelectItem value="in-progress">Em progresso</SelectItem>
                                        <SelectItem value="not-started">Não iniciada</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div>
                        <Button variant={'default'}>Nova área de desenvolvimento</Button>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-semibold">Área de desenvolvimento</h1>
                        <p>Objetivos de desenvolvimento. Defina estratégias para atingir esses objetivos criando ações.</p>
                    </div>

                    <DrawerTrigger asChild>
                        <Card className="cursor-pointer">
                            <CardContent>
                                <div className="flex justify-between">
                                    <div className="min-w-fit flex flex-col gap-2">
                                        <Badge>Finalizada</Badge>
                                        <h1 className="font-medium">Trilha de Onboarding</h1>
                                        <div className="flex gap-2 text-sm">
                                            <p>Desenvolver</p>
                                            <Badge>43 ações</Badge>
                                        </div>
                                    </div>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant={'ghost'}>
                                                <EllipsisVertical />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuGroup>
                                                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                                <DropdownMenuItem>Apagar</DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </CardContent>
                        </Card>
                    </DrawerTrigger>

                    <div className="w-full mt-8 flex flex-col justify-center items-center">
                        <span className="text-sm">Crie uma <b className="text-muted-foreground">área de desenvolvimento</b> e aproveite para <b className="text-muted-foreground">vincular</b></span>
                        <span className="text-sm"><b className="text-muted-foreground">conteúdos</b> da <a href=""><b className="text-muted-foreground">Learning.Rocks</b></a> nos seus <b className="text-muted-foreground">tarefas</b>.</span>
                        <Button variant={'outline'} className="mt-8">Ir para Learning.Rocks</Button>
                    </div>

                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Move Goal</DrawerTitle>
                            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                        </DrawerHeader>
                        <div className="no-scrollbar overflow-y-auto px-4">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <p
                                    key={index}
                                    className="mb-4 leading-normal style-lyra:mb-2 style-lyra:leading-relaxed"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            ))}
                        </div>
                        <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </TabsContent>

            <TabsContent value="analytics">
                <h1>Colegas</h1>
            </TabsContent>
        </Tabs>
    );
}