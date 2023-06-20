import { useLocation } from "react-router-dom"

const Modal = () => {

    const { state } = useLocation();

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-slate-400/75">
            <div className="max-w-md bg-white ">
                <p>{state.img.user.name}</p>
                <img src={state.img.urls.small} alt={state.img.alt_description} className="max-w-full" />
            </div>
        </div>
    )
}
export default Modal