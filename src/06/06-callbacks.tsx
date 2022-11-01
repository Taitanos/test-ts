import React from 'react'

/*
const callback = (): number => {
    alert('hey');
    return 12;
}

window.setTimeout(callback, 1000);
*/

const User = () => {

    const deleteUser = () => {
        alert('User have been deleted');
    }
    const saveUser = () => {
        alert('User have been saved');
    }

    const onNameChange = () => {
        console.log("user name changed")
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }
    return (
        <div><textarea onChange={onNameChange} onBlur={focusLostHandler}>Nikolay</textarea>
            <input/>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={saveUser}>Save</button>
        </div>
    )
}

export default User;