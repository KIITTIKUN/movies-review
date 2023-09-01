import {useState} from 'react';
import PropTypes from 'prop-types';

const Input = ({ addPost }) => {
    const [input, setInput] = useState('');
    
const onChange = (event) => {
    setInput(event.target.value)
}

const onKeyDown = (event) => {
        const title = event.target.value 
        if(event.key === 'Enter' && title){
            addPost(title);
            setInput('');
            fetch('http://localhost:3000/movieReviewDatas',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                title,
            }), 
    })
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