import React from "react";
import plg from "../../assets/img/plg.png";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 1425,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 2580,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 4000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3547,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 1250,
    pv: 2504,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 2452,
    pv: 3542,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 4537,
    pv: 3540,
    amt: 2100,
    amt: 2100,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const Performance = () => {
  return (
    <div className="perfomance-container">
      <div className="above">
        <div className="title">
          <h3>Performance</h3>
          <div className="number">
            <img src={plg} alt="polygon" />
            <p>15%</p>
          </div>
        </div>
        <div className="months">
          <div className="first">
            <p>1W</p>
          </div>
          <div className="second">
            <p>1M</p>
          </div>
          <div className="third">
            <p>2M</p>
          </div>
          <div className="forth">
            <p>3M</p>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="89%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="7" stroke="#1a143a" />
            <XAxis dataKey="x" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a0f52" />
                <stop offset="50%" stopColor="#16163a" />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6853ea" />
                <stop offset="50%" stopColor="#53a5e8" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="url(#colorUv)"
              fill="url(#splitColor)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Performance;
