import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-monad-purple py-2 px-4 text-sm font-semibold text-foreground hover:bg-monad-purple/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-monad-purple/50 active:bg-monad-purple/90 transition-colors',
  secondary:
    'rounded-full bg-card-bg border border-card-border py-2 px-4 text-sm font-medium text-foreground hover:bg-card-bg/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-card-border/50 active:text-muted transition-colors',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  // Handle anchor links with smooth scroll
  if (href?.startsWith('#')) {
    const handleClick = (e) => {
      e.preventDefault()
      const targetId = href.slice(1)
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 100 // Account for sticky header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    return (
      <a href={href} className={className} onClick={handleClick} {...props} />
    )
  }

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
