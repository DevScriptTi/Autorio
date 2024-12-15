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
import { setOrders } from "../../../../StateManagement/Slices/OrderSlices/OrdersSlices";

export const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const getData = async () => {
    try {
      setShowContent(false);
      const response = await axiosClient(`api/orders?${location.search}`);
      dispatch(setOrders(response.data));
      setShowContent(true);
     } catch (error) {
      navigate("/error");
    }
  };
  useEffect(() => {
    getData();
  }, [location.search]);
  return (
    <DashboardContent title={"الطلبات"}>
      <div className="flex flex-col gap-10 w-full">
        <Stat number={orders.total} text="عدد الطلبات" icon={<List size={50}/>}/>
        <div className="flex flex-col gap-6 w-full">
          {/* {isAdmin() && <Create/>} */}
          <Filter />
          {showContent ? <ItemsTable data={orders} /> : <ItemsTableFetch/>}
          {showContent ? <Pagination links={orders.links?.slice(1,orders.links?.length - 1)} to="dashboard/refrences" /> : <PaginationFetch/>}
        </div>
      </div>
    </DashboardContent>
  );
};
