import React, { useEffect, useState } from "react";
import { Card } from "../../../component/Cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { setReferences } from "../../../StateManagement/Slices/ReferencesSlices/ReferencesSlices";
import { setProducts } from "../../../StateManagement/Slices/ProductsSlices/ProductsSlices";
import { axiosClient } from "../../../Http/axiosClient";
import { useNavigate } from "react-router-dom";
import { ProdSearch } from "../../../component/ProductsSurch/ProdSearch";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showContent, setShowContent] = useState(false);

  const getData = async () => {
    try {
      setShowContent(false);
      const response = await axiosClient(`api/items/all?${location.search}`);
      dispatch(setProducts(response.data));
      setShowContent(true);
    } catch (error) {
      console.log(error);
    //   navigate("/error");
    }
  };

  useEffect(() => {
    getData();
    console.log('products all : '+products.data)
  }, [location.search]);
  return (
    <div className="px-5 py-6">
        <ProdSearch/>
      <div className="grid grid-cols-resize gap-8">
        {products.data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
