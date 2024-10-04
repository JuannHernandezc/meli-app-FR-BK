import { useNavigate } from "react-router-dom";
import "./Card.scss";
import { currencyMapper } from "../../../helpers/mappers/currency";
interface CardProps {
  id: string;
  imageCard: string;
  priceCard: number;
  titleCard: string;
  freeShippingCard: boolean;
}
function Card({ id, imageCard, priceCard, titleCard , freeShippingCard }: CardProps) {
  const navigate = useNavigate();
  const redirectCard = (id: string) => () => {
    navigate(`/items/${id}`);
  };

  return (
    <>
      <div className="card" onClick={redirectCard(id)}>
        <img className="card__image" src={imageCard} alt="" />
        <div className="card-content">
          <div className="card-content-amount">
            <p className="card-content-amount__price">{currencyMapper(priceCard)}</p>
            {
              freeShippingCard && <img src="images/icon-shipping.png" alt="" />
            }
          </div>
          <p className="card-content__title">{titleCard}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
