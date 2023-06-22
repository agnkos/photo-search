import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"

type TagType = {
  title: string
}

const ImageCard = ({ img }: any) => {
  // const [openModal, setOpenModal] = useState(false)
  const context = useContext(Context);
  // useEffect(() => {
  //   console.log(context?.openModal)
  // }, [context?.openModal])

  useEffect(() => {
    if (context?.openModal) {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = "unset"
  }, [context?.openModal])
  // console.log(img)
  return (
    // <Link to={`${img.id}`} >
    <Link to={`${img.id}`} state={{ img: img }}>
      <div className="mb-6 break-inside-avoid max-w-fit" onClick={() => context?.setOpenModal(true)}>
        <img src={img.urls.small} alt={img.alt_description} className="max-w-full" />
        <div className="flex flex-wrap mt-2 gap-x-4 gap-y-2 max-w-full">
          {img.tags.map((tag: TagType) => (
            <div className="bg-slate-200 px-2 py-1 rounded" key={tag.title}>{tag.title}</div>
          ))}
          {/* <div className="bg-slate-200 px-2 py-1 rounded">{img.tags[0].title}</div> */}
          {/* <div className="bg-slate-200 px-2 py-1 rounded">{img.tags[1].title}</div>
          <div className="bg-slate-200 px-2 py-1 rounded">{img.tags[2].title}</div> */}
        </div>
      </div>
    </Link>
  )
}
export default ImageCard

// state={{ img: img }}