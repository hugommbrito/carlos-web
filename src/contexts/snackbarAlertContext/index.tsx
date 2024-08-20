import { createContext, useState } from "react"
import { iSnackbarAlertContextValues } from "./types"
import { Alert, Snackbar, Typography } from "@mui/material"
import { kanit } from "@/ultils/fonts"

export const SnackbarAlertContext = createContext({} as iSnackbarAlertContextValues)

export const SnackbarAlertContextProvider = (
  { children }: {children: React.ReactNode}
) => {
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false)
  const [AlertMessage, setAlertMessage] = useState<string>('GENERIC ALERT MESSAGE')
  const [AlertSeverity, setAlertSeverity] = useState<'error' | 'success' | 'info' | 'warning'>('info')
  const [alertTimer, setAlertTimer] = useState<number>(3000)

  const handleAlertClose = () => {
    setIsOpenAlert(false)
  }

  return (
    <SnackbarAlertContext.Provider
      value={{
        isOpenAlert,
        setIsOpenAlert,
        AlertMessage,
        setAlertMessage,
        AlertSeverity,
        setAlertSeverity,
        alertTimer,
        setAlertTimer
      }}
    >
      {children}
      <Snackbar 
        open={isOpenAlert}
        autoHideDuration={alertTimer}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
        <Alert
          severity={AlertSeverity}
          variant="filled"
          onClose={handleAlertClose}
        >
          <Typography className={kanit.className} fontSize={14} fontWeight={300}>
            {AlertMessage}
          </Typography>
        </Alert>
      </Snackbar>
    </SnackbarAlertContext.Provider>
  )
}