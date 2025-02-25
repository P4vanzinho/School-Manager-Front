"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    rendimento: 4000,
    despesa: 2400,
  },
  {
    name: "Fev",
    rendimento: 3000,
    despesa: 1398,
  },
  {
    name: "Mar",
    rendimento: 2000,
    despesa: 9800,
  },
  {
    name: "Abril",
    rendimento: 2780,
    despesa: 3908,
  },
  {
    name: "Maio",
    rendimento: 1890,
    despesa: 4800,
  },
  {
    name: "Jun",
    rendimento: 2390,
    despesa: 3800,
  },
  {
    name: "Jul",
    rendimento: 3490,
    despesa: 4300,
  },
  {
    name: "Ago",
    rendimento: 3490,
    despesa: 4300,
  },
  {
    name: "Set",
    rendimento: 3490,
    despesa: 4300,
  },
  {
    name: "Out",
    rendimento: 3490,
    despesa: 4300,
  },
  {
    name: "Nov",
    rendimento: 3490,
    despesa: 4300,
  },
  {
    name: "Dez",
    rendimento: 3490,
    despesa: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/*TITLE*/}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finanças</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="rendimento"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="despesa"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
