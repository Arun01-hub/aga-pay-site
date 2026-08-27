import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 text-center sm:px-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.3),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to simplify payroll?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Join growing businesses that trust aga-pay to manage their
              workforce. Start free — no credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={siteConfig.links.startFree}
                variant="secondary"
                size="lg"
                className="min-w-[180px] text-center"
              >
                Start Free
              </Button>
              <Button
                href={siteConfig.links.demo}
                variant="outline"
                size="lg"
                className="min-w-[180px] border-white/30 bg-white/10 text-white hover:bg-white/20 text-center"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
