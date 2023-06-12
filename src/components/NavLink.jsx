import Link from 'next/link'
import clsx from 'clsx'

export function NavLink({ href, className, children }) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900',
        className
      )}
    >
      {children}
    </Link>
  )
}
