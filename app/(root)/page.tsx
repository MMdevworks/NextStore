import ProductList from "@/components/shared/product/product-list";
// data from sample file:
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  // console.log(sampleData);
  return <>
      <ProductList 
        // data={sampleData.products} 
        data={latestProducts} 
        title='Newest Arrivals'
      />
    </>;
};
 
export default HomePage;