import products from "../../../public/api/products";
import Card from "./Card04/Card";





export default function() {
    return(
        <div className="wrapper post gap-5 py-12 my-2">
            {products.slice(0,4).map((product, idx) => 
                <Card  key={idx} product={product} />
            )}
        </div>
    )
};