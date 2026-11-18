import ProductPage from "../product-page";
import { productMetadata, products } from "../product-data";

const product = products["i-hate-napoli"];
export const metadata = productMetadata(product);
export default function Page() { return <ProductPage product={product} />; }
