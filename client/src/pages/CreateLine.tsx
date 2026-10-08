import { useState } from "react";


interface Station {
  id: number;
  name: string;
  operation: string;
  cycleTime: number;
  workers: number;
}

function CreateLine() {
  const [lineName, setLineName] = useState("");
  const [dailyDemand, setDailyDemand] = useState("");
  const [availableTime, setAvailableTime] = useState("");

  const [stations, setStations] = useState<Station[]>([
    {
      id: 1,
      name: "S1",
      operation: "Cutting",
      cycleTime: 40,
      workers: 1,
    },
    {
      id: 2,
      name: "S2",
      operation: "Drilling",
      cycleTime: 55,
      workers: 1,
    },
    {
      id: 3,
      name: "S3",
      operation: "Welding",
      cycleTime: 85,
      workers: 1,
    },
  ]);

  const addStation = () => {
    const newStation: Station = {
      id: Date.now(),
      name: `S${stations.length + 1}`,
      operation: "",
      cycleTime: 0,
      workers: 1,
    };

    setStations([...stations, newStation]);
  };

  const removeStation = (id: number) => {
    setStations(stations.filter((station) => station.id !== id));
  };

  const updateStation = (
    id: number,
    field: keyof Station,
    value: string | number
  ) => {
    setStations(
      stations.map((station) =>
        station.id === id
          ? { ...station, [field]: value }
          : station
      )
    );
  };

  const handleAnalyze = () => {
    const data = {
      name: lineName,
      dailyDemand: Number(dailyDemand),
      availableTimeSeconds: Number(availableTime),
      stations,
    };

    console.log("Production Line:", data);

    alert("Production line data captured. Backend connection comes next!");
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Create Production Line
          </h1>

          <p className="mt-2 text-slate-400">
            Configure your production line and workstation details.
          </p>
        </div>

        {/* Basic Information */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Production Line Information
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Line Name
              </label>

              <input
                type="text"
                value={lineName}
                onChange={(e) => setLineName(e.target.value)}
                placeholder="Assembly Line A"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Daily Production Demand
              </label>

              <input
                type="number"
                value={dailyDemand}
                onChange={(e) => setDailyDemand(e.target.value)}
                placeholder="400"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Available Production Time (seconds)
              </label>

              <input
                type="number"
                value={availableTime}
                onChange={(e) => setAvailableTime(e.target.value)}
                placeholder="25200"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

          </div>
        </div>

        {/* Stations */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <h2 className="text-xl font-semibold">
                Workstations
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Add each workstation in your production line.
              </p>
            </div>

            <button
              onClick={addStation}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500"
            >
              + Add Station
            </button>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b border-slate-800 text-sm text-slate-400">
                  <th className="px-4 py-3">Station</th>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Cycle Time</th>
                  <th className="px-4 py-3">Workers</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>

              <tbody>

                {stations.map((station) => (
                  <tr
                    key={station.id}
                    className="border-b border-slate-800"
                  >

                    <td className="px-4 py-4">

                      <input
                        value={station.name}
                        onChange={(e) =>
                          updateStation(
                            station.id,
                            "name",
                            e.target.value
                          )
                        }
                        className="w-20 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                      />

                    </td>

                    <td className="px-4 py-4">

                      <input
                        value={station.operation}
                        onChange={(e) =>
                          updateStation(
                            station.id,
                            "operation",
                            e.target.value
                          )
                        }
                        placeholder="Welding"
                        className="w-full min-w-[180px] rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                      />

                    </td>

                    <td className="px-4 py-4">

                      <input
                        type="number"
                        value={station.cycleTime}
                        onChange={(e) =>
                          updateStation(
                            station.id,
                            "cycleTime",
                            Number(e.target.value)
                          )
                        }
                        className="w-28 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                      />

                    </td>

                    <td className="px-4 py-4">

                      <input
                        type="number"
                        min="1"
                        value={station.workers}
                        onChange={(e) =>
                          updateStation(
                            station.id,
                            "workers",
                            Number(e.target.value)
                          )
                        }
                        className="w-24 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                      />

                    </td>

                    <td className="px-4 py-4">

                      <button
                        onClick={() => removeStation(station.id)}
                        className="rounded-lg px-3 py-2 text-sm text-red-400 hover:bg-red-950"
                      >
                        Remove
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Analyze */}
        <div className="mt-8 flex justify-end">

          <button
            onClick={handleAnalyze}
            className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold hover:bg-emerald-500"
          >
            Analyze Production Line →
          </button>

        </div>

      </div>
    </div>
  );
}

export default CreateLine;