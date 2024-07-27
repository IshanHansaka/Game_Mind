import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function ProgressChartArea() {
  const [sessions, setSessions] = useState([]);
  const [aggregatedSessions, setAggregatedSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "sessions");
      try {
        const snapshot = await getDocs(collectionRef);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          numDetections: parseInt(doc.data().numDetections, 10), // Ensure numDetections is a number
        }));
        setSessions(data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const aggregateData = () => {
      const aggregated = sessions.reduce((acc, session) => {
        const date = session.date;
        if (!acc[date]) {
          acc[date] = { date, numDetections: 0 };
        }
        acc[date].numDetections += session.numDetections;
        return acc;
      }, {});

      const result = Object.values(aggregated).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setAggregatedSessions(result);
    };
    if (sessions.length > 0) {
      aggregateData();
    }
  }, [sessions]);
  return (
    <>
      <AreaChart
        data={aggregatedSessions}
        width={1100}
        height={600}
        margin={{ right: 50 }}
      >
        <XAxis
          dataKey="date"
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
          dataKey="numDetections"
          stroke="#2563eb"
          fill="#304674"
          dot={{ fill: "#000000", stroke: "#2563eb", strokeWidth: 2, r: 4 }}
        />
      </AreaChart>
    </>
  );
}