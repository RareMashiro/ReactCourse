import { useContext, useState } from 'react';
import { Button } from '../button/component';
import { ModalLogin } from '../modal-login/component';
import { UserContext } from '../../../contexts/user';

export const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newName, setNewName] = useState();
    const {user, setUser} = useContext(UserContext);

    const complete = () => {
        const name = document.getElementById('newName').value;
        const mail = document.getElementById('newMail').value;
        if(name && mail) {
            setUser({
                name: newName,
                id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
            });
            setIsOpen(false);
        }
    }

    const exit = () => {
        setUser(null);
        setNewName(null);
    }
    
    return (
        <div>
            {isOpen && (
                <ModalLogin onClose={() => setIsOpen(false)} onSubmit={complete}>
                    <label htmlFor="newName">Name: </label>
                    <input id="newName" type="text" onChange={(evt) => setNewName(evt.target.value)}></input>
                    <label htmlFor="newMail">Mail: </label>
                    <input id="newMail" type="email"></input>
                </ModalLogin>
            )}
            { user ? <> | <span><b>{newName}</b></span> | <Button onClick={exit}>Logout</Button></> 
            : <Button onClick={() => setIsOpen(true)}>Login</Button> }
        </div>
    )
}