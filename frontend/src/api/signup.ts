import axios from 'axios';
import { API_ROOT } from "@/config/production";
import { signupUser } from '@/model/signupUser';

export async function createNewUser(user: signupUser) { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.post(API_ROOT + '/signupUser', user);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}
