import axios from 'axios';
import { API_ROOT } from "@/config/development";
import { UserInfo } from '@/model/userInfo';

export async function getUserInfo(): Promise<UserInfo>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/userInfo', config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}
