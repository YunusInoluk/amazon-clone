import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const style = {
  product: " w-[19%] p-5 mt-2 mx-1 border border-gray-200",
  productImage:
    "flex justify-center items-center h-[50%] w-full overflow-hidden",
  productInfo: "flex flex-col justify-center",
  productTitle: "text-xl font-bold py-2",
  productRating: "py-1",
  productPrice: "text-xl font-bold ",
};

function Product(props) {
  console.log(props);
  return (
    <div className={style.product}>
      <div className={style.productImage}>
        <img
          src={props.product.image}
          alt={props.product.title}
          className="object-cover h-full"
        />
      </div>
      <div className={style.productInfo}>
        <h3 className={style.productTitle}>
          {props.product.title.substring(0, 40)}
        </h3>
        <p className={style.productDescription}>
          {props.product.description.substring(0, 50)}...
        </p>
        <div className={style.productRating}>
          {[...new Array(5)].map((arr, index) => {
            return index < props.product.rating.rate ? (
              <StarIcon className="text-primary" />
            ) : (
              <StarBorderIcon className="text-primary" />
            );
          })}{" "}
          - {props.product.rating.count}
        </div>
        <p className={style.productPrice}>${props.product.price}</p>
      </div>
    </div>
  );
}

export default Product;
