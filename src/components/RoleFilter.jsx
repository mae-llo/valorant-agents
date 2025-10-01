export default function RoleFilter({roles, selectedRole, onSelectRole}){
    return(
        <div className="role-filters">
            <button
            className={selectedRole === "All" ? "active" : ""}
            onClick={()=>onSelectRole("All")}
            >All</button>
            
            {roles.map(role => (
                <button key={role} className={selectedRole === role ? "active" : ""} onClick={()=> onSelectRole(role)}
                >{role}</button>
            ))}
        </div>
    )
}