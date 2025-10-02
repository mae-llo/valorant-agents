export default function AgentModal ({agent, onClose}) {
    console.log(agent.abilities.description);

    return(
        <div className="modal">
            <div className="modal-content" >
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-body">
                    <div className="agent-pic">
                        <img src={agent.fullPortrait} alt={agent.displayName} />
                    </div>
                    <div className="agent-info">
                        <h2>{agent.displayName}</h2>
                        <p><strong>Role: </strong> {agent.role.displayName}</p>
                        <p>{agent.description}</p>

                        {agent.abilities && (
                            <div className="abilities">
                                <h3>Abilities</h3>
                                <div className="ability-grid">
                                    {agent.abilities.map((ability, index) => (
                                        <div key={index} className="ability-card">
                                            <img src={ability.displayIcon} alt={ability.displayName} className="ability-icon"/>
                                            <div>
                                                <h4>{ability.displayName}</h4>
                                                <p>{ability.description}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    
    )
}