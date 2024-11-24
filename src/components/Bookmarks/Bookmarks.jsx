import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, markRead }) => {

    return (
        <div className="md:w-1/3 mt-10 bg-gray-200-100">
            <div className="p-5 bg-purple-100 border-2 border-purple-800 text-purple-800 text-3xl font-bold text-center rounded-2xl mb-8">
                <h3>Spent time on read: {markRead} min</h3>
            </div>

            <div className="p-10 bg-slate-100">
                <h3 className="text-5xl font-bold mb-5">Bookmarks : {bookmarks.length}</h3>
                <div className="text-2xl font-bold p-4">
                    {
                        bookmarks.map((bookmark, idx) => <p className="border p-3 bg-slate-300 rounded-xl" key={idx}>{bookmark.title}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    markRead: PropTypes.number
}

export default Bookmarks;