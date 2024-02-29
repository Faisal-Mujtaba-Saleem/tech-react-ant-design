import React from 'react'

function SectionHead({ sectionTitle, sectionDescription }) {
    return (
        <div className="text-center mb-16 md:px-0 px-10">
            <h1 className="sm:text-3xl text-xl font-medium title-font text-gray-900 mb-4">
                {sectionTitle}
            </h1>
            <div className="flex my-5 justify-center">
                <div className="w-[4vw] h-[3px] rounded-full !bg-[#1890ff] inline-flex"></div>
            </div>
            {
                !!sectionDescription &&
                <p className="text-base leading-relaxed lg:w-3/4 xl:w-full mx-auto my-10 text-gray-500s">
                    {sectionDescription}
                </p>
            }
        </div>
    )
}

export default SectionHead
