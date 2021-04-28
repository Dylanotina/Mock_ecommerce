import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../components/commons/Product'


function Products() {
    const [state, setstate] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            let response = await axios.get('http://localhost:3001/api/products')
            console.log(response.data.data)
            let data = await response.data.data
            setstate(data)
        }
        
        fetchData()
    }, [])

    return (
        <div style={{display: 'grid', gridTemplateColumns : '1fr 1fr 1fr'}}>
            {state.map(product => (<Product {...product}/>))}
        </div>
    )
}

export default Products
