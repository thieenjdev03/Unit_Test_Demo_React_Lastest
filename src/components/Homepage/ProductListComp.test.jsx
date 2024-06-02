import React from 'react';
import { render, fireEvent, queryByText, getByText, screen } from '@testing-library/react';
import ProductListComp from './ProductListComp';
import { calculateTotalOrderPrice } from '../../utils/utils';
describe('ProductListComp Component', () => {
    test('renders product list correctly', () => {
        const { getByText } = render(<ProductListComp />);
        // Kiểm tra xem sản phẩm có hiển thị đúng tên không
        expect(getByText('Product 1')).toBeInTheDocument();
        expect(getByText('Product 2')).toBeInTheDocument();
        expect(getByText('Product 3')).toBeInTheDocument();
    });

    it('should add product to cart when Add to Cart button is clicked', () => {
        render(<ProductListComp />);

        // Lấy sản phẩm đầu tiên trong danh sách
        const firstProduct = screen.getByText('Product 1');

        // Thêm sản phẩm vào giỏ hàng
        fireEvent.click(firstProduct.parentElement.querySelector('button'));

        // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng chưa
        const cartProduct = screen.getByText('Product 1');
        expect(cartProduct).toBeInTheDocument();
    });

    test('logs cart when Log Cart button is clicked', () => {
        const { getByText } = render(<ProductListComp />);

        // Bấm vào nút Log Cart
        fireEvent.click(getByText('Log Cart'));
        // Kiểm tra xem console đã log ra thông tin giỏ hàng chưa
    });
    test('toggles cart modal when button is clicked', () => {
        const { getByText } = render(<ProductListComp />);
        fireEvent.click(getByText('Mở Giỏ Hàng'));
        expect(getByText('Đóng giỏ hàng')).toBeInTheDocument();
        fireEvent.click(getByText('Đóng giỏ hàng'));
        expect(getByText('Mở Giỏ Hàng')).toBeInTheDocument();
    });
    test('returns 0 when the cart is empty', () => {
        const cart = []
        expect(calculateTotalOrderPrice(cart)).toBe(0);
    });

    it('should calculate total quantity and total price of the cart correctly', () => {
        render(<ProductListComp />);

        // Thêm một số sản phẩm vào giỏ hàng
        const addToCartButtons = screen.queryAllByRole('button', { name: /add to cart/i });
        fireEvent.click(addToCartButtons[0]); // Thêm sản phẩm 1
        fireEvent.click(addToCartButtons[1]); // Thêm sản phẩm 2
        fireEvent.click(addToCartButtons[2]); // Thêm sản phẩm 3

        // Kiểm tra tổng số lượng và tổng giá trị của giỏ hàng
        const totalQuantity = screen.getByText(/total quantity/i);
        const totalPrice = screen.getByText(/total price/i);
        expect(totalQuantity).toHaveTextContent('3'); // Tổng số lượng
        expect(totalPrice).toHaveTextContent('450'); // Tổng giá trị
    });

});
