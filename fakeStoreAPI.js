import axios from "axios"

export async function getProducts(){
try {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log("Listado de productos")
    console.log(data);
} catch (error) {
    console.log("fetch error")
}
}

export async function getProductById(id){
try {
    const {data} = await axios.get('https://fakestoreapi.com/products/'+id)
    console.log("Producto por Id")
    console.log(data)
} catch (error) {
    console.log("fetch error")
}
}

export async function postProduct(product){
    try {
        const {data} = await axios.get('https://fakestoreapi.com/products/'+id)
        console.log("Producto agregado")
        console.log(data)
    } catch (error) {
        console.log("fetch error")
    }
}

export async function addProduct({ title, price, category }) {
    const product = { title, price, category };
    try {
        const {data} = await axios.post('https://fakestoreapi.com/products', product);
        console.log("Producto agregado")
        console.log(data)
    } catch (error) {
        console.log("fetch error");
    }
}

export async function deleteProductById(id){
    try {
        const {data}= await axios.delete(`https://fakestoreapi.com/products/${id}`)
        console.log("Producto eliminado");
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}