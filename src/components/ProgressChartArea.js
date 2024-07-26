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
          Succesful_Sessions: parseInt(doc.data().Succesful_Sessions, 10), // Ensure Succesful_Sessions is a number
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
          acc[date] = { date, Succesful_Sessions: 0 };
        }
        acc[date].Succesful_Sessions += session.Succesful_Sessions;
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
          dataKey="Succesful_Sessions"
          stroke="#2563eb"
          fill="#304674"
        />
      </AreaChart>
    </>
  );
}
