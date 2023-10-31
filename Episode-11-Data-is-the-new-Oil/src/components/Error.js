import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <hr/>
            <h3>Something went wrong!</h3>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;