import { RegisterSchema } from "@/schemas/auth.schemas";
import { AxiosError, AxiosResponse } from "axios";
import { z } from "zod";
import { iRegisterOkResponse } from "./interfaces";
import { iGenericApiErrorResponse } from "../main-api.interfaces";
import { axiosController } from "@/ultils/service.controller";

export class UserProvider {
  static async register(data: z.infer<typeof RegisterSchema>): Promise <AxiosResponse<iRegisterOkResponse> | AxiosError<iGenericApiErrorResponse>> {
    const response = axiosController.post('users', data)
    .then((res: AxiosResponse<iRegisterOkResponse>) => {
      return res
    })
    .catch((err: AxiosError<iGenericApiErrorResponse>) => {
      console.error(err);
      return err
    })

    return response

  }
}