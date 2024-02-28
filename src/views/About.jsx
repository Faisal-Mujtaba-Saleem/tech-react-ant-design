import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useFetch } from '../utils/useFetch';
import SectionHead from '../components/commons/SectionHead';

const sectionTitle = "About Us";
const sectionDescription = "Technology has revolutionized the way we live and work, providing us with new and innovative ways to solve problems, improve efficiency, and make our lives easier. From artificial intelligence to cloud computing, the rapid advancements in technology are changing the way we interact with the world around us. As we continue to push the boundaries of what is possible, we can expect new and exciting developments that will further shape the future of our world. Whether it's in healthcare, education, or any other industry, technology has the power to make a positive impact and create a better future for all of us.";
function About() {
    const [aboutItems, setAboutItems] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const items = await useFetch('/about-items');
                setAboutItems(items);
                setIsError(false);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
        })()
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <SectionHead sectionTitle={sectionTitle} sectionDescription={sectionDescription} />

                <Row gutter={[16, 16]}>
                    {
                        !isError &&
                        aboutItems.map(
                            (item, i) => {
                                return (
                                    <Col key={i} span={8}>
                                        <div className="p-4 md:w-full flex flex-col text-center items-center">
                                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0" dangerouslySetInnerHTML={{ __html: item.icon }}>

                                            </div>
                                            <div className="flex-grow">
                                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                                    {item.title}
                                                </h2>
                                                <p className="leading-relaxed text-base">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
            </div>
        </section>
    )
}

export default About;