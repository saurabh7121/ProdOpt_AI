import { useState,useEffect } from "react";
import api from "./services/api"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
  Gauge,
  Plus,
  Settings2,
  TrendingUp,
  Factory,
  ArrowRight,
  Clock3,
  Users,
} from "lucide-react";

import CreateLine from "./pages/CreateLine";
import Analysis from "./pages/Analysis";
import Optimization from "./pages/Optimization";

function App() {
  const [page, setPage] = useState("dashboard");


  useEffect(() => {
    api
      .get("/health")
      .then((response) => {
        console.log("✅ BACKEND CONNECTED");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("❌ BACKEND CONNECTION FAILED");
        console.error(error);
      });
  }, []);




  if (page === "create") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navigation page={page} setPage={setPage} />
        <CreateLine />
      </div>
    );
  }

  if (page === "analysis") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navigation page={page} setPage={setPage} />
        <Analysis />
      </div>
    );
  }

  if (page === "optimization") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navigation page={page} setPage={setPage} />
        <Optimization />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation page={page} setPage={setPage} />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-blue-400">
              <Factory size={16} />
              Production Command Center
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Production Line Overview
            </h1>

            <p className="mt-2 max-w-2xl text-slate-400">
              Monitor production performance, identify bottlenecks and
              optimize workstation utilization.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setPage("create")}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
            >
              <Plus size={17} />
              Create Line
            </button>

            <button
              onClick={() => setPage("analysis")}
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-800"
            >
              <BarChart3 size={17} />
              Run Analysis
            </button>
          </div>
        </section>

        {/* Status */}
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-sm text-slate-300">
            Assembly Line A is being monitored
          </span>

          <span className="ml-auto text-xs text-slate-500">
            Last analysis: Just now
          </span>
        </div>

        {/* KPI Cards */}
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Production Capacity"
            value="42.35"
            unit="units/hr"
            subtitle="Theoretical line capacity"
            icon={<TrendingUp size={19} />}
          />

          <MetricCard
            title="Takt Time"
            value="63"
            unit="sec"
            subtitle="Required production pace"
            icon={<Clock3 size={19} />}
          />

          <MetricCard
            title="Line Efficiency"
            value="62.35"
            unit="%"
            subtitle="Current line balance"
            icon={<Gauge size={19} />}
          />

          <MetricCard
            title="Bottleneck"
            value="Welding"
            unit=""
            subtitle="85 sec cycle time"
            icon={<AlertTriangle size={19} />}
          />
        </section>

        {/* Main Analytics */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Production performance */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Production Performance</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Cycle time against takt time
                </p>
              </div>

              <BarChart3 className="text-slate-500" size={20} />
            </div>

            <div className="mt-8 space-y-5">
              <PerformanceBar
                name="Cutting"
                cycle={40}
                takt={63}
              />

              <PerformanceBar
                name="Drilling"
                cycle={55}
                takt={63}
              />

              <PerformanceBar
                name="Welding"
                cycle={85}
                takt={63}
                danger
              />

              <PerformanceBar
                name="Grinding"
                cycle={50}
                takt={63}
              />

              <PerformanceBar
                name="Inspection"
                cycle={35}
                takt={63}
              />
            </div>
          </div>

          {/* Line health */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Line Health</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Workstation utilization
                </p>
              </div>

              <Activity className="text-slate-500" size={20} />
            </div>

            <div className="mt-7 space-y-5">
              <HealthBar name="Welding" value={100} danger />
              <HealthBar name="Drilling" value={87} />
              <HealthBar name="Grinding" value={79} />
              <HealthBar name="Cutting" value={63} />
              <HealthBar name="Inspection" value={56} />
            </div>
          </div>
        </section>

        {/* Bottom section */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Bottleneck */}
          <div className="rounded-xl border border-amber-900/50 bg-linear-to-br from-amber-950/30 to-slate-900 p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-amber-400">
                  <AlertTriangle size={17} />
                  Bottleneck Detected
                </div>

                <h2 className="mt-4 text-2xl font-bold">
                  Welding
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Station S3 is limiting the production rate.
                </p>
              </div>

              <div className="rounded-lg bg-amber-400/10 p-3 text-amber-400">
                <Settings2 size={21} />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <MiniStat
                label="Cycle Time"
                value="85 sec"
              />

              <MiniStat
                label="Takt Time"
                value="63 sec"
              />

              <MiniStat
                label="Over Takt"
                value="+22 sec"
              />
            </div>

            <button
              onClick={() => setPage("optimization")}
              className="mt-6 flex items-center gap-2 text-sm font-semibold text-amber-400 transition hover:text-amber-300"
            >
              Optimize workstation
              <ArrowRight size={16} />
            </button>
          </div>

          {/* AI */}
          <div className="rounded-xl border border-blue-900/50 bg-linear-to-br from-blue-950/30 to-slate-900 p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                  <Bot size={17} />
                  AI Production Engineer
                </div>

                <h2 className="mt-4 text-2xl font-bold">
                  Need production insights?
                </h2>

                <p className="mt-2 max-w-md text-sm text-slate-400">
                  Ask questions about bottlenecks, capacity, utilization and
                  optimization strategies.
                </p>
              </div>

              <div className="rounded-lg bg-blue-400/10 p-3 text-blue-400">
                <Bot size={21} />
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-500">
              "Why is Welding the bottleneck?"
            </div>

            <button
              onClick={() => setPage("optimization")}
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Open AI Engineer
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Quick Actions
          </h2>

          <div className="grid gap-3 sm:grid-cols-3">
            <QuickAction
              icon={<Plus size={18} />}
              title="Create Production Line"
              description="Configure stations and workers"
              onClick={() => setPage("create")}
            />

            <QuickAction
              icon={<BarChart3 size={18} />}
              title="View Analysis"
              description="Inspect production metrics"
              onClick={() => setPage("analysis")}
            />

            <QuickAction
              icon={<Settings2 size={18} />}
              title="Optimize Line"
              description="Simulate workstation changes"
              onClick={() => setPage("optimization")}
            />
          </div>
        </section>

        {/* Footer stats */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <FooterStat
            icon={<Factory size={17} />}
            label="Active Lines"
            value="1"
          />

          <FooterStat
            icon={<Users size={17} />}
            label="Total Workers"
            value="5"
          />

          <FooterStat
            icon={<Activity size={17} />}
            label="System Status"
            value="Operational"
          />
        </section>
      </main>
    </div>
  );
}

function Navigation({
  page,
  setPage,
}: {
  page: string;
  setPage: (page: string) => void;
}) {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          onClick={() => setPage("dashboard")}
          className="text-xl font-bold tracking-tight"
        >
          ProdOpt <span className="text-blue-400">AI</span>
        </button>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <NavButton
            active={page === "dashboard"}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </NavButton>

          <NavButton
            active={page === "create"}
            onClick={() => setPage("create")}
          >
            Create Line
          </NavButton>

          <NavButton
            active={page === "analysis"}
            onClick={() => setPage("analysis")}
          >
            Analysis
          </NavButton>

          <NavButton
            active={page === "optimization"}
            onClick={() => setPage("optimization")}
          >
            Optimization
          </NavButton>

          <span className="flex items-center gap-2 text-slate-500">
            <Bot size={15} />
            AI Engineer
          </span>
        </nav>
      </div>
    </header>
  );
}

function NavButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`transition ${
        active
          ? "font-semibold text-white"
          : "text-slate-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function MetricCard({
  title,
  value,
  unit,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  unit: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">{title}</span>

        <div className="rounded-lg bg-slate-800 p-2 text-blue-400">
          {icon}
        </div>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <span className="text-2xl font-bold">{value}</span>
        {unit && <span className="mb-1 text-sm text-slate-500">{unit}</span>}
      </div>

      <p className="mt-2 text-xs text-slate-500">{subtitle}</p>
    </div>
  );
}

function PerformanceBar({
  name,
  cycle,
  takt,
  danger = false,
}: {
  name: string;
  cycle: number;
  takt: number;
  danger?: boolean;
}) {
  const width = Math.min((cycle / 100) * 100, 100);

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className={danger ? "text-amber-400" : "text-slate-400"}>
          {cycle}s
        </span>
      </div>

      <div className="relative h-2 rounded-full bg-slate-800">
        <div
          className={`h-2 rounded-full ${
            danger ? "bg-amber-500" : "bg-blue-500"
          }`}
          style={{ width: `${width}%` }}
        />

        <div
          className="absolute -top-1 h-4 w-px bg-white/70"
          style={{ left: `${takt}%` }}
        />
      </div>

      <div className="mt-1 text-right text-[10px] text-slate-600">
        Takt {takt}s
      </div>
    </div>
  );
}

function HealthBar({
  name,
  value,
  danger = false,
}: {
  name: string;
  value: number;
  danger?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs">
        <span className="text-slate-300">{name}</span>
        <span className={danger ? "text-amber-400" : "text-slate-500"}>
          {value}%
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-slate-800">
        <div
          className={`h-1.5 rounded-full ${
            danger ? "bg-amber-500" : "bg-blue-500"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-3">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-200">{value}</p>
    </div>
  );
}

function QuickAction({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:border-slate-700 hover:bg-slate-800/80"
    >
      <div className="rounded-lg bg-slate-800 p-2.5 text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      <ArrowRight className="ml-auto text-slate-600" size={16} />
    </button>
  );
}

function FooterStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="rounded-lg bg-slate-800 p-2 text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="mt-1 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default App;