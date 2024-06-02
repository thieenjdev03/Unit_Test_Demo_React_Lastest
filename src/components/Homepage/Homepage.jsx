/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { removeConfigFromObjects } from "../../utils/utils"
import Register from "../Register/Register"
import Button from "@mui/material/Button/Button"
import CheckboxListSecondary from './CheckboxListSecondary';
import ModalComponent from './ModalComponent';
import "../../App.css"
import ProductListComp from './ProductListComp';
import SearchComponent from './SearchComponent';
import { DoctorProvider } from '../../Context/DoctorProvider';
function Homepage() {
    const [cart, setCart] = useState([])
    const [userList, setUserList] = useState([]);
    const [showUsers, setShowUsers] = useState(true);
    const [checkedUsers, setCheckedUsers] = useState([]);
    const products = [
        { id: 1, name: 'Product 1', price: 100, rating: 4.5, description: 'Description of product 1' },
        { id: 2, name: 'Product 2', price: 200, rating: 4.2, description: 'Description of product 2' },
        { id: 3, name: 'Product 3', price: 150, rating: 4.8, description: 'Description of product 3' }
    ];
    const handleShowUsersToggle = () => {
        setShowUsers(prevState => !prevState);
    };

    const handleCheckedUsersChange = (newCheckedUsers) => {
        setCheckedUsers(newCheckedUsers);
    };


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUserList(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    const filteredUserList = showUsers ? userList : userList.filter(user => !checkedUsers.includes(user.id));


    return (
        <DoctorProvider>
            <div className='homepageSection w-full m-4 flex flex-col gap-20 flex-c'>
                <ModalComponent />
                <div className="flex-r m-10 gap-7 flex flex-r">
                    <div className="p-10 w-1/3 border_solid_black_1px">
                        <Register></Register>
                    </div>
                    <div className=".w-50 h-full  border_solid_black_1px">
                        <div className="buttonSection flex justify-center items-center w-1/4">
                            <Button variant="contained" color="primary" onClick={handleShowUsersToggle} disableElevation>
                                {showUsers ? "Hide Selected Users" : "Show All Users"}
                            </Button>
                        </div>
                        <div className="mt_10">
                            <p>Total users: {userList.length}</p>
                        </div>
                        <CheckboxListSecondary
                            userList={filteredUserList}
                            onCheckedUsersChange={handleCheckedUsersChange}
                        />
                    </div>
                    <div className="w-50 h-full p-10 border_solid_black_1px ">
                        <SearchComponent></SearchComponent>
                    </div>
                </div>
                <h1>Product List</h1>
                <ProductListComp></ProductListComp>
            </div >
        </DoctorProvider>

    );
}

export default Homepage;
