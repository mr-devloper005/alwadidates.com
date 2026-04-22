'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LayoutDashboard, LogOut, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'

export function SbmProfileNavUser() {
  const { user, logout } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  if (!user) return null

  const initial = (user.name || user.email || 'U').slice(0, 1).toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="h-10 gap-2 rounded-full border border-white/15 bg-white/5 px-2 pr-3 text-white hover:bg-white/10"
        >
          <Avatar className="h-8 w-8 border border-white/20">
            {user.avatar ? <AvatarImage src={user.avatar} alt="" /> : null}
            <AvatarFallback className="bg-zinc-800 text-xs text-[#BFFF00]">{initial}</AvatarFallback>
          </Avatar>
          <span className="max-w-[120px] truncate text-sm font-medium">{user.name || user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 border border-white/10 bg-zinc-950 text-white">
        <DropdownMenuItem asChild className="focus:bg-white/10">
          <Link href="/dashboard" className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="focus:bg-white/10">
          <Link href="/profile" className="flex items-center gap-2">
            <UserRound className="h-4 w-4" />
            Profiles
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem
          className="focus:bg-white/10"
          onClick={() => {
            logout()
            toast({ title: 'Signed out' })
            router.push('/')
            router.refresh()
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
