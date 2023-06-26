import Sidebar from './sidebar';
import Line from './linegraph'
import React from 'react';
import Topnav from './topnav';
import Pie from './piechar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faUser, faExchangeAlt , faThumbsUp } from '@fortawesome/free-solid-svg-icons';
export default function dashboard() {
  return (
    <div>
      <Topnav /><br />
      <div className="box-tiles">
        <div className="box-tile1">
            <FontAwesomeIcon style={{
                width:'30px',
                height: '30px',
                color:'#232323'
            }} icon={faMoneyBill} className="icon" />
            <br/><h5>Total Revenues</h5><h2>$2,129,430</h2>
        </div>
        <div className="box-tile2">
            <FontAwesomeIcon style={{
                width:'30px',
                height: '30px',
                color:'#232323'
            }} icon={faExchangeAlt} className="icon" />
            <br/><h5>Total Transactions</h5><h2>1,520</h2>
        </div>
        <div className="box-tile3">
            <FontAwesomeIcon style={{
                width:'30px',
                height: '30px',
                color:'#232323'
            }} icon={faThumbsUp} className="icon" />
            <br/><h5>Total Likes</h5><h2>9,721</h2>
        </div>
        <div className="box-tile4">
            <FontAwesomeIcon style={{
                width:'30px',
                height: '30px',
                color:'#232323'
            }} icon={faUser} className="icon" />
            <br/><h5>Total Users</h5><h2>892</h2>
        </div>
      </div>
      <Line />
      <Pie />
      <Sidebar />
    </div>
  )
}
