"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarMenu,
} from "@/components/ui/sidebar"
import { Award, Clipboard, Flag, HomeIcon, LocateFixed, LucideMessagesSquare, MessagesSquare, Network } from "lucide-react"
import { NavProjects } from "./nav-projects"

const menuItems = [
    {
        name: "Ínicio",
        url: "/company",
        icon: HomeIcon
    },
    {
        name: "1:1",
        url: "/company/oneone",
        icon: MessagesSquare
    },
    {
        name: "PDI",
        url: "/company/pdi",
        icon: Flag
    },
    {
        name: "Reviews",
        url: "/company/reviews",
        icon: Clipboard
    },
    {
        name: "Feedbacks",
        url: "/company/feedbacks",
        icon: LucideMessagesSquare
    },
    {
        name: "Elogios",
        url: "/company/elogios",
        icon: Award
    },
    {
        name: "OKRs",
        url: "/company/okrs",
        icon: LocateFixed
    },
    {
        name: "Diretório",
        url: "/company/diretorio",
        icon: Network
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            {/* <SidebarHeader /> */}
            <SidebarContent>
                <SidebarMenu className="mt-1">
                    <NavProjects projects={menuItems} />
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar >
    )
}