import axios from "axios";
import { CreateUserDto, LoginDto, ResponseUser } from "./types";

const instanse = axios.create({
  baseURL: "http://localhost:7777/",
});

export const UserApi = {
  async register(dto: CreateUserDto){
    const {data} = await instanse.post <CreateUserDto, {data:ResponseUser }>("/auth/register", dto);
    return data;
  },
  async login(dto: LoginDto) {
    const {data} = await instanse.post <LoginDto, {data:ResponseUser }>("/auth/login", dto);
    return data;
  },
};