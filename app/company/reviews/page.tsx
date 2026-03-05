import { SearchInput } from "@/components/shared/search-input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
    {
        id: 'reviews-1',
        nome: 'Pesquisa de Satisfação - Confra IT Universe 2025 🎉🍾🪅🪩',
        status: 'No ar',
        etapa: 'Finalizada'
    },
    {
        id: 'reviews-2',
        nome: 'Desejo Apadrinhar Uma Criança do Lar Jesus Entre As Crianças! 🫶🚸',
        status: 'No ar',
        etapa: 'Finalizada'
    },
    {
        id: 'reviews-3',
        nome: 'Adesão ao transporte e hospedagem para a Confra IT 2025 🚌🧳🏨',
        status: 'No ar',
        etapa: 'Finalizada'
    },
    {
        id: 'reviews-4',
        nome: 'Confra IT 2025 🎉🍾🪅🪩',
        status: 'No ar',
        etapa: 'Finalizada'
    },
]

export default function Reviews() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">Reviews</h1>
            <Separator />
            <SearchInput placeholder="Buscar por nome" />

            <Table>
                <TableCaption>Lista de reviews.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <div className="flex items-center gap-2">
                                <p>Nome</p>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="hover:bg-muted-foregroundhover:bg-accent hover:text-accent-foreground hover:cursor-pointer dark:hover:bg-accent/50">
                                        <ChevronUp size={12} />
                                    </div>
                                    <div className="hover:bg-muted-foregroundhover:bg-accent hover:text-accent-foreground hover:cursor-pointer dark:hover:bg-accent/50">
                                        <ChevronDown size={12} />
                                    </div>
                                </div>
                            </div>
                        </TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Etapa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.nome}</TableCell>
                            <TableCell>
                                <Badge>{item.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge>{item.etapa}</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}