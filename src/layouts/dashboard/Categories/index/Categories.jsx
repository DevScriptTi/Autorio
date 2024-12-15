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
import { ChartNoAxesGanttIcon, List } from "lucide-react";
import { setReferences } from "../../../../StateManagement/Slices/ReferencesSlices/ReferencesSlices";
import { Create } from "../create/Create";
import { isAdmin } from "../../../../helpers/Algo/Auth";
import { setProductCategories } from "../../../../StateManagement/Slices/Extras/ProductCategoriesSlices";

export const Categories = () => {
  const categories = useSelector((state) => state.productCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const getData = async () => {
    try {
      setShowContent(false);
      const response = await axiosClient(`api/referenceCategories`);
      dispatch(setProductCategories(response.data.data));
      setShowContent(true);
      // console.log("Response received:", response.data);
    } catch (error) {
      console.log(error)
      // navigate("/error");
    }
  };
  useEffect(() => {
    getData();
  }, [location.search]);
  return (
    <DashboardContent title={"أصناف لمصادر"}>
      <div className="flex flex-col gap-10 w-full">
        <Stat number={categories.length} text="عدد أصناف المصادر" icon={<ChartNoAxesGanttIcon size={50}/>}/>
        <div className="flex flex-col gap-6 w-full">
          <Create/>
          {showContent ? <ItemsTable data={categories} /> : <ItemsTableFetch/>}
        </div>
      </div>
    </DashboardContent>
  );
};
