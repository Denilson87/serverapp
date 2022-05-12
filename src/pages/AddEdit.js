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
        <div>
             <h2>This page is Edit and update !</h2>
        </div>
    )
}

export default AddEdit