import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: null, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const OverViewChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="rgba(75, 149, 96, 0.38)" stopOpacity={1}/>
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.176942)" stopOpacity={1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="uv" 
          stroke="#8884d8" 
          fillOpacity={1} 
          fill="url(#colorUv)" 
          connectNulls 
        />
        {data.map((entry, index) => (
          entry.uv === null ? 
            <ReferenceDot key={index} x={entry.name} y={0} r={8} fill="green" /> 
          : null
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default OverViewChart;
