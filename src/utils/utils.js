export function removeConfigFromObjects(obj) {
  const removeConfig = (data) => {
    if (Array.isArray(data)) {
      return data.map((item) => removeConfig(item));
    } else if (typeof data === "object" && data !== null) {
      return Object.keys(data).reduce((acc, key) => {
        if (key !== "config") {
          acc[key] = removeConfig(data[key]);
        }
        return acc;
      }, {});
    }
    return data;
  };

  return removeConfig(obj);
}

export const convertUserObjs = (data) => {
  let _data = JSON.stringify(data);
  let result = JSON.parse(_data);

  try {
    result.data.mss = result.data.mss.map((mssObj) => {
      if (Array.isArray(mssObj.business)) {
        mssObj.business = removeConfigFromObjects(mssObj.business);
      }
      if (mssObj.hasOwnProperty("config")) {
        delete mssObj.config;
      }
      return mssObj;
    });
    return result; // Return the modified result object
  } catch (error) {
    console.warn("error return data"); // Log a warning if an error occurs
    return result; // Return the original result object if there's an error
  }
};

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

// utils.js
export const isOnline = (Networkstatus) => {
  if (Networkstatus === "online") {
    return true;
  } else {
    return false;
  }
};

export const sumArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.reduce((total, num) => total + num, 0);
};

export function calculateTotalOrderPrice(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      total += order.price * order.quantity;
  }
  return total;
}

export function getTotalPrice(cart) {
  return cart.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
}
export function getTotalQuantity(cart) {
  return cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
}
