import { useParams } from "react-router-dom";
import Search from "../../common/Search/Search";
import { useEffect, useState } from "react";
import CardDetail from "../../common/CardDetail/CardDetail";

function DetailPage() {
  interface Item {
    author: Author;
    items: Items[];
  }

  interface Author {
    name: string;
    lastname: string;
  }

  interface Items {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    description: string;
    sold_quantity: number;
  }

  interface Price {
    currency: string;
    amount: number;
    decimals: number;
  }

  const [detail, setDetail] = useState<Items>();
  const { id } = useParams<{ id: string}>();
  useEffect(() => {
    fetch(`http://localhost:3001/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.item);
      });
  }, [id]);
  return (
    <>
      <Search
        typeInput="text"
        placeholderInput="Nunca dejes de buscar"
        imageSearch="/images/logo-meli.png"
        iconSearch="/images/icon-search.png"
      />
      {
        detail && (
          <CardDetail title={detail.title} image={detail.picture} price={detail.price.amount} description={detail.description} sold_quantity={detail.sold_quantity}/>
        )
      }

    </>
  );
}

export default DetailPage;
