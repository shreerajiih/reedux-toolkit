# Chat App

```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api" }), // Fake API URL
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (userId) => `messages/${userId}`, // Fetch old messages for the user

      // 🟢 This function runs when a component starts using this query
      async onCacheEntryAdded(userId, { dispatch, cacheEntryRemoved, updateCachedData }) {
        // 🟡 1️⃣ Create WebSocket connection when query starts
        const ws = new WebSocket(`wss://example.com/messages/${userId}`);

        ws.addEventListener("message", (event) => {
          const newMessage = JSON.parse(event.data); // Convert received data to JSON

          // 🔵 2️⃣ Update Redux state with the new message
          updateCachedData((draft) => {
            draft.push(newMessage); // Append new message to existing chat messages
          });
        });

        try {
          // ⏳ 3️⃣ Wait until the query is unsubscribed or component unmounts
          await cacheEntryRemoved;
        } finally {
          // 🔴 4️⃣ Close WebSocket when the component using this query is removed
          ws.close();
        }
      },
    }),
  }),
});

export const { useGetMessagesQuery } = chatApi;
```

2. update into the state

```
const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      chatApi.endpoints.getMessages.matchFulfilled,
      (state, action) => {
        state.messages = action.payload;  // Sync Redux state
      }
    );
  },
});

```



