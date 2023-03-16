import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Xbox = () => {
  const [accountData, setAccountData] = useState(null);

  async function fetchAccountData() {
    try {
      const response = await axios.get('https://xbl.io/api/v2/account', {
        headers: {
          'X-Authorization': "17dd8d7d-211d-45c2-af76-0365133ff862"
        }
      });
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching account data:', error);
    }
  }

  useEffect(() => {
    async function fetchAndSetAccountData() {
      const data = await fetchAccountData();
      setAccountData(data);
    }

    fetchAndSetAccountData();
  }, []);

  return (
    <div>
      {accountData ? (
        <div>
          <p>Username: {accountData.username}</p>
          <p>Email: {accountData.email}</p>
          {/* Add more account data here */}
        </div>
      ) : (
        <p>Loading account data...</p>
      )}
    </div>
  );
}

export default Xbox;
