export default function AgentModal ({agent, onClose}) {

    return(
        <div className="modal">
            <div className="modal-content" >
                <button className="modal-close" onClick={onClose}>X</button>
                <h2>{agent.displayName}</h2>
                <img src={agent.fullPortrait} alt={agent.displayName}/>
                <p><strong>Role: </strong> {agent.role.displayName}</p>
                <p>{agent.description}</p>
            </div>
        </div>
    
    )
}