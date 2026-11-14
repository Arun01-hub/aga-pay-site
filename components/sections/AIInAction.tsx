"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  aiExamplePrompts,
  aiLayerPoints,
  aiWorkflowSteps,
  siteConfig,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AIInAction() {
  return (
    <section id="ai-in-action" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Work the way you think — not the way software menus dictate"
          subtitle="Interact with HR and payroll using natural language. AI understands your data, prepares outcomes, and keeps humans in the loop for what matters."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {aiWorkflowSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              title={step.description}
            >
              {step.label}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {aiExamplePrompts.map((example, index) => (
            <motion.div
              key={example.prompt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-gradient-to-br from-white to-primary/[0.03] p-8 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Ask AI
                  </p>
                  <p className="mt-1 text-xl font-semibold text-foreground">
                    &ldquo;{example.prompt}&rdquo;
                  </p>
                </div>
              </div>
              <p className="mt-5 text-muted leading-relaxed">{example.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 rounded-2xl border border-border bg-muted-bg p-8 lg:p-10"
        >
          <h3 className="text-lg font-semibold text-foreground">
            AI as an intelligent layer — not a side chatbot
          </h3>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">
            {siteConfig.positioning} Payroll calculations, permissions, security,
            and approvals remain governed by application business rules and your
            authorized team.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {aiLayerPoints.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
