export interface iLecture extends iLectureInput {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

}

export interface iLectureInput {
  name: string;
  description?: string;
  youtubeEmbedId: string;
  documentsURLs: string[];
  order: number;
  isActive: boolean;
  moduleId?: number;
  module?: iModule;
}


export interface iModule extends iModuleInput {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  lectures: iLecture[];
}

export interface iModuleInput {
  name: string;
  order: number;
  isActive: boolean;
  courseId?: number;
  course?: iCourse;
}


export interface iCourse extends iCourseInput {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  modules?: iModule[];
}

export interface iCourseInput {
  name: string;
  description: string;
  order: number;
  isActive: boolean;
  introductionEmbedVideoId?: string;
}