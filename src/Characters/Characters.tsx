import {useEffect, useState } from 'react';
import axios from 'axios';
import { QueryFunctionContext, QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Characters.module.css'


 export type InfoAboutCharacter = {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
      name: string;
      url: string;
    };
    name: string;
    origin: {
      name: string;
      url: string;
    };
    status: string;
    species: string;
    type: string;
    url: string;
  };
  
  export type Char = {
    info: {
      count: number;
      next: string;
      pages: number;
      prev: null;
    };
    results: InfoAboutCharacter[];
  };

const getAllCharacters = async (keys: readonly unknown[]  | string[] | any) => {
//  console.log(keys);
 console.log(`https://rickandmortyapi.com/api/character/?page=${keys[1].page}`);



 //@ts-ignore
  const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${keys[1].page}`)
  return data;
}

const Characters = () => {  
  let [searchParams, setSearchParams] = useSearchParams({page: '1'})
  const { data, isLoading } = useQuery<Char>({
  queryKey: ["allCharacters", {page: searchParams.get('page')}],
  //@ts-ignore
  queryFn: (queryKey) => getAllCharacters({queryKey})

  })


  if (isLoading) {
    return <div>'Loading ... '</div>
  }
 
  // ja dati netiek iegūti, redzēsim error
  if (!data) {
    throw Error("Something went wrong!")
  }

  const {info , results: characters} = data;

  return (
    <div>
        <br/>
        <h1 className={styles.main_characters_header}>All Rick And Morty Characters</h1>
        <div className={styles.all_characters}>
            {characters.map(({id, image, name, status}) => (
              <Link to={`/character/${id}`} key={id}>
              <div 
                key={id} 
                className={styles.all_characters__one_card}
                style={{backgroundColor: status === 'Alive' ? 'rgba(78, 254, 122, 0.6)': 'rgba(181, 63, 63, 0.6)'}}> 
                    <img src={image} alt="/" />
                    <h3>{name}</h3>
                </div>
                </Link>
            )
            )}
            
              
        </div>
        <button onClick={()=>{
            const pageParam = data.info.next?.split('?')[1] || '';
            setSearchParams(pageParam)
            console.log('clicked')
            console.log(pageParam);
            
              // setNextPageLink(data.info.next || '')
            }}>NEXT</button> 
    </div>
    )
}
export default Characters;