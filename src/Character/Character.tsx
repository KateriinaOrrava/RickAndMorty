import {useParams, redirect, useNavigate} from 'react-router-dom';
import { InfoAboutCharacter } from '../Characters/Characters';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';
import styles from "./Character.module.css"

const getOneCharacter = async (id:string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return data;
}
const Character= () => {
    const [page, setPage]=useState(1)
    const { id } = useParams<{id: string}>()
    const { data, isLoading } = useQuery<InfoAboutCharacter>(["oneCharacter", id], () => getOneCharacter(id!))

    if (isLoading) {
        return <div>'Loading ... '</div>
      }
     
      // ja dati netiek iegūti, redzēsim error
      if (!data) {
        return null;
      }

    return (
        <div>
            <div className={styles.single_character}>
                <h2>{data.name}</h2>
                <div>
                    <img 
                    src={data.image} 
                    alt={data.name} 
                    className={styles.single_char_img}
                    style={{filter: data.status==='Alive' ? 'grayscale(0%)': 'grayscale(100%)'}}/>
                </div>
                <div className={styles.single_char_info}>
                    <div>
                    <p className={styles.single_char_info}>LOCATION: {data.location.name}</p>
                    </div>
                    <div>
                    <p>SPECIES: {data.species}</p>
                    </div>         
                    <div>
                    <p>FROM: {data.origin.name}</p>
                    </div>
                    <div>
                    <p>STATUS: {data.status}</p>
                    </div> 
                    <div>
                    <p>CREATED: {data.created}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Character