import { useState,useEffect } from "react"
import CardList from "../CardList/CardList";
import backendProducts from "../../utils/productsMock";
import Grid from '@mui/material/Grid';
const CardListContainer=({title,category})=>{
 

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
            //setProducts(result)
            filterByCategory(result)
        })
        .catch((err)=>{
            console.log("fallo la promesa: ",err)
        })
        .finally(()=>{
            console.log("Finalizo la promesa")
        })
    },[category])

    const filterByCategory = (array) => {
        return array.map( (item) => {
            if(item.category == category ) {
                console.log(item)
                return setProducts(products => [...products,item])
            }
        })
    }

    return(
        <div>
            {console.log("container: ", products)}
            <h1>{title}</h1>
            <CardList productos={products}></CardList>
        </div>
        
    )
    
}
export default CardListContainer;
