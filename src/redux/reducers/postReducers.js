import { CREATE_POST_ACTION, DELETE_POST_ACTION, LIKE_POST_ACTION } from "../types";

const initialState = {
	posts: [],
	name:"App Genjelize",
};

export const postReducer= (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_ACTION:
			return { ...state, posts: [...state.posts, action.post] };
		case DELETE_POST_ACTION:
			const newPosts = state.posts.filter(post => post.id !== action.id);
			return { ...state, posts: newPosts };
        case LIKE_POST_ACTION:
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.id) {
                    post.likes = post.likes + 1
                }
                return post
            })
            // const likedPosts = state.posts.filter(post => post.id === action.id);
            //     likedPosts[0].likes+=1;
            // const unlikedPosts =state.posts.filter(post => post.id !== action.id);
            // const allPosts= [...unlikedPosts,...likedPosts];
            return { ...state, posts: updatedPosts };    
        default:
            return state;
    }
};
