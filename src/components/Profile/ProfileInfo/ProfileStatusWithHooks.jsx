import React, {useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode =() => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {editMode === true ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
                </div>
                :
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;