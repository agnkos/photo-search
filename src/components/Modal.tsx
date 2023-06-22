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

    // console.log(state.img.id)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
    }

    return (
        <>
            <div className={`fixed top-0 left-0 p-4 w-full h-full bg-slate-400/75 flex items-center justify-center z-50`}>
                <div className={`top-8 mb-8 p-8 bg-white w-11/12 absolute h-[90vh]  z-50 rounded-sm overflow-y-auto`}>
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
                    <div className="grid grid-cols-[repeat(3,minmax(100px,160px))] mb-4">
                        <p className="text-xs text-zinc-600">Views</p>
                        <p className="text-xs text-zinc-600">Likes</p>
                        <p className="text-xs text-zinc-600">Downloads</p>
                        <p className="col-start-1 row-start-2 text-sm">{loaderData.views}</p>
                        <p className="col-start-2 row-start-2 text-sm">{loaderData.likes}</p>
                        <p className="col-start-3 row-start-2 text-sm">{loaderData.downloads}</p>
                    </div>
                    <p className="mb-2">{loaderData.description}</p>
                    {loaderData.location.name && (
                        <p className="mb-1 text-zinc-600 text-sm flex gap-1 items-center"> <MapPinIcon className="w-4 h-4" />{loaderData.location.name}</p>)
                    }
                    <p className="mb-1 text-zinc-600 text-sm flex gap-1 items-center"><CalendarIcon className="w-4 h-4" /> Published on {formatDate(loaderData.created_at)}</p>
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