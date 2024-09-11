import { LoginSchema } from "@/schemas/auth.schemas";
import { axiosController } from "@/ultils/service.controller";
import { AxiosError, AxiosResponse } from "axios";
import { unknown, z } from "zod";
import { iLoginOkResponse } from "./interfaces";
import { iGenericApiErrorResponse } from "../main-api.interfaces";

export class AuthProvider {
  static async login(data: z.infer<typeof LoginSchema>): Promise<AxiosResponse<iLoginOkResponse> | AxiosError<iGenericApiErrorResponse>> {
    const respose = axiosController.post('/auth/login', data)
    .then((res: AxiosResponse<iLoginOkResponse>) => {
      return res
    })
    .catch((err: AxiosError<iGenericApiErrorResponse>) => {
      console.error(err);
      return err
    })

    return respose

  }
}