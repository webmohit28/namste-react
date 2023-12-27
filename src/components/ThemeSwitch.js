import { useState, useContext } from "react";
const ThemeSwitch = ({ isLight, setIsLight }) => {
  //const [isLight, setIsLight] = useState(false);
  //const themeupdate = useContext(themeContext);

  return (
    <div class="switch">
      <input id="switch" class="switch__input" name="switch" type="checkbox" checked={isLight}
        onChange={e => {
          setIsLight(e.target.checked);
        }} />
      <label class="switch__label" for="switch"></label>
    </div>

  )
}

export default ThemeSwitch;