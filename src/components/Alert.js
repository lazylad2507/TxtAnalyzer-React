import React from 'react';

export default function Alert(props) {
    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     const lower = toUpperCase(0) + lower.slice(1);
    // }

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div style={{ height: '3.125rem' }}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            }
        </div >
    )
}


