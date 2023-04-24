import axios from 'axios';
const url =  "/api/post";

export default class API {
    // Lay tat ca bai viet tu server
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }

    // Lay 1 bai viet theo ID
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // Them bai viet vao CSDL
    static async addPost(post){
        const res = await axios.post(url,post);
        return res.data;
    }

    // Cap nhat bai viet trong CSDL
    static async updatePost(id,post){
        const res = await axios.patch(`${url}/${id}`,post);
        return res.data;
    }

    // Xoa 1 bai viet trong CSDL
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}