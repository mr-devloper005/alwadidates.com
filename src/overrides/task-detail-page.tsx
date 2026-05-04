import type { TaskKey } from '@/lib/site-config'
import { SbmDetailPageWrapper } from '@/components/sbm/sbm-detail-page-wrapper'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ task, slug }: { task: TaskKey; slug: string }) {
  if (task === 'sbm') {
    return <SbmDetailPageWrapper slug={slug} />
  }
  return null
}
