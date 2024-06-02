import React from 'react';
import axios from 'axios';
import { Form } from '@formio/react';

const apiUrl = "https://nextsp-server.id.vn/api/auth/register";

const formJSON = {
    "display": "form",
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    },
    "components": [
        {
            "label": "fullName",
            "applyMaskOn": "change",
            "tableView": true,
            "key": "fullName",
            "type": "textfield",
            "input": true
        },
        {
            "label": "Email",
            "applyMaskOn": "change",
            "tableView": true,
            "validate": {
                "required": true
            },
            "key": "email",
            "type": "email",
            "input": true
        },
        {
            "label": "accountName",
            "applyMaskOn": "change",
            "tableView": true,
            "key": "accountName",
            "type": "textfield",
            "input": true
        },
        {
            "label": "password",
            "applyMaskOn": "change",
            "tableView": true,
            "key": "password",
            "type": "textfield",
            "input": true
        },
        {
            "label": "confirmPassword",
            "applyMaskOn": "change",
            "tableView": true,
            "key": "confirmPassword",
            "type": "textfield",
            "input": true
        },
        {
            "label": "Submit",
            "showValidations": false,
            "tableView": false,
            "key": "submit",
            "type": "button",
            "input": true,
            "saveOnEnter": false
        }
    ]
}

function RegisterV2() {
    const handleSubmit = (submission) => {
        axios.post(apiUrl, submission.data)
            .then(response => {
                console.log("Thanh Cong", response.data);
            })
            .catch(error => {
                console.error("Error occurred:", error);
            });
    };
    return (
        <div className="registerForm2">
        <h1 className="registerFrom_heading text-lg">
        Register V2
            </h1>
            <Form form={formJSON} onSubmit={handleSubmit}/>
        </div>
    );
}

export default RegisterV2;
