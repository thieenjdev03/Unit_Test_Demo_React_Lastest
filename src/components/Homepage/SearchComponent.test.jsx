// SearchComponent.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import SearchComponent from './SearchComponent';

describe('SearchComponent', () => {
    beforeEach(() => {
        vi.useFakeTimers(); // Kích hoạt giả lập timer trước mỗi test
    });

    afterEach(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers(); // Tắt giả lập timer sau mỗi test
    });


    //Wrong Logic Test
    it('calls debounce function after typing in the search field', async () => {
        // Render the component
        render(<SearchComponent />);

        // Type in the search field
        const searchField = screen.getByPlaceholderText('Search by patient name');
        fireEvent.change(searchField, { target: { value: 'test' } });

        // Fast-forward time
        vi.advanceTimersByTime(1000);

        // Check if the filtered cases list is updated
        await waitFor(() => {
            const cases = screen.queryAllByText(/Patient/i);
            expect(cases.length).toBeGreaterThan(3);
        });
    });

    it('displays CaseFilterComponent when filter button is clicked', () => {
        // Render SearchComponent
        render(<SearchComponent />);

        // Không có CaseFilterComponent xuất hiện khi ban đầu
        expect(screen.queryByText('Filter By:')).toBeNull();

        // Tìm và bấm nút filter
        const filterButton = screen.getByTestId('btn-filter');
        fireEvent.click(filterButton);

        // Kiểm tra xem CaseFilterComponent đã xuất hiện
        expect(screen.getByText('Filter By:')).toBeInTheDocument();
    });
});
