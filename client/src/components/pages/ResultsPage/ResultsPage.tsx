import { useSearchParams } from "react-router-dom";
import Search from "../../common/Search/Search";
import { useEffect, useState } from "react";
import Card from "../../common/Card/Card";
import "./ResultsPage.scss";
import BreadCrumb from "../../common/BreadCrumb/BreadCrumb";

function ResultsPage() {
  interface Item {
    author: Author;
    items: Items[];
    categories: string[];
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
  const [breadcrumb, setBreadcrumb] = useState<string[]>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const paramSearch = searchParams.get("q");
    fetch(`http://localhost:3001/api/items?q=${paramSearch}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.items);
        setBreadcrumb(data.categories);
      });
  }, [searchParams]);

  return (
    <>
      <Search
        typeInput="text"
        placeholderInput="Nunca dejes de buscar"
        imageSearch="/images/logo-meli.png"
        iconSearch="/images/icon-search.png"
        value={searchParams.get("q")}
      />
      {
        breadcrumb && <BreadCrumb categories={ breadcrumb } />
      }
      <div className="results-container">
        {results?.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              imageCard={item.picture}
              priceCard={item.price.amount}
              titleCard={item.title}
              freeShippingCard={item.free_shipping}
            />
          );
        })}
      </div>
    </>
  );
}

export default ResultsPage;
