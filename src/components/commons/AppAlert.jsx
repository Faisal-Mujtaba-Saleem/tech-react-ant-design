import React, { useContext } from 'react'
import { AlertContext } from '../../contexts/AlertContext';
import { Space, Alert } from 'antd';

function AppAlert() {
    const { alert } = useContext(AlertContext);

    if (alert) {
        return (
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                    margin: "1rem 0"
                }}
            >
                <Alert message={alert.message} type={alert.type} showIcon />
            </Space>
        )
    }
}

export default AppAlert;
