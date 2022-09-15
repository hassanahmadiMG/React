
import {FaTrash} from 'react-icons/fa';

const Note = ({id, text, date,handleDeleteNote }) => {
    return(
        <div className="note">
<span>{text}</span>
<div className="note-footer">
    <small>{date}</small>
    <FaTrash 
    onClick={() => handleDeleteNote(id)}
    className="FaTrash"
    size="1.3em"
    />
</div>
        </div>
    );
};

export default Note;