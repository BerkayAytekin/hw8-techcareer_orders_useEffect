import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

function CustomerPage() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/customers").then((res) => {
      setCustomer(res.data);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
          </tr>
        </thead>
        <tbody>
          {customer &&
            customer.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default CustomerPage;
