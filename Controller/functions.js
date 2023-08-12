const {modal_skill,modal_projects} = require("../modal/db.js");
const add_skill =async (req, res) => {
var {img,skills} =  req.body;

 var response = await modal_skill.create({img,skills});
  res.sendStatus(200);
 }

 const add_project = async (req, res) => {
  console.log(req.body);
  var {img,project_name,link} =  req.body;
    
  await modal_projects.create({img,project_name,link});
  res.sendStatus(200);
 }
 const get_skills = async (req,res)=>{
  let skills=await modal_skill.find();
  res.json(skills);
 
 }
 const get_projects = async (req,res)=>{
  let projects=await modal_projects.find();
  res.json(projects);
  
 }
 
 module.exports={add_skill ,add_project,get_skills,get_projects};