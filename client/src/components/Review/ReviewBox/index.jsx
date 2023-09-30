import {useState} from 'react';
import createPost from '../../../api/Post/createPost';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

import './index.scss';

const Review = () =>  {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataTitle = queryParams.get('title');
  const dataImg = queryParams.get('img');
  const initial = {
        title: dataTitle || '',
        image: dataImg || '',
        point: '',
        review: '',
  }
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
              readOnly
            />
            </label>
            <label name="image">Image:
            <input
              className='input-post'
              value={values.image}
              onChange={handleInputChange}
              name="image"
              readOnly
            />
            </label>
            <label>Point:
            <input
              type="number"
              className='input-post'
              value={values.point}
              onChange={handleInputChange}
              name="point"
              required
            />
            </label>
            <textarea
              className='input-post'
              placeholder='Write your review'
              value={values.review}
              onChange={handleInputChange}
              name="review"
              required
            />
            <button className="button-post" type="submit"  > Post </button>
          </form>
          </div>
    );
  }
  

export default Review