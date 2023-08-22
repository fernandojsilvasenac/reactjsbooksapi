import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListaBooks from '../../components/ListaBooks';
import api from '../../services/api';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Container = styled.div`
  max-width: 960px;
  margin: 10px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ButtonPane = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

function ListaAdministrar (){
  const[books, setBooks] = useState([]);
  const[search, setSearch] = useState('');

  useEffect( () => {
      const url = '/books';
      
      const params = {};
      if (search) {
        params.title_like = search

        api.get('/books?_embed=books', {params})
          .then( (response) => {
            // console.log(response)
            setBooks(response.data)
          })

      } else {
        
        api.get(url) // all
        .then( (response) => {
          // console.log(response)
          setBooks(response.data)
        })

      }
  },[search]) 


    return(
      <Container>
        <h1>Administrar Lista de Livros</h1>
        <ButtonPane>
          <input 
            className={styles.listaSearchInput}
            type="search" 
            placeholder='Buscar Livros - Digite aqui o Titulo do Livro'
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
          <Link to='/administrar/cadastrar'>Cadastrar +</Link>
        </ButtonPane>

        <ListContainer>
          {
            books.map(book => {
              return ( <ListaBooks 
                key={book.id} 
                books={book}
                
                  /> )
            })
          }
          
        </ListContainer>
    </Container>
    )
}

export default ListaAdministrar;