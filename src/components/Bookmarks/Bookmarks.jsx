import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmark, readingTime }) => {
    return (
        <div>
            <div className='border mt-4 p-4 rounded-xl bg-indigo-100 border-indigo-600'>
                <h3 className='text-center text-xl font-extrabold text-indigo-600'>Spent time on read : {readingTime} min</h3>
            </div>
            <div className="md:basis-3/12 border mt-4 rounded-xl p-4 bg-gray-100">
                <h2 className='text-[#111] text-xl font-extrabold mb-3'>Bookmarked Blogs: {bookmark.length}</h2>
                {
                    bookmark.map((bookmark,idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,

}

export default Bookmarks;