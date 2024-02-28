import React, { useContext, useState } from 'react'
import SectionHead from '../components/commons/SectionHead';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setContact } from '../features/slices/contactSlice';
import { AlertContext } from '../contexts/AlertContext';

const { TextArea } = Input;

const sectionTitle = "Get in Touch";
function Contact() {
    const contact = useSelector((state) => state.contact);
    const { name, email, telephone, subject, message } = useSelector((state) => state.contact);
    const dispatch = useDispatch();

    function onInputChange(e) {
        dispatch(setContact({
            ...contact, [e.target.name]: e.target.value
        }))
    }

    const { showAlert } = useContext(AlertContext);

    const handleSubmitContact = (e) => {
        const stringifiedContact = JSON.stringify(contact);
        if (
            name.length < 3
            ||
            !email.includes("@")
            ||
            telephone.length < 11
            ||
            (subject.length < 5 || subject.length > 30)
        ) {
            showAlert(`Invalid input`, `warning`);
        } else {
            localStorage.setItem("contact", contact);
            dispatch(
                setContact(
                    {
                        name: "",
                        email: "",
                        telephone: "",
                        subject: "",
                        message: ""
                    }
                )
            )
            showAlert(`Thank you for your submission. Your response has saved successfully to us!`, `success`);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: adds smooth scrolling behavior
        });

    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <SectionHead sectionTitle={sectionTitle} />

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    placeholder='Name'
                                    value={name}
                                    onChange={onInputChange}
                                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={onInputChange}
                                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="telephone"
                            rules={[{ required: true, message: 'Please input your telephone!' }]}
                        >
                            <div className="relative">
                                <input
                                    id="telephone"
                                    name="telephone"
                                    placeholder='Telephone'
                                    value={telephone}
                                    onChange={onInputChange}
                                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="subject"
                            rules={[{ required: true, message: 'Please input your subject!' }]}
                        >
                            <div className="relative">
                                <input
                                    id="subject"
                                    name="subject"
                                    placeholder='Subject'
                                    value={subject}
                                    onChange={onInputChange}
                                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="message"
                            rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder='Message'
                                    value={message}
                                    onChange={onInputChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-sm outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className='inline-block'>
                            <Button type="primary" htmlType="submit" className='primary-btn -ml-4' onClick={handleSubmitContact}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Contact
