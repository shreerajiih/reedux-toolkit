import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

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
            providesTags: ["postList"]

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