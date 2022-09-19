import { useState ,useRef, useCallback} from 'react';
import { MdAdd} from 'react-icons/md';


function ToDoInsert({onInsert}) {
    
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])
    const onSubmit = useCallback(
        e => {
            setValue(''); //value 초기화
            //기본이벤트(새로고침) 방지
            e.preventDefault();
        }
    ,[value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            onChange={onChange}
            value={value} placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default ToDoInsert;