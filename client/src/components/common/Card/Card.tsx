import { useNavigate } from 'react-router-dom';
import './Card.scss';
import { currencyMapper } from '../../../helpers/mappers/currency';
interface CardProps {
    id: string;
    imageCard: string;
    priceCard: number;
    titleCard: string;
}
function Card({id, imageCard, priceCard, titleCard}: CardProps) {
    const navigate = useNavigate();
    const redirectCard = (id: string) => () => {
        navigate(`/items/${id}`);
    };
    
  return (
    <>
      <div onClick={redirectCard(id)} className='card'>
        <img
          className='card-image'
          src={imageCard}
          alt=""
        />
        <div className='card-content'>
          <p className='card-content-price'>{currencyMapper(priceCard)}</p>
          <p className='card-content-title'>
            {titleCard}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
