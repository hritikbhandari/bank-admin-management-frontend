
import axios from 'axios';


const adminService = axios.create(
    {baseURL: 'http://localhost:8081'}
)

export const adminLogin = async (body) => {
    const response = await adminService.post(`/admin/`, body);
    return response;
};

export const getAllCustomerAccount = async ()=> {
    const response = await adminService.get(`/account/`);
    return response;
};

export const getAllBranch = async ()=> {
    const response = await adminService.get(`/branch/`);
    return response;
};

export const deleteCustomerAccount = async (id) => {
    const response = await adminService.delete(`/account/${id}`);
    return response;
};

export const deleteBranch = async (id) => {
    const response = await adminService.delete(`/branch/${id}`);
    return response;
};

<<<<<<< HEAD
// DUMMY DATA
// const dummyCustomers=[
//     {
//     "AccountNo":"C001",
//     "customerNo":"1234",
//     "branchId":"b001",
//     "balance":"6000",
//     "openingDate":"2022-7-11"
//     },
//     {
//         "AccountNo":"C001",
//     "customerNo":"1234",
//     "branchId":"b001",
//     "balance":"6000",
//     "openingDate":"2022-7-11"
//     }
// ];
// const dummyBranch=[
//     {
//     "BranchId":"b001",
//     "BranchName":"Asif Ali Road",
//     "BranchAddress":"Delhi",
//     },
//     {
//       "BranchId":"b001",
//       "BranchName":"Asif Ali Road",
//       "BranchAddress":"Delhi",
//       }
   
// ];
=======
    return adminService.get(`/branch`);

}

export const createBranch=()=> {

    return adminService.post(`/branch`);

}
>>>>>>> a54fcc7e09991ee0bb10fa16b1039e40bdc2a0af
