const initialState = {
  about: "",
  projects: [],
  blogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ABOUT":
      return { ...state, bio: action.payload };
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "ADD_BLOG":
      return { ...state, blogs: [...state.blogs, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
