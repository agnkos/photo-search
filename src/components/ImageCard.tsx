import { Link } from "react-router-dom"

type TagType = {
  title: string
}

const ImageCard = ({ img }: any) => {
  console.log(img)
  return (
    // <Link to={`${img.id}`} >
    <Link to="modal" state={{img: img}} >
      <div className="mb-6 break-inside-avoid max-w-fit">
        <img src={img.urls.small} alt={img.alt_description} className="max-w-full" />
        <div className="flex mt-2 gap-4 max-w-full">
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