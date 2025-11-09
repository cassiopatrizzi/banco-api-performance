import http from 'k6/http';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));
import { getBaseUrl } from '../utils/variaveis.js';

export function obterToken() {
    const url = getBaseUrl() + '/login';
    
        postLogin.username = "jose.alcantara",
        postLogin.senha = "502045"
        
        const payload = JSON.stringify(postLogin);
    
        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        const response = http.post(url, payload, params);
        return response.json('token');
};