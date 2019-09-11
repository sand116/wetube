export const home = (req, res) => res.render("home"); // views폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾은 후 보여줄 것 
export const search = (req,res) => res.send("Search");

export const video = (req,res) => res.send("Video")
export const upload = (req,res) => res.send("Upload")
export const videoDetail = (req,res) => res.send("Video Detail")
export const editVideo = (req,res) => res.send("Edit Video")
export const deleteVideo = (req,res) => res.send("Delete Video")
