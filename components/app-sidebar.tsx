"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar"
import { Award, Flag, HomeIcon, LocateFixed, LucideMessagesSquare, MessagesSquare, MessagesSquareIcon, Network } from "lucide-react"
import { NavProjects } from "./nav-projects"

const menuItems = [
    {
        name: "Ínicio",
        url: "/company",
        icon: HomeIcon
    },
    {
        name: "1:1",
        url: "#",
        icon: MessagesSquare
    },
    {
        name: "PDI",
        url: "#",
        icon: Flag
    },
    {
        name: "Reviews",
        url: "#",
        icon: MessagesSquareIcon
    },
    {
        name: "Feedbacks",
        url: "#",
        icon: LucideMessagesSquare
    },
    {
        name: "Elogios",
        url: "#",
        icon: Award
    },
    {
        name: "OKRs",
        url: "#",
        icon: LocateFixed
    },
    {
        name: "Diretório",
        url: "#",
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