import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { changeNameOfUser } from "../reducers/userReducer";

export const userApi = createApi({
    reducerPath: "userApi",
    tagTypes: ["postList"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: "posts",
                method: "GET"
            }),
            providesTags: ["postList"]
        }),
        getPostWithId: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: "GET"
            }),
            // providesTags: ["postList"],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                console.log("DATA INSIDE THE ONQUERYSTARTED", data);    
                    dispatch(changeNameOfUser(data.title)); // Dispatch action to update Redux
                } catch (error) {
                    console.error("Failed to fetch user:", error);
                } 
            }

        }),
        postUsing: builder.mutation({
            query: (data) => ({
                url: `posts`,
                method: "POST",
                body:data
            }),
            invalidatesTags: ["postList"]
        })
    })
})


export const { useGetAllPostQuery,useGetPostWithIdQuery,usePostUsingMutation } = userApi;