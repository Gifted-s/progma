

export default class ProjectName {
    
    constructor({project_name}){
     if(!project_name){
         throw new Error('name is required')
     }
    this.project_name= project_name; 

    }

    
}