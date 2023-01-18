import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import sanityClient from "../client.js";

import LoadingSpinner from "./LoadingSpinner";

export default function TableContainer(props) {
  const queryString = props.queryString;

  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(queryString)
      .then((data) => setPost(data))
      .catch(console.error);
  }, [queryString]);

  if (!postData) return <LoadingSpinner></LoadingSpinner>;

  return (
    <>
      <Table>   
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {postData &&
            postData.map((object, index) => (
              <tr key={index}>
                <td>{object.name}</td>
                <td>{object.role}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
