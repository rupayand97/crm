import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [totalLeads, setTotalLeads] = useState(0);
  const [dealsClosed, setDealsClosed] = useState(0);
  const [revenue, setRevenue] = useState('');
  const [salesTarget, setSalesTarget] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setTotalLeads(124);
      setDealsClosed(56);
      setRevenue('$72,400');
      setSalesTarget('$100,000');
    }, 1000);
  }, []);

  return (
    <div className="dashboard">
      <h2>Sales Dashboard</h2>

      <div className="metrics-container" style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        <div className="metric-card" style={metricCardStyle}>
          <h3>Total Leads</h3>
          <p style={metricValueStyle}>{totalLeads}</p>
        </div>

        <div className="metric-card" style={metricCardStyle}>
          <h3>Deals Closed</h3>
          <p style={metricValueStyle}>{dealsClosed}</p>
        </div>

        <div className="metric-card" style={metricCardStyle}>
          <h3>Revenue</h3>
          <p style={metricValueStyle}>{revenue}</p>
        </div>

        <div className="metric-card" style={metricCardStyle}>
          <h3>Sales Target</h3>
          <p style={metricValueStyle}>{salesTarget}</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3>Performance Overview</h3>
        <p>Charts and detailed analytics will appear here.</p>
      </div>
    </div>
  );
};

const metricCardStyle = {
  padding: '1rem',
  backgroundColor: '#e7f0fd',
  borderRadius: '8px',
  flex: 1,
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const metricValueStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginTop: '0.5rem'
};

export default Dashboard;
