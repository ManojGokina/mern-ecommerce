import { configureStore } from "@reduxjs/toolkit";
import { getAllUsers } from "./getUsers";

export default configureStore({
    reducer:{
        [getAllUsers.reducerPath]: getAllUsers.reducer,
    },
});
