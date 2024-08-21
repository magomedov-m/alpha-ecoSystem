import { useState, useEffect } from 'react'

export default function Header() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
  return (
    <>
        <button onClick={toggleTheme}>Переключить тему</button>
    </>
  )
}
