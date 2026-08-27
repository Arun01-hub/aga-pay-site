"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { benefits } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Benefits() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Built for your business"
              subtitle="Everything you need to run payroll and HR operations efficiently — without the complexity."
              centered={false}
            />
            <ul className="mt-10 space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-foreground">
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
                  { label: "Payroll processed", value: "100%", width: "100%" },
                  { label: "Compliance score", value: "98%", width: "98%" },
                  { label: "Time saved weekly", value: "12 hrs", width: "75%" },
                  { label: "Employee satisfaction", value: "4.8/5", width: "96%" },
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
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
