export const updateBio = (about) => ({
  type: "UPDATE_ABOUT",
  payload: about,
});

export const addProject = (project) => ({
  type: "ADD_PROJECT",
  payload: project,
});
export const addBlog = (blog) => ({
  type: "ADD_BLOG",
  payload: blog,
});
