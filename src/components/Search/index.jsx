import React, { useContext, useCallback } from 'react';
import { SearchInput, Form } from './styles';
import { BsSearch } from 'react-icons/bs';
import { GlobalContext } from '../../GlobalContext';
import { useForm } from 'react-hook-form';

// import api from '../../services/api';

const Search = () => {
  const { register, handleSubmit } = useForm();
  const { setBusca, setStarships, setCurrentPage } = useContext(GlobalContext);

  const onSubmit = useCallback(
    async (info, e) => {
      try {
        //   const { data } = await api.get('/starships');
        const data = {
          currentPage: 1,
          totalPages: 2,
          results: [
            {
              name: 'Millenium Falcon',
              consumables: '2 months',
              MGLT: 75,
              page: 1
            },
            { name: 'X - Wing', consumables: '3 days', MGLT: 15, page: 2 }
          ]
        };
        setCurrentPage(data.currentPage);
        setStarships(data.results);
        setBusca(info.search);
        e.target.reset();
      } catch (err) {
        alert('Problem with the API detected.');
        setBusca(null);
        setStarships(undefined);
        setCurrentPage(false);
      }
    },
    [setBusca, setCurrentPage, setStarships]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SearchInput
        {...register('search')}
        type="number"
        placeholder="Insert the distance in MGLTs"
      />
      <button type="submit" style={{ outline: 'none' }}>
        <BsSearch
          style={{ marginLeft: '-45px', cursor: 'pointer', color: 'white' }}
        />
      </button>
    </Form>
  );
};

export default Search;
