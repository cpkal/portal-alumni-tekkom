import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  Waypoints,
  User,
  Settings2,
  Home,
  MessageSquare,
  BriefcaseBusiness,
  Calendar,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePage } from "@inertiajs/react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/",
      icon: Home,
      // isActive: true,
    },
    {
      title: "Profile & Networks",
      url: "/my-networks",
      icon: Waypoints,
    },
    {
      title: "Tracer Study",
      url: "/tracer-study",
      icon: BookOpen,
    },
    {
      title: "Forum",
      url: "/forum-discussion",
      icon: MessageSquare,
    },
    {
      title: "Job & Internships",
      url: "/job-vacancies?page=1",
      icon: BriefcaseBusiness,
    },
    {
      title: "Events",
      url: "/events",
      icon: Calendar,
    },
  ],
  navSecondary: [
    {
      title: "Setting",
      url: "#",
      icon: Settings2,
    },
    // {
    //   title: "Feedback",
    //   url: "#",
    //   icon: Send,
    // },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { auth }: any = usePage().props;
  return (
    <Sidebar
      // h-[calc(100svh-var(--header-height))]!
      className="top-(--header-height) h-min mx-4 my-2 p-1 rounded-lg border bg-background shadow-sm"
      {...props}
    >
      {/* <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader> */}
      <SidebarContent className="p-3 bg-background">
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter className="p-3 bg-background">
        <NavUser user={auth.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
