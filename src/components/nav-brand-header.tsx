"use client";

import * as React from "react";
import Image from "next/image";

import Logo2 from "@/assets/icons/Unbound_Outline_Black_Logo.svg";
import Link from "next/link";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function Brand() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/dashboard">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center  text-sidebar-primary-foreground">
              <Image src={Logo2} alt="Unbound" className="size-8" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Unbound</span>
              <span className="truncate text-xs font-thin">Web UI</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
