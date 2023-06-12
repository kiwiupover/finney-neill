import clsx from 'clsx'

export default function ModalBackground({ className }) {
  return (
    <div
      className={clsx(
        'fixed inset-0 bg-slate-400 bg-opacity-25 backdrop-blur-2xl',
        className
      )}
    />
  )
}
