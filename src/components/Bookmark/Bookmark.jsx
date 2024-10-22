import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {

    const { title } = bookmark;
    return (
        <div>
            <div className=' bg-white p-3 rounded-xl mb-3'>
                <h2 className='text-[#111] text-lg font-semibold'>{title}</h2>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired,

}

export default Bookmark;