import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import ROUTES from './route_paths/routes'
import HandleCallback from './modules/express-callback'
import controllers from './controller'
let app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.get('/', new HandleCallback(controllers.oAuthController))
app.post(ROUTES.ADD_PROJECT_PATH, new HandleCallback(controllers.submitProjectController))
app.post(ROUTES.UPDATE_PROJECT_PATH,new HandleCallback(controllers.updateProjectController))
app.get(ROUTES.GET_PROJECTS_PATH, new HandleCallback(controllers.getProjectsController))
app.post(ROUTES.INSERT_PROJECT_NAME_PATH, new HandleCallback(controllers.addProjectNameController))
app.post(ROUTES.UPDATE_PROJECT_NAME_PATH, new HandleCallback(controllers.updateProjectNameController))
app.post(ROUTES.DELETE_PROJECT_NAME_PATH, new HandleCallback(controllers.deleteProjectNameController))
app.get(ROUTES.GET_PROJECT_NAMES_PATH, new HandleCallback(controllers.getProjectNamesController))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Listening on port 4000'))
