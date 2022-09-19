import React from "react"
import cn from 'classnames';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdModeEditOutline} from 'react-icons/md';

function ToDoListItem({todo}) {
    const {id,text,checked} = todo;
    return (
        <li className="TodoListItem">
          <div className={cn('checkbox', { checked })}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
          </div>
          <div className="edit">
            <MdModeEditOutline />
          </div>
          <div className="remove">
            <MdRemoveCircleOutline />
          </div>
        </li>
      );
}

export default ToDoListItem;