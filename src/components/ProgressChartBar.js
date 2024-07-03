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

        // Aggregate sessions by date
        const aggregatedData = data.reduce((acc, curr) => {
          const date = curr.date; // assuming date is stored in 'date' field
          if (!acc[date]) {
            acc[date] = { date: date, session: 0 };
          }
          acc[date].session += curr.session; // assuming session is a numeric field
          return acc;
        }, {});

        // Convert the aggregated data object to an array
        const aggregatedArray = Object.values(aggregatedData);
        
        setSessions(aggregatedArray.reverse());
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  // Formatter function to display only integer values
  const integerTickFormatter = (value) => Math.floor(value);

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
            tickFormatter={integerTickFormatter}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="gray" />
          <Legend wrapperStyle={{ fontSize: "26px" }} />
          <Bar dataKey="session" stroke="#2563eb" fill="#304674" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
