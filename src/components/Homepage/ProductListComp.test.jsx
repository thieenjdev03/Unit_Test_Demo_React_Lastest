/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, queryByText } from '@testing-library/react';
import ProductListComp from './ProductListComp';
import { calculateTotalPrice } from '../../utils/utils';
describe('ProductListComp Component', () => {
    test('renders product list correctly', () => {
        const { getByText } = render(<ProductListComp />);

        // Kiểm tra xem sản phẩm có hiển thị đúng tên không
        expect(getByText('Product 1')).toBeInTheDocument();
        expect(getByText('Product 2')).toBeInTheDocument();
        expect(getByText('Product 3')).toBeInTheDocument();
    });

    // test('adds product to cart when Add to Cart button is clicked', () => {
    //     const { getByText } = render(<ProductListComp />);
    //     fireEvent.click(queryByText('Add to Cart'));
    //     expect(getByText('Cart:')).toBeInTheDocument();
    //     expect(getByText('Product 1')).toBeInTheDocument();
    // });

    test('logs cart when Log Cart button is clicked', () => {
        const { getByText } = render(<ProductListComp />);

        // Bấm vào nút Log Cart
        fireEvent.click(getByText('Log Cart'));

        // Kiểm tra xem console đã log ra thông tin giỏ hàng chưa
        // Bạn cần một cách để kiểm tra console log, ví dụ: https://stackoverflow.com/questions/54534276/testing-console-log-in-jest
    });
    test('toggles cart modal when button is clicked', () => {
        const { getByText } = render(<ProductListComp />);
        fireEvent.click(getByText('Mở Giỏ Hàng'));
        expect(getByText('Đóng giỏ hàng')).toBeInTheDocument();
        fireEvent.click(getByText('Đóng giỏ hàng'));
        expect(getByText('Mở Giỏ Hàng')).toBeInTheDocument();
    });
    // test('returns 0 when the cart is empty', () => {
    //     const cart = [
    //         {
    //             "id": 1,
    //             "name": "Product 1",
    //             "price": 100,
    //             "rating": 4.5,
    //             "description": "Description of product 1",
    //             "quantity": 4
    //         },
    //         {
    //             "id": 2,
    //             "name": "Product 2",
    //             "price": 200,
    //             "rating": 4.2,
    //             "description": "Description of product 2",
    //             "quantity": 4
    //         },
    //         {
    //             "id": 3,
    //             "name": "Product 3",
    //             "price": 150,
    //             "rating": 4.8,
    //             "description": "Description of product 3",
    //             "quantity": 12
    //         }
    //     ];
    //     expect(calculateTotalPrice(cart)).toBe(0);
    // });

    // test('returns the correct total price when the cart has items', () => {
    //     const cart = [
    //         {
    //             "id": 1,
    //             "name": "Product 1",
    //             "price": 100,
    //             "rating": 4.5,
    //             "description": "Description of product 1",
    //             "quantity": 4
    //         },
    //         {
    //             "id": 2,
    //             "name": "Product 2",
    //             "price": 200,
    //             "rating": 4.2,
    //             "description": "Description of product 2",
    //             "quantity": 4
    //         },
    //         {
    //             "id": 3,
    //             "name": "Product 3",
    //             "price": 150,
    //             "rating": 4.8,
    //             "description": "Description of product 3",
    //             "quantity": 12
    //         }
    //     ];
    //     // Tính toán tổng giá tiền mong đợi (100*2 + 200*1 + 150*3 = 750)
    //     expect(calculateTotalPrice(cart)).toBe(750);
    // });

    // test('returns 0 when the cart is null or undefined', () => {
    //     const cart = null;
    //     expect(calculateTotalPrice(cart)).toBe(0);
    // });
});
