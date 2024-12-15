import React, { useEffect, useState } from "react";
import { DashboardContent } from "../../DashboardContent";
import { Filter } from "./Filter";
import { ItemsTable } from "./ItemsTable";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../../../Http/axiosClient";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../LocalComponenet/Pagination/Pagination";
import { ItemsTableFetch } from "./ItemsTableFetch";
import { PaginationFetch } from "../../LocalComponenet/Pagination/PaginationFetch";
import { Stat } from "./Stat";
import { List } from "lucide-react";
import { Create } from "../create/Create";
import { isAdmin } from "../../../../helpers/Algo/Auth";
import { setProducts } from "../../../../StateManagement/Slices/ProductsSlices/ProductsSlices";
import { setReferences } from "../../../../StateManagement/Slices/ReferencesSlices/ReferencesSlices";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const references = useSelector((state) => state.references);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const getReferences = async () => {
    try {
      const response  = await axiosClient(`api/references`);
      dispatch(setReferences(response.data));
      console.log(`refrences : ${response.data }`);
      // console.log("Response received:", data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      setShowContent(false);
      const response = await axiosClient(`api/items?${location.search}`);
      dispatch(setProducts(response.data));
      setShowContent(true);
    } catch (error) {
      console.log(error)
      navigate("/error");
    }
  };


  useEffect(() => {
    getReferences();
    getData();
  }, [location.search]);
  return (
    <DashboardContent title={"المنتجات"}>
      <div className="flex flex-col gap-10 w-full">
        <Stat number={products.total} text="عدد المنتجات " icon={<List size={50}/>}/>
        <Create/>
        <div className="flex flex-col gap-6 w-full">
          {isAdmin() && <Create/>}
          <Filter />
          {showContent ? <ItemsTable data={products} /> : <ItemsTableFetch/>}
          {showContent ? <Pagination links={products.links?.slice(1,products.links?.length - 1)} to="dashboard/products" /> : <PaginationFetch/>}
        </div>
      </div>
    </DashboardContent>
  );
};
