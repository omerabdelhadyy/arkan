import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "06:00 PM",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "08:00 PM",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "10:00 PM",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "12:00 PM",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "02:00 AM",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "04:00 AM",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "06:00 AM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#F5FCFF",
        width: 800,
        height: 400,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#3FD4B1" fill="#D0F4F0" />
      </AreaChart>
    </div>
  );
}
