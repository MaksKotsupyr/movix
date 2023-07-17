import { useState, useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound  from './pages/404/PageNotFound';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((data) => {

        const url = {
          backrop: data.images.secure_base_url + 'original', 
          poster: data.images.secure_base_url + 'original', 
          profile: data.images.secure_base_url + 'original', 
        }

        dispatch(getApiConfiguration(url));
      })
      .catch((error) => {
        console.log(error) 
      })
  }

  const genresCall = async () => {
    let promises = [];
    let endPoints = ['tv', 'movie'];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((genre) => {
        allGenres[genre.id] = genre;
      })
    })
    
    dispatch(getGenres(allGenres));
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
