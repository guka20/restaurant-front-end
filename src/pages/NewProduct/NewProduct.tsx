import { InputElement, MainButton } from "src/components";
import "./NewProduct.css";
import { useEffect, useState } from "react";
import { NewProductType } from "src/types/Types";
export const NewProduct = () => {
  const [productValues, setProductValues] = useState<NewProductType>({
    category: "chicken",
  } as NewProductType);
  useEffect(() => {
    console.log(productValues);
  }, [productValues]);
  const handleAddButtonClick = () => {
    console.log("Saved");
  };
  const handleInputChange = (e: any) => {
    if (e.target.name === "image") {
      setProductValues({
        ...productValues,
        image: URL.createObjectURL(e?.target.files[0]),
      });
    } else {
      setProductValues({
        ...productValues,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <div className="new-product-page">
      <h1>Add New Product</h1>
      <div className="forms">
        <input
          type="text"
          className="name"
          name="name"
          placeholder="Product Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="sub-title"
          name="subtitle"
          placeholder="Product sub-title"
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="price"
          name="price"
          placeholder="Price"
          min={0}
          onChange={handleInputChange}
        />
        <input
          type="file"
          className="image"
          name="image"
          accept=".png, .jpg, .jpeg"
          onChange={handleInputChange}
        />

        <select
          name="category"
          id="category"
          className="category"
          defaultValue="category"
          onChange={handleInputChange}
        >
          <option value="chicken">Chicken</option>
          <option value="fruit">Fruit</option>
          <option value="drink">Soft-Drink</option>
          <option value="desert">Desert</option>
          <option value="icecream">Icecream</option>
          <option value="fish">Fish</option>
          <option value="rice">Rice</option>
          <option value="curry">Curry</option>
        </select>
      </div>
      <div className="button-place">
        <MainButton handleButtonClick={handleAddButtonClick}>
          Add New Product
        </MainButton>
      </div>
    </div>
  );
};
