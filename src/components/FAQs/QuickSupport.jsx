import React from 'react'
import { Button } from 'antd';

function QuickSupport() {
    const emailRecipient = 'faisalmujtaba2005@email.com';
    return (
        <div className="flex flex-col text-center w-full mt-12">
            <h3 className="sm:text-xl text-xl font-medium title-font mb-4 text-gray-900">
                Want quick support?
            </h3>
            <p className="lg:w-2/3 mx-auto leading-relaxed tracking-wide text-base text-black">
                Get quick support 24/7 with our dedicated customer service team. We're here to help you manage your account, answer any questions, and resolve any issues. Trust us to make your experience stress-free and enjoyable.
            </p>
            <Button className='primary-btn mx-auto my-5 rounded-none' type="primary" size='large' onClick={e => {
                handleEmailButtonClick(emailRecipient)
            }}>
                <i className="fa-solid mr-3 fa-envelope"></i>
                Email your questions
            </Button>
        </div>
    )
}
function handleEmailButtonClick(recipient) {
    window.location.href = `mailto:${recipient}`;
}
export default QuickSupport;