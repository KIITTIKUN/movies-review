import PropTypes from 'prop-types'

import Rating from '@mui/material/Rating';
import './index.scss'

function Star({score}) {
  return (
    <Rating
        value={score}
        readOnly
        sx={{
            '& .MuiRating-iconFilled': {
                color: 'red',
            },
        }}
    />  
);
}

export default Star;


Star.propTypes = {
    score: PropTypes.number.isRequired
}