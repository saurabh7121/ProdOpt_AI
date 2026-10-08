import { useState } from "react";

interface Station {
  id: number;
  operation: string;
  cycleTime: number;
  workers: number;
}

const stations: Station[] = [
  {
    id: 1,
    operation: "Cutting",
    cycleTime: 40,
    workers: 1,
  },
  {
    id: 2,
    operation: "Drilling",
    cycleTime: 55,
    workers: 1,
  },
  {
    id: 3,
    operation: "Welding",
    cycleTime: 85,
    workers: 1,
  },
  {
    id: 4,
    operation: "Grinding",
    cycleTime: 50,
    workers: 1,
  },
  {
    id: 5,
    operation: "Inspection",
    cycleTime: 35,
    workers: 1,
  },
];

function Optimization() {
  const [selectedStation, setSelectedStation] =
    useState<number>(3);

  const [additionalWorkers, setAdditionalWorkers] =
    useState<number>(1);

  const [simulated, setSimulated] =
    useState(false);

  const selected = stations.find(
    (station) => station.id === selectedStation
  );

  const simulate = () => {
    setSimulated(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">

          <p className="text-sm text-blue-400">
            Optimization Simulator
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Optimize Production Line
          </h1>

          <p className="mt-2 text-slate-400">
            Simulate workstation changes and compare
            production performance before and after optimization.
          </p>

        </div>

        {/* Configuration */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold">
            Optimization Scenario
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Select a workstation and simulate adding workers.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {/* Station */}
            <div>

              <label className="mb-2 block text-sm text-slate-400">
                Workstation
              </label>

              <select
                value={selectedStation}
                onChange={(e) =>
                  setSelectedStation(Number(e.target.value))
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              >

                {stations.map((station) => (
                  <option
                    key={station.id}
                    value={station.id}
                  >
                    S{station.id} — {station.operation}
                  </option>
                ))}

              </select>

            </div>

            {/* Current workers */}
            <div>

              <label className="mb-2 block text-sm text-slate-400">
                Current Workers
              </label>

              <div className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3">

                {selected?.workers}

              </div>

            </div>

            {/* Additional */}
            <div>

              <label className="mb-2 block text-sm text-slate-400">
                Additional Workers
              </label>

              <input
                type="number"
                min="1"
                max="10"
                value={additionalWorkers}
                onChange={(e) =>
                  setAdditionalWorkers(
                    Number(e.target.value)
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>

          </div>

          {/* Selected station information */}
          {selected && (
            <div className="mt-6 rounded-lg bg-slate-950 p-5">

              <div className="grid gap-4 md:grid-cols-3">

                <div>
                  <p className="text-sm text-slate-500">
                    Operation
                  </p>

                  <p className="mt-1 font-semibold">
                    {selected.operation}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Cycle Time
                  </p>

                  <p className="mt-1 font-semibold">
                    {selected.cycleTime}s
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Workers After Optimization
                  </p>

                  <p className="mt-1 font-semibold text-blue-400">
                    {selected.workers +
                      additionalWorkers}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* Simulate */}
          <div className="mt-6">

            <button
              onClick={simulate}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Simulate Optimization →
            </button>

          </div>

        </div>

        {/* Results */}
        {simulated && (
          <div className="mt-8">

            <div className="mb-6">

              <h2 className="text-xl font-semibold">
                Simulation Results
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Compare the production line before and after
                the proposed change.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* Before */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

                <div className="mb-6">

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    BEFORE
                  </span>

                </div>

                <div className="space-y-5">

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Capacity
                    </span>

                    <span className="font-semibold">
                      42.35 units/hr
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Efficiency
                    </span>

                    <span className="font-semibold">
                      62.35%
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Bottleneck
                    </span>

                    <span className="font-semibold text-red-400">
                      Welding
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Welding Workers
                    </span>

                    <span className="font-semibold">
                      1
                    </span>
                  </div>

                </div>

              </div>

              {/* After */}
              <div className="rounded-xl border border-emerald-900 bg-emerald-950/20 p-6">

                <div className="mb-6">

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                    AFTER
                  </span>

                </div>

                <div className="space-y-5">

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Capacity
                    </span>

                    <span className="font-semibold text-emerald-400">
                      65.45 units/hr
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Efficiency
                    </span>

                    <span className="font-semibold text-emerald-400">
                      78.60%
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Bottleneck
                    </span>

                    <span className="font-semibold text-yellow-400">
                      Drilling
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Welding Workers
                    </span>

                    <span className="font-semibold">
                      {1 + additionalWorkers}
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Improvement */}
            <div className="mt-6 rounded-xl border border-blue-900 bg-blue-950/20 p-6">

              <h3 className="font-semibold">
                Optimization Impact
              </h3>

              <div className="mt-5 grid gap-6 md:grid-cols-3">

                <div>

                  <p className="text-sm text-slate-400">
                    Capacity Improvement
                  </p>

                  <p className="mt-2 text-2xl font-bold text-emerald-400">
                    +54.55%
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Efficiency Improvement
                  </p>

                  <p className="mt-2 text-2xl font-bold text-emerald-400">
                    +16.25%
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Bottleneck Migration
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    Welding → Drilling
                  </p>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Optimization;