import AuthService from './oauth'
import  ProjectSubmission from '../entities/project_submission'
import ProjectName from '../entities/project_name'
export default class Services extends AuthService {
 
    constructor(ProjectManegementDB) {
        super()
        this.pmDB =  ProjectManegementDB
       

    }

   
    async submitProject(projectBody) {
        
        let project = new ProjectSubmission(projectBody)
    
        const response = await this.pmDB.insertProject(project)

        return response
    }

     async updateProject({ id, updateBody }) {
        if (!id) {
            throw new Error('id is required')
        }
        const response = await this.pmDB.updateProject(id, updateBody)

        return response
    }

    async getProjects() {
        const response = await this.pmDB.getProjects()
        return response


    }

    async addProjectName(nameBody) {
        const projectName = new ProjectName(nameBody)

        const response = await this.pmDB.insertProjectName({ project_name: projectName.project_name })
        return response
    }

     async updateProjectName(id, updateBody) {
        const projectName = new ProjectName(updateBody)
        const response = await this.pmDB.updateProjectName(id, projectName)
        return response
    }

     async deleteProjectName(id) {
        if (!id) throw new Error('id is required for deletion')
        const response = await this.pmDB.deleteProjectName(id)
        return response
    }

     async getNames() {
      
        const response = await this.pmDB.getProjectNames()
        return response


    }


}

