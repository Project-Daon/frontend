import axios, { Method } from 'axios';
import { apihost } from './host';

// FetchData 함수의 매개변수와 반환값 타입 정의
interface FetchDataOptions {
    url: string;
    method?: Method; // HTTP 메서드 ('GET', 'POST', 등)
    headers?: Record<string, string>; // 헤더는 키-값 문자열 쌍
    data?: Record<string, any>; // 요청 바디 데이터
    params?: Record<string, any>; // 쿼리 파라미터
}

export const daon_request = async <T = any>({
    url,
    method = 'GET',
    headers = {},
    data = undefined,
    params = undefined,
}: FetchDataOptions): Promise<T> => {
    try {
        const response = await axios.request<T>({
            url,
            method,
            headers,
            data,
            params,
            withCredentials: true
        });
        return response.data; // 요청 성공 시 데이터 반환
    } catch (error) {
        console.error('Error during fetchData:', error);
        throw error; // 에러를 호출한 곳으로 전달
    }
};

export const login = async (id: string, password: string) => {
    /* 로그인 API */
    const response = await daon_request({
        url: apihost + "/login",
        method: "POST",
        data: { id: id, password: password }
    })
    return response;
}

export const get_diary = async (token: string, date: string) => {
    const response = await daon_request({
        url: apihost + "/diary/",
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            date: date
        }
    })
    return response;
}

export const writing_diary = async (token: string, text: string) => {
    const response = await daon_request({
        url: apihost + "/diary/",
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        data: { content: text }
    })
    return response;
}


export const delete_diary = async (token: string) => {
    const response = await daon_request({
        url: apihost + "/diary/",
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response;
}

export const get_userdata = async (token: string) => {
    const response = await daon_request({
        url: apihost + "/users/@me",
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response;
}