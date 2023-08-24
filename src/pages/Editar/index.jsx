import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

const initialValue = {
    title: '',
    image: '',
    price: 0,
    url: '',
};



function Editar(){
    //
    const [values, setValues] = useState(initialValue);

    //
    const navigate = useNavigate();

    const { id } = useParams();

    const url = `/books/${id}`;

    useEffect( () =>{
        if (id){
            api.get(url)
                .then( (response) => {
                    setValues(response.data)
                })
        }
    },[])
    

    // 
    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do form

        api.put(url, values)
            .then( () =>{
                navigate('/administrar');
            })
    }

    //
    function onChange(ev){
        const {name, value } = ev.target
        // console.log({name, value});

        setValues({ ...values, [name]:value})
        // console.log(values);
    }

    return(
        <>
            <h1>Editar</h1>
            {/* <img src={values.image} alt="" /> */}
            <form onSubmit={onSubmit}>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="title">Titulo</label>
                    <input className={styles.InputText} type="text" id="title" name="title" value={values.title} onChange={onChange}/>
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="url">Url do Livro</label>
                    <input className={styles.InputText} type="text" id="url" name="url" value={values.url} onChange={onChange}/>
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="image">Url/Image</label>
                    <input className={styles.InputText} type="text" id="image" name="image" value={values.image} onChange={onChange}/>
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="price">Preço</label>
                    <input className={styles.InputText} type="text" id="price" name="price" value={values.price} onChange={onChange}/>
                </div>
                <button type="submit">Salvar</button>
            </form>            
        </>
    )
}

export default Editar;