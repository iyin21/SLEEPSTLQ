interface buttonInterface
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className: string
}
const Button = ({ children, className, ...rest }: buttonInterface) => {
    return (
        <button
            className={`bg-red-100 text-white-100 py-3 px-12 sm:px-16 rounded-[5px] ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
