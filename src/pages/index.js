import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="active">Home</h1>
    </div>
  );
}
