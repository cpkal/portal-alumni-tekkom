import { SidebarIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { Link } from "@inertiajs/react"
import { usePage } from "@inertiajs/react"
import { useMemo } from "react"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  const { url } = usePage()

  // This gives only the pathname from route() (e.g., "/events")
  const eventsPath = useMemo(() => new URL(route('events'), window.location.origin).pathname, [])
  const eventsRegisteredPath = useMemo(() => new URL(route('events.registered'), window.location.origin).pathname, [])
  const isEventsPage = url === eventsPath || url === eventsRegisteredPath;

  const forumPath = useMemo(() => new URL(route('forum'), window.location.origin).pathname, [])
  const forumMyQuestionPath = useMemo(() => new URL(route('forum.my-questions'), window.location.origin).pathname, [])
  const isForumPage = url === forumPath || url === forumMyQuestionPath;

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        {/* appbar logo */}
        <Link href={route('home')}>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
              <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
            </div>
            <p>Portal Alumni TEKOM</p>
          </div>
        </Link>

        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>

        {/* ✅ Corrected conditional menu */}
        {isEventsPage && (
          <div className="flex items-center gap-2 mx-auto">
            <Link href={route('events')}>
              <Button variant="ghost" size="sm">
                Daftar Acara
              </Button>
            </Link>
            <Link href={route('events.registered')}>
              <Button variant="ghost" size="sm">
                Acara Terdaftar
              </Button>
            </Link>
          </div>
        )}

        {isForumPage && (
          <div className="flex items-center gap-2 mx-auto">
            <Link href={route('forum')}>
              <Button variant="ghost" size="sm">
                Forum
              </Button>
            </Link>
            <Link href={route('forum.my-questions')}>
              <Button variant="ghost" size="sm">
                Pertanyaan Saya
              </Button>
            </Link>
          </div>
        )}

        {/* Breadcrumbs */}

        {/* <SearchForm className="w-full sm:ml-auto sm:w-auto" /> */}
      </div>
    </header>
  )
}
