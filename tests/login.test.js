import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01'],
    },
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
