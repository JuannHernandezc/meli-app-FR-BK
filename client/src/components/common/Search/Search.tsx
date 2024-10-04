import React, { useEffect, useState } from "react";
import "./search.scss";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  typeInput: string;
  placeholderInput: string;
  imageSearch: string;
  iconSearch: string;
  value: string | null;
}

function Search({ typeInput, placeholderInput, imageSearch, iconSearch, value }: SearchProps) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(value) {
      setInputValue(value);
    }
  }, [value]);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit =(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputValue.trim() === '') return;
    navigate(`/items?q=${inputValue}`)
    setInputValue('');
  }

  const handleRedirectHome = () => {
    navigate('/');
  }
  
  return (
    <div className="search">
      <img onClick={handleRedirectHome} src={imageSearch} alt="Logo Meli" />
      <form className="search-middle" onSubmit={handleSubmit}>
        <input type={typeInput} placeholder={placeholderInput} value={inputValue} onChange={handleSearchInput}/>
        <button type="submit" className="search-middle-icon">
          <img src={iconSearch} alt="" />
        </button>
      </form>
    </div>
  );
}

export default Search;
