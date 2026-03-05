import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

interface SelectOption {
    value: string
    label: string
}

interface Props {
    placeholder?: string
    label?: string
    options: SelectOption[]
}

export function SelectAlt({ options, label, placeholder }: Props) {
    return (
        <Select>
            <SelectTrigger className="w-full max-w-48 text-sm font-bold border-0 border-b-2">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options.map((item) => (
                        <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}