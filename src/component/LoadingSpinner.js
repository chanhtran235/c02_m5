import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner({ message = 'Đang tải...' }) {
    return (
        <div className="d-flex align-items-center gap-2 my-3">
            <Spinner animation="border" role="status" size="sm" />
            <span>{message}</span>
        </div>
    );
}