import { useLocation } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/20/solid";

const Modal = () => {

    const { state } = useLocation();
    console.log(state.img.id)

    const closeModal = () => {

    }

    return (
        <div>
            <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-slate-400/75">
                <div className="p-8 bg-white w-11/12">
                    <XMarkIcon className="w-6 h-6 ml-auto" onClick={closeModal} />
                    <p>{state.img.user.name}</p>
                    <img src={state.img.urls.small} alt={state.img.alt_description} className="max-w-full" />
                    {/* <p className="text-4xl">this is modal</p> */}
                    {/* <p>{state.img.id}</p> */}
                </div>
            </div>
        </div>
    )
}
export default Modal