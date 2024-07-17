export interface ModuleBoxProps {
	moduleName: string
  lectures: LectureInfos[]
  onClickModule: () => void
  id: number
  expandedModule: number | false
}

export interface LectureInfos {
  id: number
  title: string
  is_watched: boolean
  onClickLecture: (id:number) => void
}
