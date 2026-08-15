import * as React from 'react';
import {
  Sparkles,
  Plus,
  Bug,
  BookOpen,
  Terminal,
  Zap,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUpRight,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  TrendingUp,
  Layers,
  Cpu,
  ShieldCheck,
  Activity,
  ExternalLink,
  ChevronRight,
  Filter,
  RefreshCw,
  FileCode2,
  PackageCheck,
  CalendarIcon,
  SearchIcon,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

// Sample mock data for issues
interface IssueItem {
  id: string;
  title: string;
  category: 'React 19' | 'Vite 8' | 'Bun' | 'Tailwind v4';
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'High' | 'Medium' | 'Low';
  author: string;
  updatedAt: string;
}

const mockIssues: IssueItem[] = [
  {
    id: 'ISS-101',
    title: 'Optimize React 19 useActionState re-renders in dark mode',
    category: 'React 19',
    status: 'In Progress',
    priority: 'High',
    author: 'Chenter',
    updatedAt: '10 mins ago',
  },
  {
    id: 'ISS-102',
    title: 'Tailwind CSS 4 @theme OKLCH dynamic color token resolution issue',
    category: 'Tailwind v4',
    status: 'Open',
    priority: 'Medium',
    author: 'Sarah Dev',
    updatedAt: '1 hour ago',
  },
  {
    id: 'ISS-103',
    title: 'Bun 1.2 test runner compatibility with React Server Components',
    category: 'Bun',
    status: 'In Progress',
    priority: 'High',
    author: 'Alex K.',
    updatedAt: '3 hours ago',
  },
  {
    id: 'ISS-104',
    title: 'Vite 8 HMR module invalidation latency under full build mode',
    category: 'Vite 8',
    status: 'Resolved',
    priority: 'Low',
    author: 'Chenter',
    updatedAt: '1 day ago',
  },
  {
    id: 'ISS-105',
    title: 'Shadcn Radix primitives accessibility focus ring clipping',
    category: 'React 19',
    status: 'Open',
    priority: 'Medium',
    author: 'Michael R.',
    updatedAt: '2 days ago',
  },
];

// Sample mock data for cheatsheets
interface CheatsheetItem {
  id: string;
  title: string;
  category: 'React 19' | 'Tailwind v4' | 'Vite 8' | 'Bun';
  description: string;
  snippet: string;
  tags: string[];
}

const mockCheatsheets: CheatsheetItem[] = [
  {
    id: 'cs-1',
    title: 'React 19 useActionState Quick Pattern',
    category: 'React 19',
    description: 'Manage form actions and pending state seamlessly without extra state hooks.',
    snippet: `const [state, formAction, isPending] = useActionState(\n  async (prevState, formData) => {\n    const res = await updateProfile(formData);\n    return res.data;\n  },\n  initialState\n);`,
    tags: ['React 19', 'Hooks', 'Forms'],
  },
  {
    id: 'cs-2',
    title: 'Tailwind CSS v4 OKLCH Theme Setup',
    category: 'Tailwind v4',
    description: 'Configure custom themes directly in index.css using modern @theme directive.',
    snippet: `@import "tailwindcss";\n\n@theme inline {\n  --color-primary: oklch(0.85 0.2 130);\n  --font-sans: 'Inter Variable', sans-serif;\n}`,
    tags: ['Tailwind v4', 'CSS', 'Theme'],
  },
  {
    id: 'cs-3',
    title: 'Vite 8 React Plugin Configuration',
    category: 'Vite 8',
    description: 'Fast HMR setup with @vitejs/plugin-react and TypeScript path aliases.',
    snippet: `import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: { alias: { '@': '/src' } }\n});`,
    tags: ['Vite 8', 'Bundler', 'Config'],
  },
  {
    id: 'cs-4',
    title: 'Bun High Performance HTTP Server',
    category: 'Bun',
    description: 'Zero-dependency native HTTP server with websockets support.',
    snippet: `Bun.serve({\n  port: 3000,\n  fetch(req) {\n    return new Response("xStack API Online");\n  },\n});`,
    tags: ['Bun', 'Backend', 'TypeScript'],
  },
];

// Sample activity logs
const mockActivities = [
  {
    id: 'act-1',
    type: 'issue',
    text: 'Chenter updated issue ISS-101 to In Progress',
    time: '12m ago',
    icon: Bug,
  },
  {
    id: 'act-2',
    type: 'deploy',
    text: 'Automated build completed in 118ms via Bun 1.2',
    time: '45m ago',
    icon: Zap,
  },
  {
    id: 'act-3',
    type: 'cheatsheet',
    text: 'Added new cheatsheet: React 19 useActionState',
    time: '2h ago',
    icon: BookOpen,
  },
  {
    id: 'act-4',
    type: 'system',
    text: 'Package updated: @tailwindcss/vite upgraded to 4.3.1',
    time: '5h ago',
    icon: PackageCheck,
  },
];

export function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<string>('all');
  const [categoryFilter, setCategoryFilter] = React.useState<string>('all');
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [bookmarks, setBookmarks] = React.useState<Set<string>>(new Set(['cs-1']));
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [newIssueTitle, setNewIssueTitle] = React.useState('');
  const [newIssueCategory, setNewIssueCategory] = React.useState<
    'React 19' | 'Vite 8' | 'Bun' | 'Tailwind v4'
  >('React 19');
  const [newIssuePriority, setNewIssuePriority] = React.useState<'High' | 'Medium' | 'Low'>(
    'Medium',
  );
  const [issuesList, setIssuesList] = React.useState<IssueItem[]>(mockIssues);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCreateIssue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIssueTitle.trim()) return;

    const newIssue: IssueItem = {
      id: `ISS-${100 + issuesList.length + 1}`,
      title: newIssueTitle,
      category: newIssueCategory,
      status: 'Open',
      priority: newIssuePriority,
      author: 'Chenter',
      updatedAt: 'Just now',
    };

    setIssuesList([newIssue, ...issuesList]);
    setNewIssueTitle('');
    setIsDialogOpen(false);
  };

  // Filtered issues
  const filteredIssues = issuesList.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || issue.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesCategory = categoryFilter === 'all' || issue.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Filtered cheatsheets
  const filteredCheatsheets = mockCheatsheets.filter((cs) => {
    const matchesSearch =
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || cs.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome & Overview Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-linear-to-r from-primary/10 via-background to-accent/10 p-6 md:p-8">
        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Welcome back, Chenter 👋
              </h1>
              <Badge variant="default" className="font-semibold">
                <Sparkles className="size-3 text-primary-foreground" /> Pro Workspace
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              xStack Developer Hub is active with <strong>Bun 1.2</strong>,{' '}
              <strong>React 19</strong>, <strong>Vite 8</strong>, and{' '}
              <strong>Tailwind CSS v4</strong>. Monitor issues, access developer cheatsheets, and
              optimize stack performance.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="default" className="shadow-sm">
                  <Plus className="size-4" /> Create Issue
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Bug className="size-5 text-primary" /> Create New Issue
                  </DialogTitle>
                  <DialogDescription>
                    Log a code issue, bug report, or stack feature request for xStack.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateIssue} className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label htmlFor="issue-title">Issue Title</Label>
                    <Input
                      id="issue-title"
                      placeholder="e.g., Fix React 19 hook hydration warning"
                      value={newIssueTitle}
                      onChange={(e) => setNewIssueTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue-category">Category</Label>
                      <Select
                        value={newIssueCategory}
                        onValueChange={(val) => setNewIssueCategory(val as IssueItem['category'])}
                      >
                        <SelectTrigger id="issue-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="React 19">React 19</SelectItem>
                          <SelectItem value="Vite 8">Vite 8</SelectItem>
                          <SelectItem value="Bun">Bun</SelectItem>
                          <SelectItem value="Tailwind v4">Tailwind v4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issue-priority">Priority</Label>
                      <Select
                        value={newIssuePriority}
                        onValueChange={(val) => setNewIssuePriority(val as IssueItem['priority'])}
                      >
                        <SelectTrigger id="issue-priority">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issue-desc">Description (Optional)</Label>
                    <Textarea
                      id="issue-desc"
                      placeholder="Describe steps to reproduce or stack environment..."
                      className="resize-none h-20"
                    />
                  </div>
                  <DialogFooter className="pt-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Log Issue</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Button variant="outline" onClick={() => setSearchQuery('React 19')}>
              <BookOpen className="size-4" /> Cheatsheets
            </Button>
          </div>
        </div>

        {/* Global Search & Filter Bar */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1">
            <InputGroup className="bg-background/80 backdrop-blur-xs">
              <InputGroupAddon>
                <SearchIcon className="text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder="Search issues, cheatsheets, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-35 bg-background/80">
                <Filter className="size-3.5 mr-1.5 text-muted-foreground" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="React 19">React 19</SelectItem>
                <SelectItem value="Tailwind v4">Tailwind v4</SelectItem>
                <SelectItem value="Vite 8">Vite 8</SelectItem>
                <SelectItem value="Bun">Bun</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32.5 bg-background/80">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* KPI Metric Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Issues
            </CardTitle>
            <Bug className="size-4 text-primary" />
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{issuesList.length}</span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center">
                <TrendingUp className="size-3 mr-0.5" /> +12% resolved
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {issuesList.filter((i) => i.status === 'In Progress').length} in progress,{' '}
              {issuesList.filter((i) => i.status === 'Open').length} open
            </p>
            <Progress value={65} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Saved Cheatsheets
            </CardTitle>
            <BookOpen className="size-4 text-emerald-500" />
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{mockCheatsheets.length}</span>
              <Badge variant="outline" className="text-[10px]">
                {bookmarks.size} Bookmarked
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">React 19, Tailwind v4, Vite 8, Bun</p>
            <Progress value={80} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Build & HMR Speed
            </CardTitle>
            <Zap className="size-4 text-amber-500" />
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">118ms</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Ultra Fast
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Bun runtime & Vite 8 instant HMR</p>
            <Progress value={95} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Stack Uptime
            </CardTitle>
            <ShieldCheck className="size-4 text-blue-500" />
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">99.98%</span>
              <span className="inline-flex items-center size-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
            <Progress value={99} className="mt-2 h-1.5" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area + Sidebar Widget Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Main Interactive Tabs (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex items-center justify-between pb-2">
              <TabsList className="grid grid-cols-3 w-full sm:w-auto">
                <TabsTrigger value="overview" className="gap-1.5 text-xs sm:text-sm">
                  <Layers className="size-3.5" /> Overview
                </TabsTrigger>
                <TabsTrigger value="cheatsheets" className="gap-1.5 text-xs sm:text-sm">
                  <FileCode2 className="size-3.5" /> Cheatsheets ({filteredCheatsheets.length})
                </TabsTrigger>
                <TabsTrigger value="activity" className="gap-1.5 text-xs sm:text-sm">
                  <Activity className="size-3.5" /> Activity
                </TabsTrigger>
              </TabsList>
            </div>

            {/* OVERVIEW TAB */}
            <TabsContent value="overview" className="space-y-6 mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Bug className="size-4 text-primary" /> Stack Issues & Tasks
                    </CardTitle>
                    <CardDescription>
                      Manage and track active issues across React 19, Vite 8, Bun, and Tailwind v4.
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIssuesList([...issuesList])}
                  >
                    <RefreshCw className="size-3.5 mr-1" /> Refresh
                  </Button>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                  {filteredIssues.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">
                      <AlertCircle className="size-8 mx-auto mb-2 opacity-50" />
                      <p>No issues match your current filters.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-25">ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Updated</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredIssues.map((issue) => (
                            <TableRow key={issue.id} className="group">
                              <TableCell className="font-mono text-xs font-semibold text-muted-foreground">
                                {issue.id}
                              </TableCell>
                              <TableCell className="font-medium">
                                <span className="group-hover:text-primary transition-colors cursor-pointer">
                                  {issue.title}
                                </span>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline" className="text-[11px]">
                                  {issue.category}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    issue.priority === 'High'
                                      ? 'destructive'
                                      : issue.priority === 'Medium'
                                        ? 'warning'
                                        : 'secondary'
                                  }
                                >
                                  {issue.priority}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    issue.status === 'Resolved'
                                      ? 'success'
                                      : issue.status === 'In Progress'
                                        ? 'default'
                                        : 'secondary'
                                  }
                                >
                                  {issue.status === 'Resolved' && (
                                    <CheckCircle2 className="size-3" />
                                  )}
                                  {issue.status === 'In Progress' && <Clock className="size-3" />}
                                  {issue.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right text-xs text-muted-foreground">
                                {issue.updatedAt}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t bg-muted/20 px-6 py-3 text-xs text-muted-foreground">
                  <span>
                    Showing {filteredIssues.length} of {issuesList.length} total issues
                  </span>
                  <Button variant="link" size="xs" className="gap-1">
                    View All Issues <ChevronRight className="size-3" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Stack Framework Feature Highlights */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="default">React 19 & Vite 8</Badge>
                      <Cpu className="size-4 text-primary" />
                    </div>
                    <CardTitle className="text-base mt-2">Next-Gen React 19 Features</CardTitle>
                    <CardDescription className="text-xs">
                      Built with Server Actions, useActionState, useOptimistic, and Vite 8
                      lightning-fast HMR.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full text-xs gap-1">
                      Read Docs <ExternalLink className="size-3" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Bun + Tailwind v4</Badge>
                      <Terminal className="size-4 text-emerald-500" />
                    </div>
                    <CardTitle className="text-base mt-2">Bun Engine & Tailwind v4</CardTitle>
                    <CardDescription className="text-xs">
                      High speed JavaScript runtime paired with modern @theme OKLCH color token
                      system.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full text-xs gap-1">
                      View Config <ExternalLink className="size-3" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* CHEATSHEETS TAB */}
            <TabsContent value="cheatsheets" className="space-y-4 mt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredCheatsheets.map((cs) => {
                  const isBookmarked = bookmarks.has(cs.id);
                  const isCopied = copiedId === cs.id;

                  return (
                    <Card key={cs.id} className="flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{cs.category}</Badge>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => toggleBookmark(cs.id)}
                            className={isBookmarked ? 'text-primary' : 'text-muted-foreground'}
                          >
                            {isBookmarked ? (
                              <BookmarkCheck className="size-4" />
                            ) : (
                              <Bookmark className="size-4" />
                            )}
                          </Button>
                        </div>
                        <CardTitle className="text-base mt-1">{cs.title}</CardTitle>
                        <CardDescription className="text-xs">{cs.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        <div className="relative rounded-lg bg-muted/80 p-3 font-mono text-xs overflow-x-auto border border-border">
                          <pre className="text-[11px] leading-relaxed text-foreground">
                            {cs.snippet}
                          </pre>
                          <Button
                            variant="secondary"
                            size="icon-xs"
                            className="absolute right-2 top-2"
                            onClick={() => handleCopy(cs.id, cs.snippet)}
                          >
                            {isCopied ? (
                              <Check className="size-3 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <Copy className="size-3" />
                            )}
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {cs.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] bg-secondary/60 text-secondary-foreground px-2 py-0.5 rounded-md"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* ACTIVITY TAB */}
            <TabsContent value="activity" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="size-4 text-primary" /> Recent Workspace Activity
                  </CardTitle>
                  <CardDescription>
                    Real-time timeline of code commits, issue updates, and stack performance logs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                    {mockActivities.map((act) => {
                      const Icon = act.icon;
                      return (
                        <div key={act.id} className="relative flex items-start gap-3">
                          <div className="absolute -left-6 top-0.5 flex size-5 items-center justify-center rounded-full bg-background border border-primary text-primary">
                            <Icon className="size-3" />
                          </div>
                          <div className="flex-1 space-y-0.5">
                            <p className="text-sm font-medium leading-none">{act.text}</p>
                            <span className="text-xs text-muted-foreground">{act.time}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column: Widgets & Secondary Information (1 Col) */}
        <div className="space-y-6">
          {/* Stack Environment Status Widget */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Cpu className="size-4 text-primary" /> Stack Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-muted-foreground">Bun Engine</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="size-2 rounded-full bg-emerald-500" /> v1.2.x (Active)
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-muted-foreground">React Framework</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="size-2 rounded-full bg-emerald-500" /> v19.2.7
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-muted-foreground">Vite Bundler</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="size-2 rounded-full bg-emerald-500" /> v8.1.0 (HMR Ready)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tailwind CSS</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="size-2 rounded-full bg-emerald-500" /> v4.3.1 (@theme)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sprint & Release Calendar Widget */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CalendarIcon className="size-4 text-primary" /> Workspace Calendar
              </CardTitle>
              <CardDescription className="text-xs">
                Upcoming release milestones and code syncs
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-xs w-full"
              />
            </CardContent>
          </Card>

          {/* Quick Tip / AI Assistant Widget */}
          <Card className="bg-linear-to-br from-primary/5 via-background to-accent/10 border-primary/20">
            <CardHeader className="pb-2">
              <Badge variant="default" className="w-fit">
                <Sparkles className="size-3 mr-1" /> Developer Tip
              </Badge>
              <CardTitle className="text-sm mt-1">OKLCH Palette in Tailwind v4</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                In Tailwind v4, standard shadcn tokens use OKLCH colors for improved gamut precision
                in both dark and light modes.
              </p>
              <Button variant="link" size="xs" className="p-0 h-auto gap-1 text-primary">
                Learn more in Cheatsheets <ArrowUpRight className="size-3" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
