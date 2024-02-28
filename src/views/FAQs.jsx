import React, { useEffect, useState } from 'react'
import SectionHead from '../components/commons/SectionHead';
import { Collapse } from 'antd';
import { useFetch } from '../utils/useFetch';
import QuickSupport from '../components/FAQs/QuickSupport';

const sectionTitle = "Frequently Asked Questions";
function FAQs() {
    const [FAQItems, setFAQItems] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const fetchedFAQItems = await useFetch('/FAQs');
                setFAQItems(fetchedFAQItems);
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
                <SectionHead sectionTitle={sectionTitle} />

                <Collapse defaultActiveKey={['1']}>
                    {
                        !isError &&
                        FAQItems.map(
                            (faq, i, array) => {
                                return (
                                    <Collapse.Panel header={faq.header} key={i + 1}>
                                        <p>{faq.para}</p>
                                    </Collapse.Panel>
                                )
                            }
                        )
                    }
                </Collapse>

                <QuickSupport />
            </div>
        </section>
    )
}

export default FAQs;
