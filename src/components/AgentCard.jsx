

export default function AgentCard({agent}){
    return(
        <div className="agent-card">
            <img src={agent.displayIcon}
            alt={agent.displayName}
            className="agent-icon"/>
        </div>
    )
}