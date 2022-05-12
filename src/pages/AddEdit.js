import React, { useState, useeFfect }from 'react';
import { useHisotry, useLocation } from "react-router-dom";
import axios from 'axois';
import './AddEdit.css';


const initialState = {
    nome:"",
    apelido:"",
    telefone:"",
    imageUrl:"",
};

const AddEdit = () => {
const [state, setState] = useState(initialState);
const [nome, apelido, telefone, imageUrl] = initialState;
const handleSubmit= (e) =>{
    e.preventDefault();
}
const handleInputChange = (e) => {
  let {name, value} = e.target;
  setState({...state, [nome]: value})
}
    return (
        <div style={{marginTop: "100px"}}>
            <form style={{margin:"auto", padding: "15px", maxWidth:"400px", alignContent:"center"}}  onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite o nome..." onChange={handleInputChange} value={nome}/>
            <label htmlFor="nome">Apelido</label>
            <input type="text" id="apelido" name="apelido" placeholder="Digite o apelido..." onChange={handleInputChange} value={apelido}/>
            <label htmlFor="nome">Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder="Digite o telefone..." onChange={handleInputChange} value={telefone}/>
            <label htmlFor="nome">Link da Imagem</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Coloque o link da imagem..." onChange={handleInputChange} value={imageUrl}/>
            </form>
             
        </div>
    )
}

export default AddEdit