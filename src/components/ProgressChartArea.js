import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
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
  const [aggregatedSessions, setAggregatedSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "sessions");
      try {
        const snapshot = await getDocs(collectionRef);
        const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
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
        const sessionCount = parseInt(session.session, 10);
        if (!acc[date]) {
          acc[date] = { date, session: 0 };
        }
        acc[date].session += sessionCount;
        return acc;
      }, {});

      const result = Object.values(aggregated);
      setAggregatedSessions(result);
    };

    aggregateData();
  }, [sessions]);

  return (
    <>
      <ResponsiveContainer>
        <AreaChart data={aggregatedSessions}>
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
          <Area
            type="monotone"
            dataKey="session"
            stroke="#2563eb"
            fill="#304674"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
