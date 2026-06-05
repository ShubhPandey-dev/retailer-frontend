export const dashboardStats = [
  { label: "Today Sales", value: "Rs 82,400", tone: "bg-blue-600" },
  { label: "Today Orders", value: "126", tone: "bg-emerald-600" },
  { label: "Low Stock Items", value: "9", tone: "bg-amber-500" },
  { label: "Pending Deliveries", value: "23", tone: "bg-rose-500" },
];

// export const products = [
//   { id: "P-101", name: "Basmati Rice 5kg", category: "Grocery", price: "Rs 610", stock: 48 },
//   { id: "P-102", name: "Sunflower Oil 1L", category: "Grocery", price: "Rs 142", stock: 15 },
//   { id: "P-103", name: "Herbal Shampoo", category: "Personal Care", price: "Rs 289", stock: 6 },
//   { id: "P-104", name: "LED Bulb 12W", category: "Home Utility", price: "Rs 95", stock: 0 },
// ];

// export const orders = [
//   { id: "R-5041", customer: "Aman Verma", items: 4, amount: "Rs 1,980", status: "Delivered", date: "Feb 17, 2026" },
//   { id: "R-5042", customer: "Pooja Singh", items: 2, amount: "Rs 820", status: "Packed", date: "Feb 18, 2026" },
//   { id: "R-5043", customer: "Neha Jain", items: 5, amount: "Rs 2,410", status: "Out for Delivery", date: "Feb 18, 2026" },
//   { id: "R-5044", customer: "Rohit Mehta", items: 1, amount: "Rs 289", status: "Cancelled", date: "Feb 19, 2026" },
// ];

export const customers = [
  { id: "C-301", name: "Aman Verma", phone: "+91 9999990011", city: "Noida", orders: 16 },
  { id: "C-302", name: "Pooja Singh", phone: "+91 9999990075", city: "Ghaziabad", orders: 10 },
  { id: "C-303", name: "Neha Jain", phone: "+91 9999990044", city: "Delhi", orders: 22 },
  { id: "C-304", name: "Rohit Mehta", phone: "+91 9999990032", city: "Faridabad", orders: 7 },
];

export const payments = [
  { id: "TX-881", mode: "UPI", amount: "Rs 1,980", status: "Success", date: "Feb 17, 2026" },
  { id: "TX-882", mode: "Cash", amount: "Rs 820", status: "Collected", date: "Feb 18, 2026" },
  { id: "TX-883", mode: "Card", amount: "Rs 2,410", status: "Success", date: "Feb 18, 2026" },
  { id: "TX-884", mode: "UPI", amount: "Rs 289", status: "Refunded", date: "Feb 19, 2026" },
];
