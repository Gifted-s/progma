export default function createResponse(status, body) {
    return {
        headers : {
            'Content-Type': 'application/json'
        },
        status,
        body
    }
}