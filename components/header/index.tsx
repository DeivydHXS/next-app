import { Bell, ChevronDown, CircleQuestionMark, Grid3x3, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "../ui/button";

function Header() {
    return (
        <div className="p-2 bg-accent">
            <div className="w-full flex items-center">
                <Drawer
                    direction="left">
                    <DrawerTrigger>
                        <div className="p-2 hover:bg-muted-foreground cursor-pointer rounded-2xl">
                            <Menu />
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerClose>
                                <Button variant="outline">X</Button>
                            </DrawerClose>
                            <DrawerTitle></DrawerTitle>
                            <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>


                <div className="px-4 w-full flex justify-between items-center">
                    <h1>IT Universe</h1>

                    <div className="flex items-center gap-4">
                        <div className="p-1 rounded-2xl cursor-pointer hover:bg-muted-foreground">
                            <Grid3x3 />
                        </div>
                        <div className="p-1 rounded-2xl cursor-pointer hover:bg-muted-foreground">
                            <CircleQuestionMark />
                        </div>
                        <div className="p-1 rounded-2xl cursor-pointer hover:bg-muted-foreground">
                            <Bell />
                        </div>
                        <div className="p-1 rounded-2xl cursor-pointer hover:bg-muted-foreground">
                            <div className="flex gap-2 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <ChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    Header
}