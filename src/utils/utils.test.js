<<<<<<< HEAD
import { divide, isOnline, sumArray, calculateTotalPrice } from "./utils";
=======
import { divide, isOnline, sumArray, calculateTotalOrderPrice, getTotalPrice, getTotalQuantity } from "./utils";
>>>>>>> d7878d90ffb9d26f206692e27018a7e37793668f
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
<<<<<<< HEAD
    const order = {
      items: [
        { price: 200000, quantity: 2 },
        { price: 300000, quantity: 1 },
        { price: 400000, quantity: 1 },
      ],
    };

    const totalPrice = calculateTotalPrice(order);

    expect(totalPrice).toBe(1100000); // Total price should be 1100000 (200000*2 + 300000*1 + 400000*1)
=======
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
>>>>>>> d7878d90ffb9d26f206692e27018a7e37793668f
  });

  it("should handle empty order items", () => {
    const order = { items: [] };

<<<<<<< HEAD
    const totalPrice = calculateTotalPrice(order);
=======
    const totalPrice = calculateTotalOrderPrice(order);
>>>>>>> d7878d90ffb9d26f206692e27018a7e37793668f

    expect(totalPrice).toBe(0); // Total price should be 0 for an empty order
  });

<<<<<<< HEAD
  it("should handle invalid order data", () => {
    const order = {}; // Invalid order data

    // We expect calculateTotalPrice to throw an error when order data is invalid
    expect(() => {
      calculateTotalPrice(order);
    }).toThrow("Invalid order data");
  });

  it("should handle invalid item data", () => {
    const order = {
      items: [
        { price: 200000, quantity: 2 },
        { price: "invalid", quantity: 1 }, // Invalid item data
        { price: 400000, quantity: 1 },
      ],
    };

    // We expect calculateTotalPrice to throw an error when item data is invalid
    expect(() => {
      calculateTotalPrice(order);
    }).toThrow("Invalid item data");
  });
=======
>>>>>>> d7878d90ffb9d26f206692e27018a7e37793668f
});
