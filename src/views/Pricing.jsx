import React, { useEffect, useState } from 'react';
import { Card, List } from 'antd';
import { useFetch } from '../utils/useFetch';
import SectionHead from '../components/commons/SectionHead';

const sectionTitle = "Choose a plan to fit your needs";
const Pricing = () => {
    const [pricingItems, setPricingItems] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const fetchedPricingItems = await useFetch('/pricings');
                setPricingItems(fetchedPricingItems);
                setIsError(false);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
        })()
    }, [])

    return (
        <section id='pricing' class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <SectionHead sectionTitle={sectionTitle} />

                <List
                    grid={{
                        gutter: 16,
                        column: 3,
                    }}
                    dataSource={pricingItems}
                    renderItem={(item, i) => {
                        return !isError && (
                            <List.Item>
                                <Card title={item.title} className='card-bg flex flex-col items-center justify-center !my-auto'>
                                    <p className={`flex items-center justify-center ${i === 1 ? "!text-[2.50rem]" : "text-4xl"} font-normal text-gray-600 mb-4`}>
                                        {
                                            item.content[0].price
                                        }
                                    </p>
                                    <p className={`flex items-center justify-center ${i === 1 ? "text-lg" : "text-base"} text-gray-600 mb-4`}>
                                        {
                                            item.content[0].space
                                        }
                                    </p>
                                    <p className={`flex items-center justify-center ${i === 1 ? "text-lg" : "text-base"} text-gray-600 mb-4`}>
                                        {
                                            item.content[0].user
                                        }
                                    </p>
                                    <p className={`flex items-center justify-center ${i === 1 ? "text-lg" : "text-base"} text-gray-600 mb-4`}>
                                        {
                                            item.content[0].support
                                        }
                                    </p>
                                    <p className={`flex items-center justify-center ${i === 1 ? "text-lg" : "text-base"} text-gray-600 mb-4`}>
                                        {
                                            item.content[0].backup
                                        }
                                    </p>
                                    <p className={`flex items-center justify-center ${i === 1 ? "text-lg" : "text-base"} text-gray-600 mb-4`}>
                                        {
                                            item.content[0].access
                                        }
                                    </p>
                                </Card>
                            </List.Item>
                        )
                    }}
                />
            </div>
        </section>
    );
}
export default Pricing;