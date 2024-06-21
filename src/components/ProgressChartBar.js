import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { db } from "../firebase/firebaseConfig";
import { collection, collectionGroup, getDocs } from "firebase/firestore";

export default function ProgressChartArea() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "test");
      try {
        const snapshot = await getDocs(collectionRef);
        const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
        setSalesData(data.reverse());
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ResponsiveContainer>
        <BarChart data={salesData}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 20, fill: "#000000" }}
            axisLine={{ stroke: "#000000" }}
          />
          <YAxis
            tick={{ fontSize: 20, fill: "#000000" }}
            axisLine={{ stroke: "#000000" }}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="gray" />
          <Legend wrapperStyle={{ fontSize: "26px" }} />
          <Bar dataKey="product1" stroke="#2563eb" fill="#3b82f6" />
          <Bar dataKey="product2" stroke="#7c3aed" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
