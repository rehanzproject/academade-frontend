import React from "react";
import OrderDash from "../../molecules/OrderDash/OrderDash.molecule";
import IncomeDash from "../../molecules/IncomeDash/IncomeDash.molecul";
import ProductSoldDash from "../../molecules/ProductSold/ProductSoldDash.molecul";
import StudentProfileDash from "../../molecules/StudentProfileDash/StudentProfileDash.molecul";
import { convertToJuta } from "../../../utils/helper/helperMethod";

function HeaderProfile({ income, verifiedCheckouts, student }) {
  return (
    <div className="grid grid-cols-4">
      <OrderDash newOrder={verifiedCheckouts} />
      <IncomeDash newIncome={convertToJuta(income)} />
      <StudentProfileDash newStudent={student} />
      <ProductSoldDash newProductSold={verifiedCheckouts} />
    </div>
  );
}

export default HeaderProfile;
