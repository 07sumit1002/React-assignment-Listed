import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Basic Tees', value: 51, fill: '#FF6384' },
  { name: 'Custom Short Pants', value: 31, fill: '#36A2EB' },
  { name: 'Super Hoodies', value: 14, fill: '#FFCE56' },
];

export default function  Piechrt()  {
    return (
        <div className='piemain'>
            <div className="pie-chart-container">
            <h1 className="chart-title">Sales Distribution</h1>
            <PieChart width={400} height={300}>
                <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                />
                <Tooltip />
                <Legend />
            </PieChart>
            </div>
            <div className='piebody'>
            <h2>Today's schedule &nbsp;&nbsp;&nbsp;&nbsp;<span className='span1'>View all&gt;</span> </h2>
                <div className='body1' >
                    <h4>Meeting with suppliers from Kuta Bali</h4>
                    <span className='span'>
                        <h3>14:00-15:00</h3>
                        <h3>at Sunset Road, Kuta, Bali</h3>
                    </span>
                </div><br />
                <div className='body2' >
                <h4>Check operation at Giga Factory 1</h4>
                    <span className='span'>
                        <h3>18:00-20:00</h3>
                        <h3>at Central Jakarta</h3>
                    </span>
                </div>
            </div>
        </div>
      );
}

