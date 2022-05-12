import React from "react";
import { AreaChart, Area, Line, ResponsiveContainer, Tooltip } from "recharts";
export default function Cart({ data }) {
  // const data = [
  //   { name: "Page A", uv: 2000, pv: 2400, amt: 2400 },
  //   { name: "Page B", uv: 5000, pv: 1398, amt: 2210 },
  //   { name: "Page C", uv: 5000, pv: 9800, amt: 2290 },
  //   { name: "Page D", uv: 4080, pv: 3908, amt: 2000 },
  //   { name: "Page E", uv: 3090, pv: 4800, amt: 2181 },
  //   { name: "Page F", uv: 2090, pv: 3800, amt: 2500 },
  //   { name: "Page G", uv: 4490, pv: 4300, amt: 2100 },
  //   { name: "Page C", uv: 4000, pv: 6800, amt: 2290 },
  //   { name: "Page D", uv: 4080, pv: 7908, amt: 2000 },
  //   { name: "Page E", uv: 3090, pv: 9800, amt: 2181 },
  //   { name: "Page F", uv: 2090, pv: 3800, amt: 1500 },
  //   { name: "Page G", uv: 1090, pv: 4300, amt: 2100 },
  //   { name: "Page C", uv: 4000, pv: 6800, amt: 2290 },
  //   { name: "Page D", uv: 4080, pv: 7908, amt: 2000 },
  //   { name: "Page E", uv: 3090, pv: 9800, amt: 2181 },
  //   { name: "Page F", uv: 2090, pv: 3800, amt: 1500 },
  //   { name: "Page G", uv: 1090, pv: 4300, amt: 2100 },
  // ];
  return (
    <ResponsiveContainer height={107} width="100%">
      <AreaChart data={data} margin={{ top: -0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7} />
            <stop offset="90%" stopColor="var(--warning)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotoneX"
          dataKey="uv"
          stroke="var(--warning)"
          strokeWidth={2}
          fillOpacity={1}
          fill="#50A95F"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
