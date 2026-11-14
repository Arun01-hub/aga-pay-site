"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Brain,
  Database,
  IndianRupee,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import {
  featureCategories,
  type FeatureCategoryId,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categoryMeta: Record<
  FeatureCategoryId,
  { icon: typeof Sparkles; accent: string }
> = {
  "ai-hr": { icon: Sparkles, accent: "from-primary/10 to-accent/5" },
  "ai-payroll": { icon: Bot, accent: "from-violet-500/10 to-primary/5" },
  "hr-payroll": { icon: Users, accent: "from-slate-100 to-white" },
  "indian-payroll": { icon: IndianRupee, accent: "from-teal-500/10 to-white" },
  "data-migration": { icon: Database, accent: "from-amber-500/10 to-white" },
  security: { icon: Shield, accent: "from-primary/10 to-white" },
};

export function Features() {
  const [activeId, setActiveId] = useState<FeatureCategoryId>("ai-hr");
  const active = featureCategories.find((c) => c.id === activeId)!;
  const MetaIcon = categoryMeta[activeId].icon;

  return (
    <section id="features" className="bg-muted-bg py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Everything you need — with AI built into every workflow"
          subtitle="Explore capabilities by category. From intelligent copilots to Indian statutory payroll and enterprise-grade control."
        />

        <div className="mt-12 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div className="flex min-w-min gap-2 sm:flex-wrap sm:min-w-0 sm:justify-center">
            {featureCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "border border-border bg-white text-muted hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "mt-10 rounded-2xl border border-border bg-gradient-to-br p-8 lg:p-10",
              categoryMeta[activeId].accent
            )}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <MetaIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {active.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-muted leading-relaxed">
                    {active.subtitle}
                  </p>
                </div>
              </div>
              {(activeId === "ai-hr" || activeId === "ai-payroll") && (
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-xs font-medium text-primary">
                  <Brain className="h-3.5 w-3.5" />
                  AI-native
                </div>
              )}
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {active.features.map((feature, index) => (
                <motion.li
                  key={feature.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="rounded-xl border border-border/80 bg-white/90 p-5 backdrop-blur-sm transition-shadow hover:shadow-md hover:shadow-primary/5"
                >
                  <p className="font-medium text-foreground">{feature.name}</p>
                  {feature.description && (
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
