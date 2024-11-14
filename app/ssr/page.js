export default async function Post() {
    const products = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await products.json();
  
    // by default every component in next js are ssr
    console.log('data',data)
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
}
  