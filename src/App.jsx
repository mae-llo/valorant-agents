import { useState, useEffect } from 'react'
import AgentList from "./components/AgentList";
import AgentModal from './components/AgentModal';
import RoleFilter from './components/RoleFilter';
import './App.css'

function App() {
  const [agents, setAgents] = useState([]);
  const [roles, setRoles] = useState([])
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedRole, setSelectedRole] = useState('All')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const filteredAgents = selectedRole === "All" ? agents : agents.filter(agent => agent.role.displayName === selectedRole);

  function handleClose(){
    console.log(selectedAgent);
    setSelectedAgent(null);
  }

  return (
    <>
    
    {selectedAgent && (
      <AgentModal agent={selectedAgent} onClose={handleClose}/>
    )}

    <div className="header">
      <h1>Valorant Agent Explorer</h1>
      <RoleFilter roles={roles} selectedRole={selectedRole} onSelectRole={setSelectedRole}/>
    </div>
    <div className="agent-list-container">
      {loading ? <p>Loading agents...</p> : <AgentList agents={filteredAgents} onSelectAgent={setSelectedAgent} />}    
    </div>  
    </>
  )
}

export default App;
