import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const ItemContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color:#29303b;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 10%;
  border: 0;
  vertical-align: top;
  float: left;
  margin-right: 10px;
  margin-bottom:10px;
`

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

const Price = styled.div`
  margin-bottom: 5px;
`;

const ButtonEdit = styled.span`
  display: block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #e2700c;
  border-color: #9f5307;
  border-radius: 4px;
`;

const ButtonDelete = styled.span`
  display: block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #e41010;
  border-color: #8b0505;
  border-radius: 4px;
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  
`
const ButtonPane = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
`



export default function ListaBooks({books}) {
  const [loading, setLoading] = useState(true);

  function onDelete(id){
      setLoading(false);

      const url = `/books/${id}`;
      api.delete(url)
        .then ( (response) => {});
  }

  return (
    <>
      {!loading
        ? (
            <div>Deletado...</div>
          )
          :
          (
            <ItemContainer>
              <Panel>
                <p>{books.id}</p>
                <Thumbnail src={books.image} />
                <Title>{books.title}</Title>
                <Price>{books.price}</Price>
              </Panel>
                <ButtonPane>
                  <ButtonEdit>
                    <Link to={`/administrar/editar/${books.id}`}>
                      Editar
                    </Link>
                  </ButtonEdit>
                  <ButtonDelete 
                    // onClick={ () => console.log(`Deleted ${books.id}`)}
                    onClick={ () => onDelete(books.id)}
                  >
                    Deletar
                  </ButtonDelete>

                </ButtonPane>
            </ItemContainer>
          )  
      }      
    </>
  )
}

