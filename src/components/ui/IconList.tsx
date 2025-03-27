// Komponen IconList
const IconList = ({ items }: { items: string[] }) => {
    return (
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-primary mt-1 mr-2">
                        <i className="fas fa-check-circle"></i>
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

export default IconList