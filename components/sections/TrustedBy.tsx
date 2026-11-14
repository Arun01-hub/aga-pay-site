import { integrations, trustedByLogos } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-muted-bg py-12">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted">
          Trusted by growing Indian businesses
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {trustedByLogos.map((name) => (
            <div
              key={name}
              className="flex h-10 items-center justify-center rounded-lg border border-border bg-white px-6 text-sm font-semibold text-slate-400"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <span className="text-xs font-medium uppercase tracking-wider text-muted">
            Integrates with
          </span>
          {integrations.map((name) => (
            <span
              key={name}
              className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-muted border border-border"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
