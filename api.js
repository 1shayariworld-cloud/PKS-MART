const PK_MART_API =
  "https://script.google.com/macros/s/AKfycbxqUngp4jsgZw5iyEYT-LkuApH-d0-4oPpfYRteQvfP8Ka7tsgGe8jnbNBKRhRWBCz8mw/exec";

async function pkMartAPI(action, data = {}) {
  try {
    const response = await fetch(PK_MART_API, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        action: action,
        ...data
      })
    });

    return await response.json();

  } catch (error) {
    console.error("PK MART API Error:", error);

    return {
      success: false,
      message: "Server connection failed"
    };
  }
}


// Customer Signup
async function registerCustomer(data) {
  return await pkMartAPI("signup", data);
}


// Customer Login
async function customerLogin(data) {
  return await pkMartAPI("login", data);
}


// Admin Login
async function loginAdmin(data) {
  return await pkMartAPI("adminLogin", data);
}


// Create Order
async function saveOrder(data) {
  return await pkMartAPI("createOrder", data);
}


// Get Customer Orders
async function loadOrders(userId) {
  return await pkMartAPI("getOrders", {
    userId: userId
  });
}


// Create Return
async function requestReturn(data) {
  return await pkMartAPI("createReturn", data);
}


// Add Review
async function submitReview(data) {
  return await pkMartAPI("addReview", data);
}


// Get Products
async function loadProducts() {
  return await pkMartAPI("getProducts");
}


// Add Product
async function saveProduct(data) {
  return await pkMartAPI("addProduct", data);
}


// Update Order Status
async function changeOrderStatus(data) {
  return await pkMartAPI("updateOrderStatus", data);
}


// Payment
async function savePayment(data) {
  return await pkMartAPI("updatePayment", data);
}


// Admin Dashboard
async function loadDashboard() {
  return await pkMartAPI("dashboard");
}


// Create Admin
async function saveAdmin(data) {
  return await pkMartAPI("createAdmin", data);
}


// Activity Log
async function saveActivity(data) {
  return await pkMartAPI("log", data);
  }
