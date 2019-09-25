import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
// 단순히 url에서 join page 를 요청하는 경우

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  `consol.log(req.body) - request 인자를 받아옴 만약에 bodypaser 가 middleware로 존재하지 않은경우 undefined라고 뜬다
   undefined - 값이 할당되지 않은 상태 (초기화되어있지도 않은 경우 단순 변수 선언했을 시 undefined하다)
   null - 값이 비어있음을 할당함
  `
  if (password !== password2) {
    res.status(400);
    // 상태코드 400 bad request render하면 에러 페이지 뜸
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};




export const logout = (req,res) =>{
  res.redirect(routes.home);
};

export const userDetail = (req,res) => res.render("userDetail", { pageTitle: "User Detail"});
export const editProfile = (req,res) => res.render("editProfile", { pageTitle: "Edit Profile"});
export const changePassword = (req,res) => res.render("ChangePassword", { pageTitle: "Change Password"});