import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { mockAnalysis } from "../mock/data";

function Analysis() {
  const analysis = mockAnalysis;

  const chartData = analysis.stations.map((station) => ({
    name: station.operation,
    cycleTime: station.cycleTimeSeconds,
    taktTime: analysis.taktTimeSeconds,
  }));

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">

          <p className="text-sm text-blue-400">
            Production Line Analysis
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Assembly Line A
          </h1>

          <p className="mt-2 text-slate-400">
            Analyze production capacity, efficiency,
            workstation utilization and bottlenecks.
          </p>

        </div>

        {/* Metrics */}
        <div className="grid gap-6 md:grid-cols-4">

          {/* Capacity */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-sm text-slate-400">
              Production Capacity
            </p>

            <p className="mt-3 text-3xl font-bold">
              {analysis.productionCapacity.unitsPerHour}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              units / hour
            </p>

          </div>

          {/* Takt */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-sm text-slate-400">
              Takt Time
            </p>

            <p className="mt-3 text-3xl font-bold">
              {analysis.taktTimeSeconds}s
            </p>

            <p className="mt-1 text-sm text-slate-500">
              target cycle time
            </p>

          </div>

          {/* Efficiency */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-sm text-slate-400">
              Line Efficiency
            </p>

            <p className="mt-3 text-3xl font-bold">
              {analysis.lineEfficiencyPercent}%
            </p>

            <p className="mt-1 text-sm text-slate-500">
              overall efficiency
            </p>

          </div>

          {/* Bottleneck */}
          <div className="rounded-xl border border-red-900 bg-red-950/30 p-6">

            <p className="text-sm text-red-400">
              Bottleneck
            </p>

            <p className="mt-3 text-3xl font-bold">
              {analysis.bottleneck.operation}
            </p>

            <p className="mt-1 text-sm text-red-400">
              {analysis.bottleneck.cycleTimeSeconds}s cycle
            </p>

          </div>

        </div>

        {/* Chart */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-6">

            <h2 className="text-xl font-semibold">
              Cycle Time vs Takt Time
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Stations above takt time require attention.
            </p>

          </div>

          <div className="h-87.5">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={chartData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                />

                <XAxis
                  dataKey="name"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip />

                <Bar
                  dataKey="cycleTime"
                  name="Cycle Time"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                />

                <Bar
                  dataKey="taktTime"
                  name="Takt Time"
                  fill="#22c55e"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Station Table */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-6">

            <h2 className="text-xl font-semibold">
              Workstation Analysis
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Detailed utilization and workload information.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>

                <tr className="border-b border-slate-800 text-sm text-slate-400">

                  <th className="px-4 py-3">
                    Station
                  </th>

                  <th className="px-4 py-3">
                    Operation
                  </th>

                  <th className="px-4 py-3">
                    Cycle Time
                  </th>

                  <th className="px-4 py-3">
                    Workers
                  </th>

                  <th className="px-4 py-3">
                    Utilization
                  </th>

                  <th className="px-4 py-3">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {analysis.stations.map((station) => {

                  const isBottleneck =
                    station.stationId ===
                    analysis.bottleneck.stationId;

                  return (
                    <tr
                      key={station.stationId}
                      className={`border-b border-slate-800 ${
                        isBottleneck
                          ? "bg-red-950/20"
                          : ""
                      }`}
                    >

                      <td className="px-4 py-4 font-medium">
                        {station.name}
                      </td>

                      <td className="px-4 py-4">
                        {station.operation}
                      </td>

                      <td className="px-4 py-4">
                        {station.cycleTimeSeconds}s
                      </td>

                      <td className="px-4 py-4">
                        {station.workers}
                      </td>

                      <td className="px-4 py-4">

                        <div className="flex items-center gap-3">

                          <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-800">

                            <div
                              className="h-full rounded-full bg-blue-500"
                              style={{
                                width: `${Math.min(
                                  station.utilizationPercent,
                                  100
                                )}%`,
                              }}
                            />

                          </div>

                          <span>
                            {station.utilizationPercent}%
                          </span>

                        </div>

                      </td>

                      <td className="px-4 py-4">

                        {isBottleneck ? (
                          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">
                            Bottleneck
                          </span>
                        ) : (
                          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                            Normal
                          </span>
                        )}

                      </td>

                    </tr>
                  );

                })}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analysis;