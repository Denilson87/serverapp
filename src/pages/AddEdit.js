import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from 'react-toastify';

const initialState = {
    nome:"",
    apelido:"",
    telefone:"",
    imageUrl:""
};

const AddEdit = () => {
const navigate = useNavigate();
const [state, setState] = useState(initialState);
const {nome, apelido, telefone, imageUrl} = initialState;

const addContact = async (data) => {
const response = await axios.post("http://localhost:8080/", data);
    if( response.status === 200 ){
        toast.success(response.data);
    }
};
const handleSubmit = (e) => {
    e.preventDefault();   
    if(!nome || !apelido || !telefone || !imageUrl){
        toast.warning("Todos campos sao obrigatorios !");
    }else{
        addContact(state);
        navigate.push("/");
   }    
};
const handleInputChange = (event) => {
  const {name, value} = event.target;
  setState({ ...state, [name]: value });
};

    return (      
        <div style={{marginTop: "100px"}}>
            <form  style={{margin:"auto", padding: "15px", maxWidth:"800px", alignContent:"center",}}  onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite o nome..." value={nome}  onChange={handleInputChange} />
            <label htmlFor="apelido">Apelido</label>
            <input type="text" id="apelido" name="apelido" placeholder="Digite o apelido..." value={apelido}  onChange={handleInputChange} />
            <label htmlFor="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder="Digite o telefone..." value={telefone}  onChange={handleInputChange}/>
            <label htmlFor="imageUrl">Link da Imagem</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Coloque o link da imagem..." value={imageUrl}  onChange={handleInputChange} />
            <input type="submit" value="Adicionar"/>
            </form>             
        </div>
    );
}

export default AddEdit;