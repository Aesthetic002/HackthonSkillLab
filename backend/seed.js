const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const products = [
  {
    title: "Premium Wireless Over-Ear Headphones, Noise Canceling, 40h Battery",
    price: 299.99,
    image: "https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SY450_.jpg",
    description: "Experience world-class noise cancellation and high-fidelity audio with these premium wireless headphones. Features 40 hours of battery life, quick charging, and ultra-comfortable memory foam ear cushions."
  },
  {
    title: "Smartwatch Series Pro - Health Tracker, GPS, Water Resistant",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/61RsJTiPL3L._AC_SY450_.jpg",
    description: "Stay connected and track your health goals with the Smartwatch Series Pro. Features built-in GPS, heart rate monitoring, sleep tracking, and water resistance up to 50 meters."
  },
  {
    title: "CloudStride Men's Running Shoes - Lightweight & Breathable",
    price: 89.50,
    image: "https://m.media-amazon.com/images/I/71JI6i8vmqL._AC_SY575_.jpg",
    description: "Engineered for comfort and performance, these running shoes feature a breathable mesh upper, responsive cushioning, and a durable rubber outsole for every mile."
  },
  {
    title: "ZenBook 14 Ultra-Slim Laptop, 14\" FHD, Intel Core i7, 16GB RAM, 512GB SSD",
    price: 1049.00,
    image: "https://m.media-amazon.com/images/I/71GBSp4goKL._AC_SY450_.jpg",
    description: "Powerful performance meets portability. The ZenBook 14 features a stunning FHD display, the latest Intel Core i7 processor, 16GB RAM, and fast 512GB SSD for seamless multitasking."
  },
  {
    title: "Lumina Alpha 7R Mirrorless Camera - 42.4MP Full-Frame Sensor",
    price: 2499.00,
    image: "https://m.media-amazon.com/images/I/71jmFQxMvGL._AC_SY450_.jpg",
    description: "Capture stunning detail with the 42.4MP full-frame sensor and high-speed autofocus. Perfect for professionals and enthusiasts who demand the best image quality."
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected ✅");
    await Product.deleteMany({});
    console.log("Cleared existing products");
    await Product.insertMany(products);
    console.log("Seeded 5 products ✅");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Seed error:", err);
    process.exit(1);
  });
