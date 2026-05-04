import { notFound } from 'next/navigation'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import { SbmDetailCard } from './sbm-detail-card'
import type { Bookmark } from '@/types'

interface SbmDetailPageWrapperProps {
  slug: string
}

function convertPostToBookmark(post: Awaited<ReturnType<typeof fetchTaskPostBySlug>>): Bookmark {
  if (!post) throw new Error('Post not found')
  
  const content = post.content as Record<string, unknown> || {}
  const firstMedia = post.media?.[0]?.url
  
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    url: (content.url as string) || (content.website as string) || '#',
    description: (content.description as string) || post.summary || '',
    image: (content.image as string) || firstMedia || '/placeholder.svg',
    domain: (content.domain as string) || 
      (content.url ? new URL(content.url as string).hostname.replace('www.', '') : 'example.com'),
    tags: post.tags || [],
    category: (content.category as string) || post.tags?.[0] || 'General',
    createdAt: post.publishedAt || new Date().toISOString(),
    author: {
      id: 'anonymous',
      name: post.authorName || 'Anonymous',
      email: '',
      avatar: '',
      bio: '',
      joinedDate: new Date().toISOString(),
      followers: 0,
      following: 0,
      isVerified: false,
    },
    upvotes: (content.upvotes as number) || (content.likes as number) || 0,
    saves: (content.saves as number) || 0,
    commentsCount: (content.commentsCount as number) || 0,
    isUpvoted: false,
    isSaved: false,
  }
}

export async function SbmDetailPageWrapper({ slug }: SbmDetailPageWrapperProps) {
  let post = null
  try {
    post = await fetchTaskPostBySlug('sbm', slug)
  } catch (error) {
    console.warn('Failed to load SBM post detail', error)
  }

  if (!post) {
    notFound()
  }

  const bookmark = convertPostToBookmark(post)

  // Fetch related bookmarks
  const relatedPosts = await fetchTaskPosts('sbm', 6)
  const related = relatedPosts
    .filter((item) => item.slug !== post?.slug)
    .slice(0, 3)
    .map((item) => convertPostToBookmark(item))

  return <SbmDetailCard bookmark={bookmark} related={related} />
}
