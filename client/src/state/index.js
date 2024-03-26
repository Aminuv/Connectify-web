import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        sztLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogin: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends:(state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("User is not logged in!");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPosts: (state, action) => {
            const updatePost = action.payload.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
        state.posts = updatePost;
        },
    }, 
},);
// Export the action creators
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;

export default authSlice.reducer;