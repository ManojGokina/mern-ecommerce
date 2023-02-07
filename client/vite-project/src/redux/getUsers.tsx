import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5500';
const createRequest = (url : string)=>({url})


export const getAllUsers = createApi({
    reducerPath:"getAllUsers",
    baseQuery:fetchBaseQuery({baseUrl}),

    endpoints:(builder)=>({
        getUserDetails: builder.query({
            query: (id) => createRequest(`/server/user/${id}`),
          })
    })
})
export const{
    useGetUserDetailsQuery,
} = getAllUsers
