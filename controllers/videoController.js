import {videos} from "../db";
import routes from "../routes";


export const home = (req, res) => {
    res.render("home" ,{pageTitle : "Home", videos}); // views폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾은 후 보여줄 것 

};
// 1번째 arg - templte, 2번째 인자 - 전달할 정보 
export const search = (req,res) =>{
    const {query : {term : searchingBy}} = req; 
    /*
    console.log(req.query.term); req.query 안에  search url칸에 입력한 정보들을 express가 담아놓음.
    old way 
    const searchingBy = req.query.term 
    res.render("Search", {pageTitle : "Search", searchingBy : searchingBy});
    req.query안에 term 값을 searchingBy 변수에 담아놓음.
    이 searchingby변수를search templete에 전달가능해짐 
    
    */
    res.render("Search", {pageTitle : "Search", searchingBy, videos}); 
    //searchingBy로 입력되는 값이 여기 위에 있는 searchingBy의 값과 같다고 자동으로 인식

} ;

export const getUpload = (req, res) =>{
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};


export const editVideo = (req,res) => res.render("editVideo", {pageTitle : "Edit Video"})
export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle : "Video Detail"})
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle : "Delete Video"})