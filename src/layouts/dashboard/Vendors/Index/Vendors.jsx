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
import { setVendors } from "../../../../StateManagement/Slices/VendorsSlices/VendorsSlices";
import { Stat } from "./Stat";
import { User } from "lucide-react";

export const Vendors = () => {
  const vendors = useSelector((state) => state.vendors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const getData = async () => {
    try {
      setShowContent(false);
      const response = await axiosClient(`api/vendors?${location.search}`);
      dispatch(setVendors(response.data));
      setShowContent(true);
      console.log("Response received:", response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  useEffect(() => {
    getData();
  }, [location.search]);
  return (
    <DashboardContent title={"الباعة"}>
      <div className="flex flex-col gap-10 w-full">
        <Stat number={vendors.total} text="عدد الباعة" icon={<User size={50}/>}/>
        <div className="flex flex-col gap-6 w-full">
          <Filter />
          {showContent ? <ItemsTable data={vendors} /> : <ItemsTableFetch/>}
          {showContent ? <Pagination links={vendors.links?.slice(1,vendors.links?.length - 1)} to="dashboard/vendors" /> : <PaginationFetch/>}
        </div>
      </div>
    </DashboardContent>
  );
};
