export default function AgentCard({agent, onClick}){

    return(
        <div className="agent-card" onClick={() => {
            console.log("Clicked: ", agent.displayName);
            onClick();}
            }
            >
            <img src={agent.displayIcon} alt={agent.displayName} className="agent-icon"/>
            <h2>{agent.displayName}</h2>
            <p>{agent.role.displayName}</p>
        </div>
    )
}