export interface iSnackbarAlertContextValues {
  isOpenAlert: boolean,
  setIsOpenAlert: (isOpen: boolean) => void,
  AlertMessage: string,
  setAlertMessage: (message: string) => void,
  AlertSeverity: 'error' | 'success' | 'info' | 'warning',
  setAlertSeverity: (severity: 'error' | 'success' | 'info' | 'warning') => void,
  alertTimer: number,
  setAlertTimer: (timer: number) => void,  
}