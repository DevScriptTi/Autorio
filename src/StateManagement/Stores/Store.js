import { configureStore } from "@reduxjs/toolkit";
import wilayasSlice from '../Slices/Extras/WilayasSlice';
import userSlice from '../Slices/UsersSlices/UserSlices'
import JoinRequestsSlices from '../Slices/JoinRequestsSlices/JoinREquestsSlices'
import VendorsSlices from "../Slices/VendorsSlices/VendorsSlices";
import ReferencesSlices from "../Slices/ReferencesSlices/ReferencesSlices";
import OrdersSlices from "../Slices/OrderSlices/OrdersSlices";
import ProductCategoriesSlices from "../Slices/Extras/ProductCategoriesSlices";
import ProductsSlices from "../Slices/ProductsSlices/ProductsSlices";

export const store = configureStore({
    reducer:{
        wilayas : wilayasSlice,
        user : userSlice ,
        joinRequests :  JoinRequestsSlices ,
        vendors : VendorsSlices ,
        references : ReferencesSlices ,
        orders : OrdersSlices ,
        productCategories : ProductCategoriesSlices ,
        products : ProductsSlices ,
    }
})