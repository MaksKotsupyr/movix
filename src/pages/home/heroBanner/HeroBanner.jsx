import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss'
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home);
  const { data, loading, error } = useFetch(`/movie/upcoming`);

  useEffect(() => {
    const bg = url.backrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
      setQuery('');
    }
  }

  return (
    <div className="heroBanner">

      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movies, TV shows, and people to discover. Explore now.</span>
          <div className="searchInput">
            <input 
              type="text" 
              placeholder="Search for a movies or TV shows..."
              onKeyUp={searchQueryHandler}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner