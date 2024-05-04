import { Divider } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
const items = [1, 1, 1, 1];

const Cart = () => {
  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item) => (
            <CartItem />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">주문서 상세</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>음식 가격</p>
                <p>14,000</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
