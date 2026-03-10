export default function SampleDataViewer({ tables }) {
  return (
    <div>
      <h3>Sample Tables</h3>

      {tables.map((t, i) => (
        <div key={i}>
          <h4>{t.tableName}</h4>

          <pre>{JSON.stringify(t.rows, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
