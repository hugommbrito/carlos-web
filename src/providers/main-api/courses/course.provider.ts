import { axiosController } from "@/ultils/service.controller";
import { iCourse } from "./interfaces";

export class courseProvider {
  static async getCourseById(id: number, token: string): Promise<iCourse> {
    const response = await axiosController.get(`/course/${id}`, token)
    return response.data

  }

  static async getAllCourses(token: string): Promise<iCourse[]> {
    const response = await axiosController.get(`/course`, token)
    return response

  }
}