import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";

const initialState = {
    nome:"",
    apelido:"",
    telefone:"",
    imageUrl:"",
};

const AddEdit = () => {

const [state, setState] = useState(initialState);

const {nome, apelido, telefone, imageUrl} = initialState;

const addContact = async (data) => {
    const response = await axios.post("http://localhost:8080/", data);
    if( response.status ===200 ){

    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    addContact(state);
}
const handleInputChange = (e) => {
  let {name, value} = e.target;
  setState({...state, [name]: value });
};
    return (      
        <div style={{marginTop: "100px"}}>
            <form  style={{margin:"auto", padding: "15px", maxWidth:"800px", alignContent:"center",}}  onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite o nome..." onChange={handleInputChange} value={nome}/>
            <label htmlFor="apelido">Apelido</label>
            <input type="text" id="apelido" name="apelido" placeholder="Digite o apelido..." onChange={handleInputChange} value={apelido}/>
            <label htmlFor="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder="Digite o telefone..." onChange={handleInputChange} value={telefone}/>
            <label htmlFor="imageUrl">Link da Imagem</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Coloque o link da imagem..." onChange={handleInputChange} value={imageUrl}/>
            <input type="submit" value="Add"/>
            </form>             
        </div>
    );
}

export default AddEdit;