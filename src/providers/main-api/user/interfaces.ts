export interface iRegisterOkResponse {
  message: string;
  user: iUserReturn;
}

export interface iUserReturn {
  id: string;
  name: string;
  surname: string;
  birthdate: string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  watchedLectures: any[]; // Adicionar aqui a interface de watchedLectures
  role: string;
}
