import {useState} from 'react';
import createPost from '../../../api/Post/createPost';
import { useLocation,useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import Swal from 'sweetalert2';

import './index.scss';

const Review = () =>  {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataTitle = queryParams.get('title');
  const dataImg = queryParams.get('img');
  const initial = {
        title: dataTitle || '',
        image: dataImg || '',
        review: '',
  }
    const [values, setValues] = useState(initial);
    const [rating, setRating] = useState(initial.point);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

      const handleRatingChange = (newRating) => {
        setRating(newRating);
      };

    const handleAddPost = async (e) => {
      const {title,image,review} = values;
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
        await createPost(title,image,rating,review).then(navigate('/movie'));
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
            <div className="movie-img">
            <img
              src={values.image} alt={`${values.title}-img`}
            />
            </div>
            <StarRating initialValue={rating} onChange={handleRatingChange} />
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