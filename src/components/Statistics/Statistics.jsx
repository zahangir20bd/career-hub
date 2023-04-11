import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Label,
} from "recharts";

import Banner from "../Banner/Banner";

const Statistics = () => {
  const assignmentMarks = [
    {
      id: 1,
      name: "Assignment-01",
      marks: 60,
    },
    {
      id: 2,
      name: "Assignment-02",
      marks: 60,
    },
    {
      id: 3,
      name: "Assignment-03",
      marks: 60,
    },
    {
      id: 4,
      name: "Assignment-04",
      marks: 60,
    },
    {
      id: 5,
      name: "Assignment-05",
      marks: 50,
    },
    {
      id: 6,
      name: "Assignment-06",
      marks: 58,
    },
    {
      id: 7,
      name: "Assignment-07",
      marks: 60,
    },
    {
      id: 8,
      name: "Assignment-08",
      marks: 60,
    },
  ];
  return (
    <div>
      <Banner from="Statistics"></Banner>
      <div className="text-center">
        <div className=" max-w-6xl mx-auto mt-24">
          <div>
            <AreaChart
              width={1080}
              height={400}
              data={assignmentMarks}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="marks"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
          <div>
            <PieChart className="mx-auto" width={300} height={300}>
              <Pie
                dataKey="marks"
                startAngle={180}
                endAngle={0}
                data={assignmentMarks}
                outerRadius={80}
                fill="#8884d8"
                cx="50%"
                cy="50%"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
