// url 적기 
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/searcn";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    //변수 : 값 할당 , key : 함수 할당 
    userDetail: id => {
        if (id) {
          return `/users/${id}`;
        } else {
          return USER_DETAIL;
        }
    },
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,

    videoDetail : id => {
        if (id) {
          return `/videos/${id}`;
        } else {
          return VIDEO_DETAIL;
        }
      },
      
    editVideo : EDIT_VIDEO,
    deleteVideo : DELETE_VIDEO,
}

export default routes;