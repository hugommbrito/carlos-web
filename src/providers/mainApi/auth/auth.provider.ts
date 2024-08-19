import { LoginSchema } from "@/schemas/auth.schemas";
import { axiosController } from "@/ultils/service.controller";
import { AxiosError, AxiosResponse } from "axios";
import { unknown, z } from "zod";
import { iLoginErrorResponse, iLoginOkResponse } from "./interfaces";

export class AuthProvider {
  static async login(data: z.infer<typeof LoginSchema>): Promise<AxiosResponse<iLoginOkResponse> | AxiosError<iLoginErrorResponse>> {
    const respose = axiosController.post('/auth/login', data)
    .then((res: AxiosResponse<iLoginOkResponse>) => {
      console.log(res);
      return res
    })
    .catch((err: AxiosError<iLoginErrorResponse>) => {
      console.log(err);
      return err
    })

    return respose

  }
}