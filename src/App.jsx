import { useState, useEffect } from 'react'
import AgentList from "./components/AgentList";
import RoleFilter from './components/RoleFilter';
import './App.css'

function App() {
  const [agents, setAgents] = useState([]);
  const [roles, setRoles] = useState([])
  const [selectedRole, setSelectedRole] = useState('All')
  const [loading, setLoading] = useState([]);


  useEffect(() => {
    setLoading(true);
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then(res => res.json())
      .then(resData => {
        const agentData = resData.data;
        const alphabetizedAgents = agentData.sort((a,b) => a.displayName.localeCompare(b.displayName));
        const roleMap = agentData.map((agent) => agent.role.displayName);
        const alphabetizedRoles = roleMap.sort((a,b) => a.localeCompare(b))
        const roles = [...new Set(alphabetizedRoles)];

        setAgents(alphabetizedAgents);
        setRoles(roles);

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
    <RoleFilter roles={roles} selectedRole={selectedRole} onSelectRole={setSelectedRole}/>
    {loading ? <p>Loading agents...</p> : <AgentList agents={agents} />}
    </>
  )
}

export default App
