import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    // console.log(blog);

    const [pressBookmark,setPressBookmark] = useState(false);

    const handlePressBookmark = () => {
        setPressBookmark(!pressBookmark);
    };
    const {
        id,
        cover,
        author_img,
        author,
        posted_date,
        reading_time,
        title,
        hashtags
    } = blog;

    return (
        <div className='border rounded-xl px-4 pt-4 mt-4'>
            <div className='mb-10'>
                <div>
                    <img className='w-full mb-4 rounded-xl' src={cover} alt="" />
                </div>
                <div className='flex flex-row justify-between mb-4'>
                    <div className='flex flex-row items-center gap-3'>
                        <img className='w-10' src={author_img} alt="" />
                        <div>
                            <h2 className='text-[#111] text-xl font-bold'>{author}</h2>
                            <p className='text-gray-500 text-base font-semibold'>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 items-center justify-center'>
                        <p className='text-gray-500 text-base font-semibold'>{reading_time} min read</p>
                        <button onClick={()=> handleAddToBookmark(blog)}>
                            {
                                pressBookmark ? (<FaBookmark onClick={handlePressBookmark}></FaBookmark>): (<FaRegBookmark onClick={handlePressBookmark}></FaRegBookmark>)
                            }
                        </button>
                    </div>
                </div>
                <h2 className='text-[#111] text-4xl font-bold md:w-4/5 mb-4'>{title}</h2>
                <p className='text-gray-500 text-base font-semibold mb-4'>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                    }
                </p>
                <button onClick={()=> handleMarkAsRead(id,reading_time)} className='underline text-[#6047EC] text-lg font-semibold' href="">Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,

}

export default Blog;