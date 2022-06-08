import { useEffect, useState } from "react"
/* import CardList from "../components/CardList/CardList" */
import backendProducts from "../utils/productsMock"
import { useParams } from 'react-router-dom'
import CardListContainer from "../components/CardListContainer/CardListContainer"
const Productos=()=>{
    /* const [products, setProducts] = useState([]) */
    const { category } = useParams()

/*     const[products,setProducts]=useState([]);
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
    } */

    return(
        <div>
            <CardListContainer title="Productos más vendidos"  category={category}/>
        </div>
        
    )
}
export default Productos