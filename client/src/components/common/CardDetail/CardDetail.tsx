import { currencyMapper } from "../../../helpers/mappers/currency";
import "./CardDetail.scss";

interface CardDetailProps {
  title: string;
  image: string;
  price: number;
  description: string;
  sold_quantity: number;
}
function CardDetail({
  title,
  image,
  price,
  description,
  sold_quantity,
}: CardDetailProps) {
  return (
    <>
      <div className="detail">
        <div className="detail-main">
          <div className="detail-left">
            <img className="detail-left__image" src={image} alt="placeholder" />
          </div>
          <div className="detail-right">
            <p className="detail-right__sold">
              Nuevo - {sold_quantity} vendidos
            </p>
            <p className="detail-right__title">{title}</p>
            <p className="detail-right__price">{currencyMapper(price)}</p>
            <button className="buy">Comprar</button>
          </div>
        </div>
        <div className="description">
          <p className="description__title">Descripcion del producto</p>
          <p className="description__text">{description || 'No se encontro descripción del producto'}</p>
        </div>
      </div>
    </>
  );
}

export default CardDetail;
