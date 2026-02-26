"use client"

import { Bell, ChevronDown, CircleQuestionMark, Grid3x3, Menu, MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

function Header() {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="w-full p-2 bg-background">
            <div className="w-full">
                <div className=" w-full flex justify-between items-center">
                    <div className="flex justify-between items-center gap-2">
                        <div>
                            <Button variant={'ghost'} onClick={toggleSidebar}>
                                <MenuIcon />
                            </Button>
                        </div>
                        <h1>IT Universe</h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant={'ghost'}>
                            <Grid3x3 />
                        </Button>
                        <Button variant={'ghost'}>
                            <CircleQuestionMark />
                        </Button>
                        <Button variant={'ghost'}>
                            <Bell />
                        </Button>
                        <Button variant={'ghost'}>
                            <div className="flex gap-2 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <ChevronDown />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    Header
}