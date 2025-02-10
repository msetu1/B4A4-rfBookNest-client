import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (bookInfo) => ({
        url: "/order",
        method: "POST",
        body: bookInfo,
      }),
    }),
    getAdminOrdersData: builder.query({
      query: (userEmail) => ({
        url: "/payment/get-admin-order-data",
        method: "PUT",
        body: { email: userEmail }, // অবজেক্ট আকারে ইমেইল পাঠানো হচ্ছে
        headers: {
          "Content-Type": "application/json", // JSON ডেটা প্রেরণের জন্য সঠিক হেডার
        },
      }),
    }),
    getUserOrdersData: builder.query({
      query: (userEmail) => ({
        url: "/payment/get-user-order-data",
        method: "PUT",
        body: { email: userEmail }, // অবজেক্ট আকারে ইমেইল পাঠানো হচ্ছে
        headers: {
          "Content-Type": "application/json", // JSON ডেটা প্রেরণের জন্য সঠিক হেডার
        },
      }),
    }),

    acceptOrder: builder.mutation({
      query: (bookInfo) => ({
        url: "/payment/accept-order",
        method: "PUT",
        body: bookInfo,
      }),
    }),
    cencelOrder: builder.mutation({
      query: (bookInfo) => ({
        url: "/payment/cencel-order",
        method: "PUT",
        body: bookInfo,
      }),
    }),
    deleteOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/payment/delete-order",
        method: "PUT",
        body: orderInfo,
      }),
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetAdminOrdersDataQuery,
  useGetUserOrdersDataQuery,
  useAcceptOrderMutation,
  useCencelOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
