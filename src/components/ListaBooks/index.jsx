import React from 'react'
import styled from 'styled-components';
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

const Button = styled.a`
  display: block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #1414d2;
  border-color: #6d6dec;
  border-radius: 4px;
`;

const ButtonEdit = styled.a`
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

const ButtonDelete = styled.a`
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

const ItemLink = styled.a`
  text-decoration: none;
`
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

  function onDelete(id){
      const url = `/books/${id}`;
      api.delete(url)
        .then ( (response) => {});
  }

  return (
    <>
        <ItemContainer>
          <Panel>
            <Thumbnail src={books.image} />
            <Title>{books.title}</Title>
            <Price>{books.price}</Price>
          </Panel>
            <ButtonPane>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonDelete onClick={ () => onDelete(books.id)}>Deletar</ButtonDelete>

            </ButtonPane>
        </ItemContainer>
    </>
  )
}

