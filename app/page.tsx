import { FileStack } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex items-center gap-2 px-6 py-6 md:px-10">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <FileStack className="size-5" aria-hidden="true" />
        </div>
        <span className="text-lg font-semibold tracking-tight">Doxi</span>
      </header>

      <section className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="flex w-full max-w-xl flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Coming soon
          </span>

          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Store and organize your documents with Doxi
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Doxi is a simple, secure home for all your important files. Upload, tag, and find any
              document in seconds — no more digging through folders.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            We&apos;re putting the finishing touches on something great. Check back soon.
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-muted-foreground md:px-10">
        {"\u00A9"} {new Date().getFullYear()} Doxi. All rights reserved.
      </footer>
    </main>
  )
}
