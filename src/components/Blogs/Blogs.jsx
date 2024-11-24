import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handelBookmarks,handelMark}) => {
    const [blogs, setBlogs] = useState([]);
    // const [readingTime, setReadingTime] = useState();

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(blogs)
    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl">Blogs</h3>
            {
                blogs.map((blog, idx) => <Blog key={idx} blog={blog} handelBookmarks={handelBookmarks} handelMark={handelMark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelBookmarks: PropTypes.func.isRequired,
    handelMark:PropTypes.func
}

export default Blogs;