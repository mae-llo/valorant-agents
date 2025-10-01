import { useState, useEffect } from 'react'
import AgentList from "./components/AgentList";

function App() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then(res => res.json())
      .then(data => {
        setAgents(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching agents:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <h1>Valorant Agent Explorer</h1>
    {loading ? <p>Loading agents...</p> : <AgentList agents={agents} />};
    </>
  )
}

export default App
