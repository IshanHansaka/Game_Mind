import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export default function ProgressChartArea() {
  const productSales = [
    {
      name: "Jan",
      product1: 4000,
      product2: 2400,
    },
    {
      name: "Feb",
      product1: 3000,
      product2: 2210,
    },
    {
      name: "Mar",
      product1: 2000,
      product2: 2290,
    },
    {
      name: "Apr",
      product1: 2780,
      product2: 2000,
    },
    {
      name: "May",
      product1: 1890,
      product2: 2181,
    },
    {
      name: "Jun",
      product1: 2390,
      product2: 2500,
    },
  ];

  return (
    <>
      <ResponsiveContainer>
        <AreaChart data={productSales}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 20, fill: "#000000" }}
            axisLine={{ stroke: "#000000" }}
          />
          <YAxis
            tick={{ fontSize: 20, fill: "#000000" }}
            axisLine={{ stroke: "#000000" }}
          />
          <CartesianGrid strokeDasharray="5 5" stroke="gray" />
          <Legend wrapperStyle={{ fontSize: "26px" }} />
          <Area
            type="monotone"
            dataKey="product1"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="product2"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId="1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}