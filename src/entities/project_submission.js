export default class ProjectSubmission {
    
    constructor({name, email, project,project_link}){
     if(!name){
         throw new Error('name is required')
     }
     if(!email){
        throw new Error('email is required')
    }
    if(!project){
        throw new Error('project number is required')
    }
    if(!project_link){
        throw new Error('project_link  is required')
    }
    
    this.name= name; this.email= email; this.project= project; this.project_link= project_link

    }

    
}