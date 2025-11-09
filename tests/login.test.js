import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {
    stages: [
        { duration: '5s', target: 10 }, 
        { duration: '20s', target: 10 },  
        { duration: '5s', target: 0 },   
    ],
    thesholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'], 
        http_req_failed: ['rate<0.01']
    }
};

export default function () {
    const url = 'http://localhost:3000/login';

    postLogin.username = "jose.alcantara",
    postLogin.senha = "502045"
    
    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    check(response, { 
        'Validar status = 200': (r) => r.status === 200,
        'Validar token = string': (r) => typeof(r.json()).token === 'string'    
    });

    sleep(1);
};
