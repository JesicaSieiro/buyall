import { useState,useEffect } from "react"
import CardList from "../CardList/CardList";
import Grid from '@mui/material/Grid';
const CardListContainer=(prop)=>{
    //lista de productos
    const backendProducts=[
        {id:1, title:'Zapatilla mujer runner', price:7500, imagen:'zapatilla1.jpg', stok:7},
        {id:2, title:'Zapatilla man runner', price:6500, imagen:'zapatilla2.jpg', stok:9},
        {id:1, title:'Zapatilla basquet', price:9000, imagen:'zapatilla3.jpg', stok:2}
    ]

    const[products,setProducts]=useState([]);
    const getProducts = () => {
        return new Promise((result, reject) => {
          setTimeout(() => {
            result(backendProducts)
          }, 2000);
        });
      };

    useEffect(()=>{
        getProducts()
        .then((result)=>{
            setProducts(result)
        })
        .catch((err)=>{
            console.log("fallo la promesa: ",err)
        })
        .finally(()=>{
            console.log("Finalizo la promesa")
        })
    },[])

    return(
        <div>
            {console.log("container: ", products)}
            <h1>{prop.title}</h1>
            <CardList productos={products}></CardList>
        </div>
        
    )
    
}
export default CardListContainer;
