import request from "./request";
import { UserInfo } from "../pages/infoModify";
import { UpdatePassword } from "../pages/passwordModify";


export async function login(username: string, password: string) {
    return await request.post('/user/admin/login', {
        username, password
    });
}


export async function userSearch(username: string, nickName: string, email: string, pageNo: number, pageSize: number) {
    return await request.get('/user/list', {
        params: {
            username,
            nickName,
            email,
            pageNo,
            pageSize
        }
    });
}

export async function freeze(id: number) {
    return await request.get('/user/freeze', {
        params: {
            id
        }
    });
}

export async function getUserInfo() {
    return await request.get('/user/info');
}

export async function updateInfo(data: UserInfo) {
    return await request.post('/user/admin/update', data);
}

export async function updateUserInfoCaptcha() {
    return await request.get('/user/update/captcha');
}

export async function updatePassword(data: UpdatePassword) {
    return await request.post('/user/admin/update_password', data);
}

export async function updatePasswordCaptcha(email: string) {
    return await request.get('/user/update_password/captcha', {
        params: {
            address: email
        }
    });
}

