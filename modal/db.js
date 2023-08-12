const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://asif28072001:Z8nauQCtWRUqMOVJ@cluster0.isxmexw.mongodb.net/",{
    dbName:"portfolio"
});

const schema_skill = new mongoose.Schema({
    img:String,
    skills:String,
});
const schema_projects = new mongoose.Schema({
    
        img:String,
        project_name:String,
        link:String
    
})

const modal_skill = mongoose.model("skills",schema_skill);
const modal_projects = mongoose.model("Projects",schema_projects);

module.exports={modal_skill,modal_projects};