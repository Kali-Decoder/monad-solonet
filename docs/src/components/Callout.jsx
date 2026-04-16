import clsx from 'clsx'

import { Icon } from '@/components/Icon'

const styles = {
  note: {
    container:
      'bg-card-bg ring-1 ring-card-border',
    title: 'text-monad-purple',
    body: 'text-muted prose-a:text-monad-purple prose-code:text-monad-purple',
  },
  warning: {
    container:
      'bg-card-bg ring-1 ring-card-border',
    title: 'text-amber-500',
    body: 'text-muted [--tw-prose-underline:theme(colors.amber.400)] prose-a:text-amber-500 prose-code:text-amber-500',
  },
}

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="amber" {...props} />,
}

export function Callout({ type = 'note', title, children }) {
  let IconComponent = icons[type]

  return (
    <div className={clsx(
      'my-8 flex flex-col md:flex-row gap-4 rounded-3xl p-4 md:p-6',
      styles[type].container
    )}>
      <IconComponent className="h-8 w-8 mb-2 md:mb-0 md:mr-4 flex-none" />
      <div className="flex-auto min-w-0">

        <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
          {title}
        </p>
        <div className={clsx(
          'prose w-full max-w-none break-words overflow-auto',
          styles[type].body
        )}>
          {children}
        </div>
      </div>
    </div>
  )

}
