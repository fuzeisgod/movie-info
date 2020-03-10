import request from "./index";

export default {
    async getUserById() {
       const response = await request.get('/users/1')
       return response.data
    }
}