import React from 'react';
import { SearchInput, Form } from './styles';
import { BsSearch } from 'react-icons/bs';
// import { GlobalContext } from '../../GlobalContext';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

const Search = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async lala => {
    const { data } = await api.get('/starships');

    console.log(data);
    console.log(lala);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* <Label>Time to fly..</Label> */}
      <SearchInput
        {...register('search')}
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
