import { addProduct, getProductById, getProducts,deleteProductById } from "./fakeStoreAPI.js"

const args = process.argv.slice(2)

if (args[0] === "GET" && args[1].includes("products/") ){
    const idFromArgs = args[1].split("/",2)[1]
    getProductById(idFromArgs)
}

if (args[0] === "GET" && args[1] === "products" ){
    getProducts()
}

if(args[0] === "POST"){
    const [ , , title, price, category ] = args;
    addProduct({ title, price, category });
}

if(args[0] === "DELETE" && args[1].includes("products/")){
      const idFromArgs = args[1].split("/",2)[1]
    deleteProductById(idFromArgs)
}
