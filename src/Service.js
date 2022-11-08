
import axios from 'axios';


const adminService = axios.create(
    {baseURL: 'https://localhost:8080'}
)

export const getAllCustomer=()=> {

    return adminService.get(`/customer`);

}


export const getAllBranch=()=> {

    return adminService.get(`/branch`);

}

export const createBranch=()=> {

    return adminService.post(`/branch`);

}