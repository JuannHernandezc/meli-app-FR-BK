import Search from "../../common/Search/Search";
import './HomePage.scss';

function HomePage() {
  return (
    <>
      <Search
        typeInput="text"
        placeholderInput="Nunca dejes de buscar"
        imageSearch="/images/logo-meli.png"
        iconSearch="/images/icon-search.png"
      />
      <div className="message-search">
        <p>
          No has realizado ninguna búsqueda. Por favor, ingresa un término de
          búsqueda en la barra de arriba.
        </p>
      </div>
    </>
  );
}

export default HomePage;
