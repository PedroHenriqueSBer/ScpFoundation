import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://442178e8-7038-4f03-be3e-358b7dcb5b67-00-2gew5pj8sgoy8.worf.replit.dev',
    headers: {
        'Content-Type': 'application/json'
    }
});