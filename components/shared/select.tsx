'use client'

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "../ui/combobox";

interface Props {
    placeholder?: string
    emptyMessage?: string
    options: string[]
}

export function Select({ options, emptyMessage, placeholder }: Props) {
    return (
        <Combobox items={options}>
            <ComboboxInput placeholder={placeholder} showClear />
            <ComboboxContent>
                <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item} value={item}>
                            {item}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}