import {useState} from 'react';
import PropTypes from 'prop-types';

const Input = ({ addPost }) => {
    const [input, setInput] = useState('');

    function onChange(event){
        setInput(event.target.value)
    }

    function onKeyDown(event){
        const title = event.target.value  

        if(event.key === 'Enter' && title){
            addPost(title);
            setInput('');
        }
    }
    return (
        <div className="Input-field">
            <div className='Input-header'>add review</div>
            <input className='Input-box'
            type='text'
            placeholder='type review'
            value = {input}
            onChange = {onChange}
            onKeyDown = {onKeyDown}
            />
        </div>
    )
}

Input.propTypes = {
    addPost : PropTypes.func.isRequired
}
export default Input