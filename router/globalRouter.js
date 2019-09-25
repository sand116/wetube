import express from "express"
import routes from "../routes"
import { home, search } from "../controllers/videoController";
import {
    getJoin,
    logout,
    postJoin,
    getLogin,
    postLogin
  } from "../controllers/userController";


const globalRouter = express.Router();
// routes.join페이지 get방식으로 요청된 것은 getjoin controller 에서 처리
// routes.join페이지 post방식으로 요청된 것은 postjoin controller 에서 처리

globalRouter.get(routes.join, getJoin)
globalRouter.post(routes.join, postJoin)

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout)

globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)


export default globalRouter;