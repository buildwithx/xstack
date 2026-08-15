import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavLink, useLocation } from 'react-router';
import {
  CrownIcon,
  SettingsIcon,
  UserIcon,
  HelpCircleIcon,
  LogOutIcon,
  HomeIcon,
  BugIcon,
  Sheet,
  ReceiptCent,
} from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronsUpDownIcon } from 'lucide-react';
import { useSidebar } from '@/hooks/use-sidebar';
import { useUser, SignOutButton, UserAvatar } from '@clerk/react-router';

const mainNavItems = [
  {
    title: 'Home',
    url: '/',
    icon: HomeIcon,
  },
  {
    title: 'Membership',
    url: '/membership',
    icon: CrownIcon,
  },
  {
    title: 'Issues',
    url: '/issues',
    icon: BugIcon,
  },
  {
    title: 'Cheatsheets',
    url: '/cheatsheets',
    icon: Sheet,
  },
];

const secondaryNavItems = [
  {
    title: 'Settings',
    url: '/settings',
    icon: SettingsIcon,
  },
  {
    title: 'Help & Support',
    url: '/help',
    icon: HelpCircleIcon,
  },
];

export function AppSidebar() {
  const { user, isLoaded } = useUser();
  const { isMobile } = useSidebar();
  const location = useLocation();

  const isItemActive = (url: string) => {
    if (url === '/') return location.pathname === '/';
    return location.pathname.startsWith(url);
  };

  const effectiveName = isLoaded ? (user?.firstName ?? user?.username) : '';
  const effectiveEmail = isLoaded ? user?.primaryEmailAddress?.emailAddress : '';

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      {/* Logo */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip="xStack">
              <NavLink to="/">
                <Avatar className="rounded-md">
                  <AvatarImage className="rounded-md" src="/icons.svg" />
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">xStack</span>
                  <span className="truncate text-xs text-muted-foreground">Developer Hub</span>
                </div>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const active = isItemActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                      <NavLink to={item.url} end={item.url === '/'}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => {
                const active = isItemActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                      <NavLink to={item.url} end={item.url === '/'}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User menu in footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <UserAvatar />
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{effectiveName}</span>
                    <span className="truncate text-xs text-muted-foreground">{effectiveEmail}</span>
                  </div>
                  <ChevronsUpDownIcon className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side={isMobile ? 'bottom' : 'right'}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <UserIcon />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ReceiptCent />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem variant="destructive">
                  <LogOutIcon />
                  <SignOutButton>
                    <button>Sign Out</button>
                  </SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
