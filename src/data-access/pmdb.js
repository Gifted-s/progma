
import  mongodb from 'mongodb'


export default class PmDB {
    constructor(connectDb) {
        this.createConnection = connectDb
    }


     async getProjects() {
        const db = await this.createConnection()
        let projects = await db.collection('projects').find({})
        let format = await db.collection('projects').aggregate([
            // First Stage
            {
                $group: { _id: "$project", users: { $push: "$$ROOT" } }
            }
        ])
        let projectArray = await projects.toArray()
        let formatArray = await format.toArray()
        return {
            projectArray,
            formatArray
        }
    }



    async findByEmailAndProject(email, project) {
        const db = await this.createConnection()
        let result = await db.collection('projects').find({ email, project })
        let resultToArray = await result.toArray()
        return resultToArray
    }


     async insertProject(project) {
        const db = await this.createConnection()

        let exist = await this.findByEmailAndProject(project.email, project.project)
        if (exist.length > 0) {
            return { status: 'failed', message: 'User have already submitted this project' }
        }
        let result = await db.collection('projects').insertOne({ ...project, date_submitted: Date.now(), reviewed: false })
        if (result.result.ok > 0) {
            return { status: 'successful', data: result.ops[0] }
        }


    }




    async updateProject(id, projectToUpdate) {
        const db = await this.createConnection()
        let result = await db.collection('projects').updateOne({ "_id": mongodb.ObjectID(id) }, { $set: { ...projectToUpdate } })
        if (result.result.nModified > 0) {
            return {
                status: 'success',
                data: { _id: id, ...projectToUpdate }
            }
        }
        return {
            status: 'no-update',
            data: { _id: id, ...projectToUpdate }
        }

    }



    async getProjectNames() {
        const db = await this.createConnection()
        let result = await db.collection('project_names').find({})
        let names = await result.toArray()
        return names
    }


    async insertProjectName(name) {
        const db = await this.createConnection()
        let name_exists = await db.collection('project_names').find({ project_name: name.project_name })
        const name_array = await name_exists.toArray()
        if (name_array.length > 0) {
            return {
                status: 'failed',
                message: 'Name already exist'
            }
        }
        let result = await db.collection('project_names').insertOne(name)
        return { status: 'success', data: result.ops[0] }
    }




     async updateProjectName(id, nameUpdateBody) {
        const db = await this.createConnection()
        let name_exists = await db.collection('project_names').find({ project_name: nameUpdateBody.project_name })
        const name_array = await name_exists.toArray()
        if (name_array.length > 0) {
            return {
                status: 'failed',
                message: 'Name already exist'
            }
        }
        let result = await db.collection('project_names').updateOne({ "_id": mongodb.ObjectID(id) }, { $set: { ...nameUpdateBody } })
        if (result.result.nModified > 0) {
            return {
                status: 'success',
                data: { _id: id, ...nameUpdateBody }
            }
        }
        return {
            status: 'no-update',
            data: { _id: id, ...nameUpdateBody }
        }

    }




    async deleteProjectName(id) {
        const db = await this.createConnection()
        let result = await db.collection('project_names').deleteOne({ "_id": mongodb.ObjectID(id) })
        if (result.result.n > 0) {
            return {
                status: 'success',
            }
        }
        return {
            status: 'no-delete',
        }
    }

}




