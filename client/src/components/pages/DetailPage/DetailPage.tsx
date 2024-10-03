import { useParams } from "react-router-dom";
import Search from "../../common/Search/Search";
import { useEffect } from "react";
import CardDetail from "../../common/CardDetail/CardDetail";

function DetailPage() {
  const { id } = useParams<{ id: string}>();

  useEffect(() => {
    fetch(`http://localhost:3001/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      <CardDetail />
    </>
  );
}

export default DetailPage;
