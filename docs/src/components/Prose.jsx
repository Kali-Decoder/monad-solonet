import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none dark:prose-invert text-muted',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal prose-headings:text-foreground lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-muted',
        // links
        'prose-a:font-semibold prose-a:text-monad-purple',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.monad-purple))] hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-card-bg prose-pre:border prose-pre:border-card-border prose-pre:shadow-lg',
        // code
        'prose-code:text-monad-purple prose-code:bg-card-bg prose-code:px-1 prose-code:py-0.5 prose-code:rounded',
        // hr
        'prose-hr:border-card-border'
      )}
      {...props}
    />
  )
}
