"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingTiers, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Simple, transparent pricing"
          subtitle="Start with AI-assisted HR and payroll. Scale statutory compliance and approval workflows as you grow."
        />

        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium",
              !annual ? "text-foreground" : "text-muted"
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative h-7 w-12 rounded-full transition-colors",
              annual ? "bg-primary" : "bg-slate-200"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform",
                annual && "translate-x-5"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-foreground" : "text-muted"
            )}
          >
            Annual
            <span className="ml-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              Save 20%
            </span>
          </span>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                tier.highlighted
                  ? "border-primary bg-white shadow-xl shadow-primary/10 ring-1 ring-primary"
                  : "border-border bg-white"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <div className="mt-6">
                {tier.price.monthly === null ? (
                  <span className="text-4xl font-bold text-foreground">
                    Custom
                  </span>
                ) : tier.price.monthly === 0 ? (
                  <span className="text-4xl font-bold text-foreground">
                    Free
                  </span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      $
                      {annual ? tier.price.annual : tier.price.monthly}
                    </span>
                    <span className="text-muted">/mo</span>
                  </div>
                )}
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={
                  tier.name === "Enterprise" ? "#" : siteConfig.links.startFree
                }
                variant={tier.highlighted ? "primary" : "outline"}
                className="mt-8 w-full text-center"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
