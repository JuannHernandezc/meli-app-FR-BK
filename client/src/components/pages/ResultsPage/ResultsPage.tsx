import { useSearchParams } from "react-router-dom";
import Search from "../../common/Search/Search";
import { useEffect, useState } from "react";
import Card from "../../common/Card/Card";
import "./ResultsPage.scss";

function ResultsPage() {
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
  }

  interface Price {
    currency: string;
    amount: number;
    decimals: number;
  }

  const [results, setResults] = useState<Items[]>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const paramSearch = searchParams.get("q");
    fetch(`http://localhost:3001/api/items?q=${paramSearch}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.items);
      });
  }, [searchParams]);

  return (
    <>
      <Search
        typeInput="text"
        placeholderInput="Nunca dejes de buscar"
        imageSearch="/images/logo-meli.png"
        iconSearch="/images/icon-search.png"
      />
      <div className="results-container">
        {results?.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              imageCard={item.picture}
              priceCard={item.price.amount}
              titleCard={item.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default ResultsPage;
