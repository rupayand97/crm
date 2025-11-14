import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads } from './leadsSlice';

const LeadsList = () => {
  const dispatch = useDispatch();
  const { leads, loading, error } = useSelector(state => state.leads);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  if (loading) return <p>Loading leads...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {leads.map(lead => <li key={lead.id}>{lead.name} - {lead.status}</li>)}
    </ul>
  );
};

export default LeadsList;
