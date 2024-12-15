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
import { setReferences } from "../../../../StateManagement/Slices/ReferencesSlices/ReferencesSlices";
import { Create } from "../create/Create";
import { isAdmin } from "../../../../helpers/Algo/Auth";
import { setProductCategories } from "../../../../StateManagement/Slices/Extras/ProductCategoriesSlices";

export const References = () => {
  const references = useSelector((state) => state.references);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const getProductCategories = async () => {
    try {
      const { data } = await axiosClient("api/productCategories");
      dispatch(setProductCategories(data.data))
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      setShowContent(false);
      const response = await axiosClient(`api/references?${location.search}`);
      dispatch(setReferences(response.data));
      setShowContent(true);
     } catch (error) {
      navigate("/error");
    }
  };
  useEffect(() => {
    getProductCategories();
    getData();
  }, [location.search]);
  return (
    <DashboardContent title={"منتجات مصدرية"}>
      <div className="flex flex-col gap-10 w-full">
        <Stat number={references.total} text="عدد منتجات مصدرية" icon={<List size={50}/>}/>
        <div className="flex flex-col gap-6 w-full">
          {isAdmin() && <Create/>}
          <Filter />
          {showContent ? <ItemsTable data={references} /> : <ItemsTableFetch/>}
          {showContent ? <Pagination links={references.links?.slice(1,references.links?.length - 1)} to="dashboard/refrences" /> : <PaginationFetch/>}
        </div>
      </div>
    </DashboardContent>
  );
};
