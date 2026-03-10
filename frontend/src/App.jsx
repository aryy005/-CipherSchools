import { useState } from "react";

import AssignmentList from "./pages/AssignmentList";
import AssignmentAttempt from "./pages/AssignmentAttempt";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {!selected ? (
        <AssignmentList setSelected={setSelected} />
      ) : (
        <AssignmentAttempt assignment={selected} />
      )}
    </div>
  );
}

export default App;
