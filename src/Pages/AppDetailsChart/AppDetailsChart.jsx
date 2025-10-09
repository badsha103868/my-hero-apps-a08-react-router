import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetailsChart = ({ratings}) => {
  return (
   <div style={{ width: "100%", height: 400 }}>
      <h3 style={{ marginBottom: "10px", fontWeight:"bold", marginLeft:"10px" }}>Ratings</h3>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 10, right: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#ff9900" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>

  );
};

export default AppDetailsChart;