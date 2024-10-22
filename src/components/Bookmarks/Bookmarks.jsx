import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmark }) => {
    return (
        <div className="md:basis-3/12 border mt-4 rounded-xl p-4 bg-gray-100">
            <h2 className='text-[#111] text-2xl font-extrabold mb-3'>Bookmarked Blogs: {bookmark.length}</h2>
            {
                bookmark.map((bookmark) => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object.isRequired,

}

export default Bookmarks;