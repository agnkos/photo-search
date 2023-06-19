import { getPhotos } from "../loaders";
import { useLoaderData, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
// import type { LoaderFunctionArgs } from 'react-router-dom'

type Object = {
    params: Params
}

type Params = {
    query: string
}


export function loader({ params }: Object) {
    // console.log('params', params)
    return getPhotos(params.query);
}

const Results = () => {

    const loaderData = useLoaderData() as any;
    const { query } = useParams();

    const imageElements = loaderData.map((img: any) => (
        <div key={img.id} className="mb-6 break-inside-avoid">
            <img src={img.urls.small} alt={img.alt_description} className="" />
            <div className="flex mt-2 mb-4 gap-4">
                <div className="bg-slate-200 px-2 py-1 rounded">{img.tags[0].title}</div>
                <div className="bg-slate-200 px-2 py-1 rounded">{img.tags[1].title}</div>
                <div className="bg-slate-200 px-2 py-1 rounded">{img.tags[2].title}</div>
            </div>
        </div>
    ))

    return (
        <div className="p-8">
            <SearchBar />
            <div className="max-w-7xl mx-auto">
                <h1 className="mt-6 text-5xl font-bold">{query}</h1>
                <p className="my-4 text-xl font-bold">Results for {query}</p>
                <div className="max-[450px]:columns-1 columns-2 md:columns-3 gap-6 ">
                    {imageElements}
                </div>
            </div>
        </div>
    )
}
export default Results

//tags (array 3) -> tags.title

// {total: 10000, total_pages: 1000, results: Array(10)}
// results
// :
// Array(10)
// 0
// :
// {id: 'ZCHj_2lJP00', slug: 'ZCHj_2lJP00', created_at: '2020-06-15T04:30:27Z', updated_at: '2023-06-19T12:13:38Z', promoted_at: '2020-06-15T08:16:29Z', …}
// 1
// :
// {id: 'pdALzg0yN-8', slug: 'pdALzg0yN-8', created_at: '2019-01-29T22:58:09Z', updated_at: '2023-06-19T04:05:39Z', promoted_at: '2019-01-31T08:25:00Z', …}
// 2
// :
// {id: '2JcixB1Ky3I', slug: '2JcixB1Ky3I', created_at: '2019-10-11T20:03:27Z', updated_at: '2023-06-18T17:09:23Z', promoted_at: null, …}
// 3
// :
// {id: '7GX5aICb5i4', slug: '7GX5aICb5i4', created_at: '2018-12-03T15:59:55Z', updated_at: '2023-06-19T04:05:04Z', promoted_at: '2018-12-04T06:34:49Z', …}
// 4
// :
// {id: 'hxn2HjZHyQE', slug: 'hxn2HjZHyQE', created_at: '2019-12-22T14:02:29Z', updated_at: '2023-06-18T20:10:52Z', promoted_at: '2019-12-22T15:25:02Z', …}
// 5
// :
// {id: '46TvM-BVrRI', slug: '46TvM-BVrRI', created_at: '2020-05-19T10:21:06Z', updated_at: '2023-06-18T21:13:05Z', promoted_at: null, …}
// 6
// :
// {id: 'mBRfYA0dYYE', slug: 'mBRfYA0dYYE', created_at: '2020-03-09T23:05:33Z', updated_at: '2023-06-18T20:12:12Z', promoted_at: null, …}
// 7
// :
// {id: 'YCPkW_r_6uA', slug: 'YCPkW_r_6uA', created_at: '2018-01-30T16:57:29Z', updated_at: '2023-06-18T13:03:15Z', promoted_at: null, …}
// 8
// :
// {id: 'R1oSj2m-7Ks', slug: 'R1oSj2m-7Ks', created_at: '2019-01-26T23:52:50Z', updated_at: '2023-06-19T04:05:38Z', promoted_at: null, …}
// 9
// :
// {id: 'rW-I87aPY5Y', slug: 'rW-I87aPY5Y', created_at: '2018-05-14T22:15:19Z', updated_at: '2023-06-19T01:03:45Z', promoted_at: '2018-05-15T12:30:56Z', …}
// length
// :
// 10
// [[Prototype]]
// :
// Array(0)
// total
// :
// 10000
// total_pages
// :
// 1000

// POJEDYNCZY IMG

// 0
// :
// alt_description
// :
// "white and brown long fur cat"
// blur_hash
// :
// "LRJcqDIUL3s..mX8rXRPOZnirWXT"
// color
// :
// "#a6d9d9"
// created_at
// :
// "2020-06-15T04:30:27Z"
// current_user_collections
// :
// []
// description
// :
// null
// height
// :
// 7952
// id
// :
// "ZCHj_2lJP00"
// liked_by_user
// :
// false
// likes
// :
// 1815
// links
// :
// {self: 'https://api.unsplash.com/photos/ZCHj_2lJP00', html: 'https://unsplash.com/photos/ZCHj_2lJP00', download: 'https://unsplash.com/photos/ZCHj_2lJP00/download?i…xfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4NzE3ODgyOXww', download_location: 'https://api.unsplash.com/photos/ZCHj_2lJP00/downlo…xfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4NzE3ODgyOXww'}
// promoted_at
// :
// "2020-06-15T08:16:29Z"
// slug
// :
// "ZCHj_2lJP00"
// sponsorship
// :
// null
// tags
// :
// (3) [{…}, {…}, {…}]
// topic_submissions
// :
// {animals: {…}, wallpapers: {…}}
// updated_at
// :
// "2023-06-19T12:13:38Z"
// urls
// :
// {raw: 'https://images.unsplash.com/photo-1592194996308-7b…xjYXRzfGVufDB8fHx8MTY4NzE3ODgyOXww&ixlib=rb-4.0.3', full: 'https://images.unsplash.com/photo-1592194996308-7b…zfGVufDB8fHx8MTY4NzE3ODgyOXww&ixlib=rb-4.0.3&q=85', regular: 'https://images.unsplash.com/photo-1592194996308-7b…B8fHx8MTY4NzE3ODgyOXww&ixlib=rb-4.0.3&q=80&w=1080', small: 'https://images.unsplash.com/photo-1592194996308-7b…DB8fHx8MTY4NzE3ODgyOXww&ixlib=rb-4.0.3&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1592194996308-7b…DB8fHx8MTY4NzE3ODgyOXww&ixlib=rb-4.0.3&q=80&w=200', …}
// user
// :
// {id: '1LMzZNX562k', updated_at: '2023-06-18T14:01:45Z', username: 'alvannee', name: 'Alvan Nee', first_name: 'Alvan', …}
// width
// :
// 5304