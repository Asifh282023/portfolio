const app = require("express");
const {add_skill,add_project, get_skills, get_projects} = require("../Controller/functions.js");
const router = app.Router();

router.post("/add_skill",add_skill);
router.post("/add_project",add_project);
router.get("/get_skills",get_skills);
router.get("/get_projects",get_projects);
module.exports = router;
