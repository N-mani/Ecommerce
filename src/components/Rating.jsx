import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: '#fbd309', fill: '#fbd309' }}
            />
          ) : (
            <FontAwesomeIcon icon={faStar} style={{ color: '#121211' }} />
          )}
        </span>
      ))}
    </>
  )
}

export default Rating
