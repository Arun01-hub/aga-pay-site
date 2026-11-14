"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardMockupProps {
  className?: string;
  variant?: "hero" | "showcase";
}

export function DashboardMockup({
  className,
  variant = "hero",
}: DashboardMockupProps) {
  const isShowcase = variant === "showcase";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-white shadow-2xl shadow-indigo-500/10",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-muted-bg px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="mx-auto flex h-6 w-48 items-center justify-center rounded-md bg-white text-xs text-muted">
          app.aga-pay.com
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={cn(
            "hidden shrink-0 border-r border-border bg-muted-bg sm:block",
            isShowcase ? "w-48 p-4" : "w-36 p-3"
          )}
        >
          <div className="mb-6 flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary" />
            <div className="h-3 w-16 rounded bg-slate-200" />
          </div>
          <div className="space-y-2">
            {[true, false, false, false, false].map((active, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5",
                  active ? "bg-primary/10" : ""
                )}
              >
                <div
                  className={cn(
                    "h-3 w-3 rounded",
                    active ? "bg-primary" : "bg-slate-200"
                  )}
                />
                <div
                  className={cn(
                    "h-2 rounded",
                    active ? "w-16 bg-primary/30" : "w-14 bg-slate-200"
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className={cn("flex-1", isShowcase ? "p-6" : "p-4")}>
          {/* AI prompt bar — hero */}
          {!isShowcase && (
            <div className="mb-4 flex items-center gap-2 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 px-3 py-2.5">
              <Sparkles className="h-4 w-4 shrink-0 text-primary" />
              <span className="truncate text-xs font-medium text-foreground sm:text-sm">
                Prepare September payroll for review…
              </span>
            </div>
          )}

          {isShowcase && (
            <div className="mb-4 rounded-lg border border-border bg-muted-bg p-3">
              <div className="flex items-center gap-2 text-xs text-muted">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                AI Copilot
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">
                &ldquo;Why did Ravi&apos;s salary change this month?&rdquo;
              </p>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Salary revision on 12 Sep + 2 LOP days — view calculation trace
              </p>
            </div>
          )}

          {/* Stats row */}
          <div
            className={cn(
              "grid gap-3",
              isShowcase ? "grid-cols-4" : "grid-cols-2 sm:grid-cols-3"
            )}
          >
            {[
              { label: "Employees", value: "248", color: "bg-indigo-500" },
              { label: "Payroll", value: "₹84.2L", color: "bg-teal-500" },
              { label: "Attendance", value: "96%", color: "bg-violet-500" },
              ...(isShowcase
                ? [{ label: "Awaiting approval", value: "1", color: "bg-amber-500" }]
                : []),
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-muted-bg p-3"
              >
                <div className="flex items-center gap-2">
                  <div className={cn("h-2 w-2 rounded-full", stat.color)} />
                  <span className="text-[10px] text-muted">{stat.label}</span>
                </div>
                <div className="mt-1 text-lg font-bold text-foreground">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div
            className={cn(
              "mt-4 rounded-lg border border-border bg-muted-bg",
              isShowcase ? "p-5" : "p-3"
            )}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-24 rounded bg-slate-300" />
              <div className="h-2 w-16 rounded bg-slate-200" />
            </div>
            <div
              className={cn(
                "flex items-end gap-1.5",
                isShowcase ? "h-32" : "h-20"
              )}
            >
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                (height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/60"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </div>

          {/* Table rows */}
          {isShowcase && (
            <div className="mt-4 space-y-2">
              {[
                { status: "Ready for approval", tone: "bg-amber-100 text-amber-800" },
                { status: "Processed", tone: "bg-teal-100 text-teal-800" },
                { status: "Processed", tone: "bg-teal-100 text-teal-800" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-border p-3"
                >
                  <div className="h-8 w-8 rounded-full bg-slate-200" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 w-32 rounded bg-slate-300" />
                    <div className="h-2 w-20 rounded bg-slate-200" />
                  </div>
                  <div
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-medium",
                      row.tone
                    )}
                  >
                    {row.status}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
