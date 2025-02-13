import axios from "axios";
export const baseURL = "http://43.205.9.233:8080";
export const httpClient = axios.create({
    baseURL: baseURL,
    });