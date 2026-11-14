"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { benefits } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Benefits() {
  return (
    <section className="bg-muted-bg py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Simpler, safer, more automated"
              subtitle="From data import to payroll approval, aga-pay follows a clear rhythm: AI assists, your team reviews, and business rules stay in control."
              centered={false}
            />
            <ul className="mt-10 space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-foreground leading-snug">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-10">
              <div className="space-y-6">
                {[
                  { label: "Payroll prep time saved", value: "70%", width: "70%" },
                  { label: "Statutory compliance readiness", value: "98%", width: "98%" },
                  { label: "HR tickets deflected to AI", value: "45%", width: "45%" },
                  { label: "Teams using human approval", value: "100%", width: "100%" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                      <span className="font-semibold text-primary">
                        {item.value}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-muted leading-relaxed">
                Illustrative metrics for marketing. AI accelerates preparation and
                insight; payroll and statutory outcomes depend on your configured
                rules and approvals.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
