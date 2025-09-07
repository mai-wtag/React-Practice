import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";

const productList = [
  { category: "Fruits", name: "Apple", price: "$1", inStock: false },
  { category: "Fruits", name: "dragonfruit", price: "$2", inStock: true },
  { category: "Fruits", name: "Passionfruit", price: "$3", inStock: false },
  { category: "Vegetables", name: "Spinach", price: "$1", inStock: true },
  { category: "Vegetables", name: "Pumpkin", price: "$3", inStock: true },
  { category: "Vegetables", name: "Peas", price: "$5", inStock: false },
];

function ProductCategoryRow({}) {
  return <span>Fruits</span>;
}

function SearchBar() {
  return (
    <div>
      <input placeholder="Search..."></input>
      <div>
        <input type="checkbox"></input>
        <span>Only show products in stock</span>
      </div>
    </div>
  );
}

function ProductRow() {
  return (
    <div>
      <span>Apple </span>
      <span>$1</span>
    </div>
  );
}

function ProductTable() {
  return (
    <div>
      <div>
        <span>Name</span>
        <span>Price</span>
      </div>
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
    </div>
  );
}
