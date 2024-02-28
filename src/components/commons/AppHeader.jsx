import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Item from 'antd/es/list/Item';

const routes = [
    {
        key: '1',
        label: "Home",
        path: "/"
    },
    {
        key: '2',
        label: "About",
        path: "/about"
    },
    {
        key: '3',
        label: "Features",
        path: "/features"
    },
    {
        key: '5',
        label: "FAQ",
        path: "/faqs"
    },
    {
        key: '6',
        label: "Pricing",
        path: "/pricing"
    },
    {
        key: '7',
        label: "Contact",
        path: "/contact"
    },
];
function AppHeader() {
    const location = useLocation();
    return (
        <>
            <Link to={"/"} className="logo">
                <i className="fa-solid fa-bolt-lightning logo-icon"></i>
                <span className="uppercase font-medium text-xl p-1.5 text-[#333] tracking-wide leading-relaxed">
                    tech
                </span>
            </Link>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={
                    routes.map(
                        (route) => {
                            if (route.path === location.pathname) {
                                return route.key;
                            }
                        }
                    )
                }
                className='menu'
            >
                {routes.map(route => (
                    <Menu.Item key={route.key}>
                        <Link to={route.path}>{route.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    )
}

export default AppHeader;