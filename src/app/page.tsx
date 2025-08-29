import Cards from "@/components/Cards";

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json()
  console.log(data);
  

  return (
    <>
      <Cards title="Products" data={data.products} />
    </>
  );
}
