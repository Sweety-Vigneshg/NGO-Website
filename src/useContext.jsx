import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MongoDBContext = createContext();

const MongoDBProvider = ({ children }) => {
  const [mongoDBData, setMongoDBData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://medical-donation-backend.vercel.app/user/donate-lists');
      setMongoDBData(response.data);
    } catch (error) {
      console.error('Error fetching MongoDB data:', error);
    }
  };

  return (
    <MongoDBContext.Provider value={mongoDBData}>
      {children}
    </MongoDBContext.Provider>
  );
};

export { MongoDBProvider, MongoDBContext };
