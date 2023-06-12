import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-md focus:outline-none',
}

const sizeStyles = {
  small: 'text-sm py-2 px-3 lg:py-2 lg:px-3',
  medium: 'text-base py-3 px-4 lg:py-4 lg:px-6',
  large: 'text-lg py-3 px-4 lg:py-5 lg:px-7',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-800 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-900 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    amber:
      'bg-amber-700 text-white hover:text-slate-100 hover:bg-amber-600 active:bg-amber-800 active:text-amber-100 focus-visible:outline-amber-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    amber:
      'ring-amber-200 text-amber-700 hover:text-amber-900 hover:ring-amber-300 active:bg-amber-100 active:text-amber-700 focus-visible:outline-blue-600 focus-visible:ring-amber-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  size = 'medium',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    sizeStyles[size],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
