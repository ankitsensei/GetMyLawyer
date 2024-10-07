import React from 'react'
interface FaqsProps{
    question: string;
    answer: string
}
const Faqs: React.FC<FaqsProps> = ({question, answer}) => {
    return (
        <div className='my-5'>
            <div className='flex justify-between items-center my-5'>
                <h2 className='text-xl font-bold w-80'>{question}</h2>
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            <p className='text-lg w-2/4'>{answer}</p>
        </div>
    )
}

export default Faqs