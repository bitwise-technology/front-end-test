import React, { ChangeEvent, useState } from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch"
import { useGlobalContextData } from "@store/globalContext"
import {customSwitchStyles} from '@styles/components/customSwitchStyles'

const CustomSwitch: React.FC = () => {
  const {toggleTheme, changeTheme, setChangeTheme} = useGlobalContextData()
  const classes = customSwitchStyles()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggleTheme(e)
    setChangeTheme(e.target.checked)
  }

  return (
    <FormControlLabel
        control={
          <Switch
            disableRipple
            checked={changeTheme}
            onChange={handleChange}
            name="changeTheme"
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
          />
        }
        label="Dark theme"
    />
  )
}

export default CustomSwitch
