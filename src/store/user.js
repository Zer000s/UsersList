import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class user {
    user = {};
    users = [];
    isOpen = false;

    constructor(){
        makeAutoObservable(this)
    }

    setUser(user){
        this.user = user;
    }

    setUsers(users){
        this.users = [...users];
    }

    setOpen(bool){
        this.isOpen = bool;
    }

    get User(){
        return this.user;
    }

    get Users(){
        return this.users;
    }

    get Open(){
        return this.isOpen;
    }

    async getUsers(){
        try{
            const res = await axios.get('http://localhost:3000');
            return res.data;
        }
        catch(e){
            console.log(e);
        }
    }
    
    async searchUsers(data){
        try{
            const res = await axios.get(`http://localhost:3000?term=${data}`);
            this.setUsers(res.data);
        }
        catch(e){
            console.log(e);
        }
    }

    async clearSearch(){
        try{
            const data = await this.getUsers();
            this.setUsers(data);
        }
        catch(e){
            console.log(e);
        }
    }
}

export default user;