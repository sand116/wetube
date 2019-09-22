import routes from "./routes";

// 지역변수였던 것을 전역변수처럼 사용하기 위해서 - 여기서 설정하면 view 폴더에 잇는 템플릿에서도 전역변수처럼 사용가능 
export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    next(); // next 호출시 다음 라우터들에게 넘어감
}