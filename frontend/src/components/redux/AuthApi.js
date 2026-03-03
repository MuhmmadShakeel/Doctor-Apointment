import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/user",
    credentials: "include", 
  }),

  tagTypes: ["User"],

  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: "/signup",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),

    // ✅ Login
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    // ✅ Logout
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),

    // ✅ Get All Users
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),

    // ✅ Get Single User
    getUser: builder.query({
      query: (id) => `/profile/${id}`,
      providesTags: ["User"],
    }),

    // ✅ Update Profile
    updateUserProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateprofile/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // ✅ Delete User
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/deleteprofile/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserProfileMutation,
  useDeleteUserMutation,
} = authApi;