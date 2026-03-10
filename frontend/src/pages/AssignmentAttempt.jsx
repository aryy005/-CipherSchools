import { useState } from "react";

import API from "../api";

import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import SampleDataViewer from "../components/SampleDataViewer";

export default function AssignmentAttempt({ assignment }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [hint, setHint] = useState("");

  const runQuery = async () => {
    const res = await API.post("/query/execute", {
      query,
    });

    setResult(res.data);
  };

  const getHint = async () => {
    const res = await API.post("/hint", {
      question: assignment.question,
    });

    setHint(res.data.hint);
  };

  return (
    <div>
      <h2>{assignment.title}</h2>

      <p>{assignment.question}</p>

      <SampleDataViewer tables={assignment.sampleTables} />

      <SqlEditor query={query} setQuery={setQuery} />

      <button onClick={runQuery}>Execute</button>

      <button onClick={getHint}>Get Hint</button>

      <ResultTable data={result} />

      <p>{hint}</p>
    </div>
  );
}
