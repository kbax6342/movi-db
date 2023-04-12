import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Search.scss';
import ReactPaginate from 'react-paginate';

const Search = () => {
  const [movies, setmovies] = useState([]);
  const [tv, settv] = useState([]);
  const query = useParams();
  const [results, setresutls] = useState(true);
  const { search } = useLocation();
  const newArray = [...movies, ...tv];

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/search/movie?api_key=' +
            process.env.REACT_APP_API_KEY +
            '&language=en-US&query=' +
            query.id +
            '=1&include_adult=false'
        );

        setmovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    const getTV = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/search/tv?api_key=' +
            process.env.REACT_APP_API_KEY +
            '&language=en-US&query=' +
            query.id +
            '=1&include_adult=false'
        );

        settv(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getTV();
    getMovies();
  }, []);

  function Items({ currentItems }) {
    return (
      <div className='max-w-6xl mx-auto flex flex-col mt-[3em]'>
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id} className='mb-10 flex items-center rounded-lg bg-slate-100 p-2'>
              <div className='w-[300px]'>
                <img
                  className='h-[200px] object-scale-down mx-3'
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt=''
                />
              </div>
              <div className='w-full'>
                <p className=' text-2xl font-medium'>
                  {item.original_title || item.original_name}
                </p>
                <p className='text-base'>{item.overview}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(newArray.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(newArray.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % newArray.length;
      console.log(newOffset);
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          className='flex text-base w-fit mx-auto my-5'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='< previous'
          pageClassName='page-item'
          pageLinkClassName=' px-4 '
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName=' px-4 '
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  console.log(newArray);
  return (
    <>
      {/* <div className='max-w-7xl mx-auto h-[calc(100vh-200px)] flex flex-col mt-[3em]'>
      {newArray.length != 0 ? 
         newArray?.map((item) => (
            <div key={item.id} className='border'>
             <p className=' text-2xl font-medium'>{item.original_title || item.original_name}</p> 
              <p className='text-base'>{item.overview}</p> 
            </div>
          )) : <div>"There are not matching movies"</div>
        }
    </div> */}
      <PaginatedItems itemsPerPage={4} />
    </>
  );
};

export default Search;
