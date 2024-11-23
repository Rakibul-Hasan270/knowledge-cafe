import PropTypes from "prop-types";
import { PiBookmarksFill } from "react-icons/pi";

const Blog = ({ blog, handelBookmarks }) => {

    return (
        <div className="space-y-5 mb-10">
            <img className="w-full" src={blog.cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                    <img className="w-14" src={blog.author_img} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{blog.author}</h3>
                        <p>{blog.posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p>{blog.reading_time} min read</p>
                    <span onClick={() => handelBookmarks(blog)} className="text-3xl border cursor-pointer"><PiBookmarksFill /></span>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <p>
                {blog['hashtags'].map((hash, idx) => <span key={idx}> #{hash}</span>)}
            </p>
            <button className="text-purple-800 underline text-xl font-bold cursor-pointer">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmarks: PropTypes.func.isRequired
}

export default Blog;