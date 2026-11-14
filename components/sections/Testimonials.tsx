"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Trusted by HR and finance teams in India"
          subtitle="Leaders use aga-pay to reduce manual payroll work, stay statutory-ready, and keep humans in control of sensitive decisions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-border bg-white p-8"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 flex-1 text-muted leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${testimonial.color}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
