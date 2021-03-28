export default class ProjectSubmission {
    constructor({ firstname, lastname, username, email, project, project_link }) {
        if (!firstname) {
            throw new Error('firstname is required')
        }
        if (!lastname) {
            throw new Error('lastname is required')
        }
        if (!username) {
            throw new Error('username is required')
        }
        if (!email) {
            throw new Error('email is required')
        }
        if (!project) {
            throw new Error('project number is required')
        }
        if (!project_link) {
            throw new Error('project_link  is required')
        }

        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.project = project;
        this.project_link = project_link
      
    }


}