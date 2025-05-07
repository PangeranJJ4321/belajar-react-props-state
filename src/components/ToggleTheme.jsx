const ToggleTheme = ({theme, onToggleTheme}) => {
    return (
        <button
            onClick={onToggleTheme}
            className="px-4 py-2 mb-6 rounded cursor-pointer font-bold dark:bg-gray-700 dark:text-gray-200 bg-gray-50 text-gray-800
            "
        >
            Ganti Tema : {theme === 'dark' ? 'Terang' : 'Gelap'}
        </button>
    )
}

export default ToggleTheme