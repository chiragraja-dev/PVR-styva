import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionPopoverProps {
    label: string;
    selected: string;
    setSelected: (value: string) => void;
    options: string[];
    id: string;
    placeholder: string;
    loading?: boolean;
    disabled?: boolean;
}

export const OptionPopover: React.FC<OptionPopoverProps> = ({
    label,
    selected,
    setSelected,
    options,
    id,
    placeholder,
    loading = false,
    disabled = false,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-full justify-between",
                            disabled && "opacity-50 cursor-not-allowed"
                        )}
                        id={id}
                        disabled={disabled || loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            <>
                                {selected ? selected : placeholder}
                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Command>
                        <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
                        <CommandEmpty>
                            {loading ? "Loading..." : "No results found."}
                        </CommandEmpty>
                        <CommandGroup className=" overflow-auto h-auto max-h-[300px]">
                            {options.map((option) => (
                                <CommandItem
                                    key={option}
                                    value={option}
                                    onSelect={() => {
                                        setSelected(option);
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selected === option ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {option}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};