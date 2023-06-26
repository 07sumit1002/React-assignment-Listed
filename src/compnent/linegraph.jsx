import React, { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
// Sample chart data
const pdata = [
    {
        name: 'Week 1',
        Guest: 400,
        User: 300
    },
    {
        name: 'Week 2',
        Guest: 105,
        User: 200
    },
    {
        name: 'Week 3',
        Guest: 215,
        User: 100
    },
    {
        name: 'Week 4',
        Guest: 410,
        User: 500
    },
];
export default function LineGraph() {
    const [selectedMonth, setSelectedMonth] = useState('All'); // Initial state for selected month
  
    // Function to handle month selection change
    const handleMonthChange = (event) => {
      setSelectedMonth(event.target.value);
    };
      // Filter the data based on selected month
  const filteredData = selectedMonth === 'All' ? pdata : pdata.slice(0, parseInt(selectedMonth));

    return (
        <div className='linechart'>
            <h1 className="text-heading">
                Activities
            </h1>
            <div className="dropdown-container">
                <label htmlFor="month-dropdown">Select Month:</label>
                <Select id="month-dropdown" value={selectedMonth} onChange={handleMonthChange}>
                <option value="All">All</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
                </Select>
            </div><br />
            <ResponsiveContainer className='graph' aspect={3}>
                <LineChart data={pdata} >
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="Guest"
                        stroke="red"  />
                    <Line dataKey="User"
                        stroke="green"  />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
