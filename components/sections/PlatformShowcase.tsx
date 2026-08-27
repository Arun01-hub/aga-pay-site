"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { platformHighlights } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PlatformShowcase() {
  return (
    <section id="product" className="bg-muted-bg py-20 lg:py-28">
      <Container>
        <SectionHeading title="One platform. Less manual work." />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-16"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
          <DashboardMockup className="relative" variant="showcase" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {platformHighlights.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
