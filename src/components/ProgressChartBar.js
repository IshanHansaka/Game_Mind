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
import { collection, getDocs } from "firebase/firestore";

export default function ProgressChartArea() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "sessions");
      try {
        const snapshot = await getDocs(collectionRef);
        const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
        setSessions(data.reverse());
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ResponsiveContainer>
        <BarChart data={sessions}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 20, fill: "#000000" }}
            axisLine={{ stroke: "#000000" }}
          />
          <YAxis
            tick={{ fontSize: 20, fill: "#000000" }}
            axisLine={{ stroke: "#000000" }}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="gray" />
          <Legend wrapperStyle={{ fontSize: "26px" }} />
          <Bar dataKey="session" stroke="#2563eb" fill="#304674" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
