// SSG typically means that the content is generated at build time. In Next.js 14, with the app directory, you can use the dynamic feature to achieve static rendering for pages.

// Example: In the app directory, static rendering is the default behavior unless you explicitly specify dynamic behavior. If you want to render a static page that does not change frequently, you can use static imports or APIs.

export default async function Post() {
  const products = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await products.json();

  // by default every component in next js are ssr
  console.log("data", data);
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
