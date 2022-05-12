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
    return (
        <div style={{marginTop: "100px"}}>
            <form style={{margin:"auto", padding: "15px", maxWidth:"400px", alignContent:"center"}}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite o nome..." onChange={handleInputChange} value={nome}/>
            <label htmlFor="nome">Apelido</label>
            <input type="text" id="apelido" name="apelido" placeholder="Digite o apelido..." onChange={handleInputChange} value={apelido}/>
            <label htmlFor="nome">Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder="Digite o telefone..." onChange={handleInputChange} value={telefone}/>
            </form>
             
        </div>
    )
}

export default AddEdit