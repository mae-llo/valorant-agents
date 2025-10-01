import AgentCard from "./AgentCard"

export default function AgentList({agents}){
    return(
        <div className="agent-grid">
            {agents.map(agent=>(
                <AgentCard key={agent.uuid} agent={agent}/>
            ))}
        </div>
    )
}