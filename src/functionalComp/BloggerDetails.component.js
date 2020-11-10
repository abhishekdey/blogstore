import { useParams } from "react-router-dom";

export default function BloggerDetils(props) {
    const {id} = useParams();
    const auth = props.blogs.filter((value) =>  value.id.toString() === id);
    return (
        <div>
            <h3>{auth[0].id}</h3>
            <h3>{auth[0].body}</h3>
            <h3>{auth[0].title}</h3>
        </div>
    )
};