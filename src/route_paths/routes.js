const root='/pm/api/v1'
const ROUTES = Object.freeze({
    ADD_PROJECT_PATH:root+'/add-project',
    UPDATE_PROJECT_PATH:root+ '/update-project/:id',
    GET_PROJECTS_PATH:root+ '/projects',
    INSERT_PROJECT_NAME_PATH: root+'/insert-project-name',
    UPDATE_PROJECT_NAME_PATH:root+ '/update-project-name/:id',
    DELETE_PROJECT_NAME_PATH:root+ '/delete-project-name/:id',
    GET_PROJECT_NAMES_PATH: root+ '/project-names'
})
module.exports = ROUTES


