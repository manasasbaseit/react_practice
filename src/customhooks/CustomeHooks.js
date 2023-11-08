import getApiData from "./Utilts"
function CustomeHooks(){
  let product=getApiData('https://fakestoreapi.com/products/1')
  return(
        <>
        <h1>custom hooks demo</h1>
        <div>{Object.keys(product)}</div>
        <div>{product.title}</div>
        <div>{product.price}</div>
      
        </>
      )
}
export default CustomeHooks