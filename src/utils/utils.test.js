import { divide, isOnline, sumArray, calculateTotalOrderPrice, getTotalPrice, getTotalQuantity } from "./utils";
test("divide function throws error when dividing by zero", () => {
  expect(() => {
    divide(5, 0);
  }).toThrow("Cannot divide by zero");
});

test("isOnline function returns true when Networkstatus is online", () => {
  expect(isOnline("online")).toBe(true);
});

test("sumArray function returns the correct sum of elements in an array", () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  expect(sumArray([-1, 2, -3, 4, -5])).toBe(-3);
});

test("sumArray function throws error for non-array input", () => {
  expect(() => {
    sumArray("not an array");
  }).toThrow("Input must be an array");
});

describe("calculateTotalPrice function", () => {
  it("should calculate total price correctly for a valid order", () => {
    const order = [
      {
          "id": 1,
          "name": "Product 1",
          "price": 100,
          "rating": 4.5,
          "description": "Description of product 1",
          "quantity": 1
      },
      {
          "id": 2,
          "name": "Product 2",
          "price": 200,
          "rating": 4.2,
          "description": "Description of product 2",
          "quantity": 1
      },
      {
          "id": 3,
          "name": "Product 3",
          "price": 150,
          "rating": 4.8,
          "description": "Description of product 3",
          "quantity": 1
      }
  ]

    const totalPrice = calculateTotalOrderPrice(order);

    expect(totalPrice).toBe(450);
  });

  it("should handle empty order items", () => {
    const order = { items: [] };

    const totalPrice = calculateTotalOrderPrice(order);

    expect(totalPrice).toBe(0); // Total price should be 0 for an empty order
  });

});
