

export const join = (req,res) => res.render("join", { pageTitle: "Join"});
export const login = (req,res) => res.render("login", { pageTitle: "Log In"});
export const logout = (req,res) => res.render("logout", { pageTitle: "Log Out"});

export const usersDetail = (req,res) => res.render("usersDetail", { pageTitle: "User Detail"});
export const editProfile = (req,res) => res.render("editProfile", { pageTitle: "Edit Profile"});
export const changePassword = (req,res) => res.render("ChangePassword", { pageTitle: "Change Password"});