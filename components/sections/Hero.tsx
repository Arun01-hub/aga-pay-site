"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "@/components/ui/DashboardMockup";

export function Hero() {
  return (
    <section className="hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Payroll &amp; HR platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {siteConfig.tagline.split(",")[0]},
              <span className="text-gradient"> remarkably simple</span>
            </h1>
            <p className="mt-6 text-lg text-muted sm:text-xl">
              Manage employees, payroll, attendance and more from one simple
              platform.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={siteConfig.links.startFree} size="lg">
                Start Free
              </Button>
              <Button href={siteConfig.links.demo} variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
            <DashboardMockup className="relative" variant="hero" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
