import { SearchInput } from "@/components/shared/search-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, SquarePen, X } from "lucide-react";
import Image from "next/image";
import { ElogioCard } from "./components/elogio-card/elogio-card";
import { Select } from "@/components/shared/select";
import { HintsCard } from "./components/hints-card";

const options = [
    "Todos da empresa",
    "Seus pares",
    "Seus liderados diretos e indiretos",
    "Seus liderados diretos",
];

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
                        <div className="w-full flex gap-4">
                            <Select
                                placeholder="Selecionar alvo"
                                options={options}
                                emptyMessage="asd"
                            />

                            <SearchInput placeholder="Buscar por nome" />

                        </div>
                    </div>

                    <ul className="flex flex-col gap-8">
                        {/* {[].map((item) => (
                        ))} */}
                        <li>
                            <ElogioCard />
                        </li>
                        <li>
                            <ElogioCard />
                        </li>
                    </ul>
                </div>

                <div className="col-span-5 ">
                    <HintsCard />
                </div>
            </TabsContent>

            <TabsContent value="elogios">
                <h1>Seus elogios</h1>
            </TabsContent>
        </Tabs>
    );
}