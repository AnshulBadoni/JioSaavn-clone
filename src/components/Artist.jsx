
import { Link } from 'react-router-dom';

const Cards = ({cardData}) => {
  return (
    <Link to='/Artistpage'>
    <div className=' sm:w-[15vw] w-[25vw] sm:h-[30vh] h-[11vh] ml-2 mt-10  '>
          <img className='rounded-full border-[5px] border-secondary object-cover h-full w-full' src={cardData.artistImage} alt="" />
          <p className='flex justify-center items-center text-secondary mt-2 sm:text-sm text-xs'>{cardData.artist}</p>
    </div>
    </Link> 
  );
};

export default Cards;
