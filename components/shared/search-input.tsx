import { SearchIcon } from "lucide-react";
import { Field } from "../ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";

interface Props {
    placeholder?: string
}

export function SearchInput({ placeholder = "Buscar..." }: Props) {
    return (
        <Field className="max-w-sm">
            <InputGroup>
                <InputGroupInput id="inline-start-input" placeholder={placeholder} />
                <InputGroupAddon align="inline-end">
                    <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
            </InputGroup>
        </Field>
    );
}