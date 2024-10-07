import React from 'react'

interface ReviewsProps {
    comment: string;
    profile: string;
    name: string;
    position: string;
}

const Reviews: React.FC<ReviewsProps> = ({comment, profile, name, position}) => {
    return (
        <div className='flex flex-col gap-4  w-1/3 h-[300px] p-10'>
                <p><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></p>
            <p className='font-bold'>"{comment}"</p>
            <img src={profile} alt="profile" className='w-14 h-14 rounded-[50%]' />
            <div className='flex flex-col gap-0'>
                <p className='font-bold'>{name}</p>
                <p>{position}</p>
            </div>
            <p className='font-bold text-2xl'><i className="fa-brands fa-webflow text-2xl"></i> webflow</p>
        </div>
    )
}

export default Reviews