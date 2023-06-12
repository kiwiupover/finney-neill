export function TermsServicesPolicy({ content }) {
  return (
    <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-slate-700">
        <p className="text-xl font-semibold leading-7 text-amber-700">
          {content.subtitle}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {content.title}
        </h1>
        <div
          className="prose mt-10 max-w-xl text-base leading-7 text-slate-700"
          dangerouslySetInnerHTML={{
            __html: content.page_content,
          }}
        />
      </div>
    </div>
  )
}
