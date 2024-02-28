import React, { useEffect, useState } from 'react'
import SectionHead from '../components/commons/SectionHead';
import { Card, Col, Row } from 'antd';
import { useFetch } from '../utils/useFetch';
const { Meta } = Card;

const sectionTitle = "Key Features and Benefits";
function Features() {
    const [features, setFeatures] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const fetchedFeatures = await useFetch('/features');
                setFeatures(fetchedFeatures);
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

                <Row gutter={[16, 16]}>
                    {
                        !isError &&
                        features.map(
                            (feature, i) => {
                                return (
                                    <Col key={i} span={8} >
                                        <Card
                                            style={{
                                                width: "100%",
                                                cursor: "pointer"
                                            }}
                                            cover={
                                                <img
                                                    alt="example"
                                                    src={feature.image}
                                                />
                                            }
                                        >
                                            <Meta
                                                title={feature.title}
                                            />
                                        </Card>
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

export default Features;