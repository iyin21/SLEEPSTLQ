const Button = ({
    children,
    className,
}: {
    children: React.ReactNode
    className: string
}) => {
    return (
        <button className={`bg-red-100 text-white-100 py-3 px-12 sm:px-16 rounded-[5px] ${className}`}>
            {children}
        </button>
    )
}

export default Button
