import  ProductManagementDB from '../data-access'
import   Services  from './project_services'
const ProjectManagementService = new Services(ProductManagementDB)
export default ProjectManagementService
