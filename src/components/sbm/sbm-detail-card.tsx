'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ThumbsUp, MoreHorizontal, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/components/ui/use-toast'
import type { Bookmark } from '@/types'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'

interface SbmDetailCardProps {
  bookmark: Bookmark
  related: Bookmark[]
}

export function SbmDetailCard({ bookmark, related }: SbmDetailCardProps) {
  const { toast } = useToast()
  const router = useRouter()

  const handleUpvote = () => {
    router.push('/login')
    toast({
      title: 'Sign in required',
      description: 'Please log in to like this bookmark.',
    })
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link
            href="/sbm"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Bookmarks
          </Link>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Main Card */}
        <Card className="overflow-hidden border-0 bg-white shadow-lg">
          <CardContent className="p-6 sm:p-8 pt-8">
            {/* Category */}
            <div className="mb-4">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                {bookmark.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              {bookmark.title}
            </h1>

            {/* Author */}
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <User className="h-4 w-4" />
              <span className="font-medium text-gray-900">{bookmark.author?.name || 'Anonymous'}</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <RichContent 
                html={formatRichHtml(bookmark.description)} 
                className="text-base leading-relaxed text-gray-600 prose-p:my-3 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              />
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end border-t border-gray-100 pt-6">
              <Button
                onClick={handleUpvote}
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-gray-200 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <ThumbsUp className="h-4 w-4" />
                Like
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Related Bookmarks */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">More like this</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/sbm/${item.slug}`}
                  className="group block overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-md"
                >
                  <div className="flex items-start">
                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
