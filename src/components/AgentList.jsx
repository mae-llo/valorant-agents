import AgentCard from "./AgentCard"

export default function AgentList({agents, onSelectAgent}){
    return(
        <div className="agent-grid">
            {agents.map(agent=>(
                <AgentCard key={agent.uuid} agent={agent} onClick={() => onSelectAgent(agent)}/>
            ))}
        </div>
    )
}