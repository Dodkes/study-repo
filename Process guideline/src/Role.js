export default function Role (props) {
   function displayProcesses (e) {

        const roleIDs = ['network', 'tsysnow', 'teams', 'other']
        roleIDs.forEach(element => {
                document.getElementById(element).style.backgroundColor = 'transparent'
                document.getElementById(element).style.color = 'white'
        });
        e.target.style.backgroundColor = 'white'
        e.target.style.color = 'black'
        props.getRoleData(e.target.id)
   }

    return <button id={props.id} onClick={displayProcesses} className="role-tab">{props.roleName}</button>
}

