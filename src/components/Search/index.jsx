import React, { useContext, useCallback } from 'react';
import { SearchInput, Form } from './styles';
import { BsSearch } from 'react-icons/bs';
import { GlobalContext } from '../../GlobalContext';
import { useForm } from 'react-hook-form';
// import * as yup from 'yup';

// import api from '../../services/api';

const Search = () => {
  const { register, handleSubmit } = useForm();
  const { setBusca, setStarships } = useContext(GlobalContext);
  //   const schema = yup.object().shape({
  //     search: yup.number().required()
  //   });

  const onSubmit = useCallback(
    async (info, e) => {
      try {
        //   const { data } = await api.get('/starships');
        const data = {
          results: [
            { name: 'Millenium Falcon', consumables: '2 months', MGLT: 75 },
            { name: 'X - Wing', consumables: '3 days', MGLT: 15 }
          ]
        };
        // console.log(data);
        setStarships(data.results);
        setBusca(info.search);
        e.target.reset();
      } catch (err) {
        console.log(err);
        setBusca(null);
        setStarships(undefined);
      }
    },
    [setBusca, setStarships]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* <Label>Time to fly..</Label> */}
      <SearchInput
        {...register('search')}
        type="number"
        placeholder="Insert the distance in ML"
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
