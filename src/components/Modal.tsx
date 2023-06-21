import { useLocation, useNavigate, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { XMarkIcon, MapPinIcon, CameraIcon, CalendarIcon } from "@heroicons/react/20/solid";
import { getPhoto } from "../loaders";
import { Context } from "../Context";

export function loader({ params }: any) {
    return getPhoto(params.id)
}
const Modal = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const loaderData = useLoaderData() as any;
    const context = useContext(Context)

    const closeModal = () => {
        context?.setOpenModal(false)
        navigate(-1);
    }

    console.log(state.img.id)


    return (
        <>
            <div className={`fixed top-0 left-0 p-4 w-full h-full bg-slate-400/75 flex items-center justify-center z-50 ${context?.openModal ? "overflow-hidden" : ""}`}>
                <div className={`top-8 mb-8 p-8 bg-white w-11/12 absolute h-5/6 overflow-y-auto z-50 rounded-sm ${context?.openModal ? "overflow-hidden" : ""}`}>
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <img src={state.img.user.profile_image.small} className="rounded-full" />
                            <div>
                                <p className="font-semibold">{state.img.user.name}</p>
                                <p className="text-sm text-zinc-600">{state.img.user.username}</p>
                            </div>
                        </div>
                        <XMarkIcon className="w-6 h-6 ml-auto cursor-pointer" onClick={closeModal} />
                    </div>
                    <img src={state.img.urls.small_s3} alt={state.img.alt_description} className="mx-auto my-6 max-w-full" />
                    <p className="mb-2">{loaderData.description}</p>
                    <p className="mb-1 text-zinc-600 text-sm flex gap-1 items-center"><MapPinIcon className="w-4 h-4" />{loaderData.location.name}</p>
                    <p className="mb-1 text-zinc-600 text-sm flex gap-1 items-center"><CalendarIcon className="w-4 h-4" /> Published on {loaderData.created_at}</p>
                    <p className="mb-1 text-zinc-600 text-sm flex gap-1 items-center"><CameraIcon className="w-4 h-4" />{loaderData.exif.name}</p>
                </div>
            </div>
        </>
    )
}
export default Modal

// user.username

// user.profile_image.small

// description (null)
//created_at

// get photo (id)