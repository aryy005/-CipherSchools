import Editor from "@monaco-editor/react";

export default function SqlEditor({ query, setQuery }) {
  return (
    <Editor
      height="300px"
      language="sql"
      value={query}
      onChange={(value) => setQuery(value)}
    />
  );
}
