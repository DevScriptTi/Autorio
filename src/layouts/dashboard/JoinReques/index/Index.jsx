import React, { useEffect, useState } from "react";
import { DashboardContent } from "../../DashboardContent";
import { Stat } from "./Stat";
import { Filter } from "./Filter";
import { ItemsTable } from "./ItemsTable";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../../../Http/axiosClient";
import { useLocation, useNavigate } from "react-router-dom";
import { setJoinRequests } from "../../../../StateManagement/Slices/JoinRequestsSlices/JoinREquestsSlices";
import { Pagination } from "../../LocalComponenet/Pagination/Pagination";
import { ItemsTableFetch } from "./ItemsTableFetch";
import { PaginationFetch } from "../../LocalComponenet/Pagination/PaginationFetch";
import { CreateKey } from "./CreateKey";

export const JoinRequestIndex = () => {
  const joinRequests = useSelector((state) => state.joinRequests);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const getData = async () => {
    try {
      setShowContent(false);
      const response = await axiosClient(`api/vendors/joinRequests?${location.search}`);
      dispatch(setJoinRequests(response.data));
      setShowContent(true);
      console.log("Response received:", response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  useEffect(() => {
    getData();
    console.log(joinRequests.links?.slice(1,joinRequests.links?.length - 1))
    console.log(joinRequests.links)
  }, [location.search]);
  return (
    <DashboardContent title={"الباعة"}>
      <div className="flex flex-col gap-10 w-full">
        <Stat number={joinRequests.total}/>
        <div className="flex flex-col gap-6 w-full">
          <Filter />
          {showContent ? <ItemsTable data={joinRequests} /> : <ItemsTableFetch/>}
          {showContent ? <Pagination links={joinRequests.links?.slice(1,joinRequests.links?.length - 1)} to="dashboard/joinRequests" /> : <PaginationFetch/>}
        </div>
      </div>
    </DashboardContent>
  );
};
