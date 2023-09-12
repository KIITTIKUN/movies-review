import {useState} from 'react';
import createPost from '../../../api/createPost';
import Swal from 'sweetalert2';

import './index.css';

const initial = {
      title: '',
      image: '',
      point: '',
      review: '',
}
const Review = () =>  {
    const [values, setValues] = useState(initial);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    const handleAddPost = async (e) => {
      const {title,image,point,review} = values;
        e.preventDefault();
        const confirmed = await Swal.fire({
          title: 'Are you sure?',
          text: 'Are you sure you want to submit this post?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes, submit it',
          cancelButtonText: 'No, cancel',
        });
    
        if (confirmed.isConfirmed) {
        await createPost(title,image,point,review).then(setValues(initial));
        }
      }

    return (
        <div className='form-field'>
        <div className='header-post'>Create Post</div>
          <form className='form-post' onSubmit={handleAddPost}>
          <label>Title:
            <input
              className='input-post'
              value={values.title}
              onChange={handleInputChange}
              name="title"
            />
            </label>
            <label name="image">Image:
            <input
              className='input-post'
              value={values.image}
              onChange={handleInputChange}
              name="image"
            />
            </label>
            <label>Point:
            <input
              type="number"
              className='input-post'
              value={values.point}
              onChange={handleInputChange}
              name="point"
            />
            </label>
            <textarea
              className='input-post'
              placeholder='Write your review'
              value={values.review}
              onChange={handleInputChange}
              name="review"
            />
            <button className="button-post" type="submit"  > Post </button>
          </form>
          </div>
    );
  }
  

export default Review