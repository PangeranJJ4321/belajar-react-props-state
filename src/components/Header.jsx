const Header = ({size, title}) => {
    return (
        <h1 className={`${size} font-bold text-gray-800 dark:text-gray-200 mb-6`}>{title}</h1>
    )
}

export default Header