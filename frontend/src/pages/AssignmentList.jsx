import { useEffect, useState } from "react";
import API from "../api";

export default function AssignmentList({ setSelected }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/assignments").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>SQL Assignments</h1>

      {data.map((a) => (
        <div key={a._id} onClick={() => setSelected(a)}>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
        </div>
      ))}
    </div>
  );
}
