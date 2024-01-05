import { useState } from 'react'
import UseDarkMode from './UseDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
const SwitcherBtn = () => {
    const [colorTheme, setTheme] = UseDarkMode();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    }



    return (
        <div className='w-fit rounded-full p-[2px]'>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
            />
        </div>
    )
}

export default SwitcherBtn