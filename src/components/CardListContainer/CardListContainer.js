import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'
import CardList from "../CardList/CardList";
import backendProducts from "../../utils/productsMock";
//Firestore
import db from '../../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const CardListContainer=({title})=>{
 
  
    const[products,setProducts]=useState([]);
    const { category } = useParams()
    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(()=>{
        getProducts()
        .then((productos)=>{
           
            if(category){
                const foundItems=filterByCategory(productos)
                setProducts(foundItems)
            }
            else{
                setProducts(productos)
              
            }
            
        })
        .catch((err)=>{
            console.log("fallo la promesa: ",err)
        })
        .finally(()=>{
           
            console.log("Finalizo la promesa")
        })
    },[category])

    const filterByCategory = (array) => {
        return array.filter((item)=>item.category==category)
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
