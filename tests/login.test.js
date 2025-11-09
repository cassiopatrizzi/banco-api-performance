import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '5s', target: 10 }, 
        { duration: '20s', target: 10 },  
        { duration: '5s', target: 0 },   
    ]
};

export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: 'odila.vasquez',
        senha: '079563',
    });

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
