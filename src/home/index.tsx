import { useEffect, useState } from "react";
import "./style.css"

interface ProductsOptions {

    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    images: string[];

}

export default function Home(){
    const [products, setProducts] = useState<ProductsOptions[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await res.json();

                setProducts(data);
            }catch(error){
                console.log('Error cargando datos: ', error);
            }
        }

        fetchData();
    }, []);

return (
    <div>

        <h2>Productos</h2>

        {products.map((product) => (
            <div key={product.id}>
            <h3>{product.id}</h3>
            <h4>{product.title}</h4>
            <p>{product.slug}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img 
                src={product.images?.length ? product.images[0] : "https://via.placeholder.com/150"} 
                alt={product.title} 
        />
            </div>
        ))}

    </div>
)

}