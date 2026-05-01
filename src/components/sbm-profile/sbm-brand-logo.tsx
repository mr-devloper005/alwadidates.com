import { cn } from '@/lib/utils'

const LOGO_SRC = '/favicon.png?v=3'

type SbmBrandLogoProps = {
  className?: string
  showWordmark?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-20 w-20 sm:h-24 sm:w-24',
}

const textMap = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl sm:text-4xl',
}

export function SbmBrandLogo({ className, showWordmark = true, size = 'md' }: SbmBrandLogoProps) {
  return (
    <div className={cn('flex items-center gap-3 sm:gap-4', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SRC}
        alt=""
        width={96}
        height={96}
        className={cn('shrink-0 object-contain', sizeMap[size])}
      />
      {showWordmark ? <span className={cn('font-bold tracking-[-0.04em] text-inherit', textMap[size])}>Alwadidates</span> : null}
    </div>
  )
}
