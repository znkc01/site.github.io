import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import{useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import vector from '../assets/Vector.png'

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={250} height={250} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{device.name}</div>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={vector}/>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;