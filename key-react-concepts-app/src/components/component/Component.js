export default function Component({image, title, description}) {
    return (
        <li className="concept">
            <img src={image} alt={title}></img>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}