import React, {SetStateAction} from 'react'

const layoutCtxDefaultValue = {
  mobileMode: false,
  setMobileMode: (state: SetStateAction<boolean>) => {
    state
  },
}

export const LayoutContext = React.createContext(layoutCtxDefaultValue)
