import React from "react";
import OrderStateEditor from "../OrderStateEditor/OrderStateEditor";

export default function SellerOrderListItem({
  name,
  orderId,
  productId,
  customerName,
  phone_No,
  state,
  PurchaseDateTime,
}) {
  const colorchange = (s) => {
    if (s === "pending") {
      return "bg-warning-subtle border border-warning text-warning";
    } else if (s === "delivered") {
      return "bg-success-subtle border border-success text-success-emphasis";
    } else if (s === "cancelled") {
      return "bg-danger-subtle border border-danger text-danger";
    }
  };

  return (
    <tr className="clickable-row" data-href="">
      <td>
        <div class="d-flex align-items-center">
          <div>
            <h6 class="m-0">{name}</h6>
            <span class="text-secondary fs-7">{orderId}</span>
          </div>
        </div>
      </td>
      <td>
        <h6 class="mb-1">{customerName}</h6>
        <span class="text-secondary fs-7">{phone_No}</span>
      </td>
      <td>
        <h6 class="mb-1">{PurchaseDateTime}</h6>
      </td>
      <td>
        <span class={"badge  bsb-w-85 " + colorchange(state)}>{state}</span>
      </td>
      <td>
        <OrderStateEditor initialState={state} orderId={orderId} />
      </td>
    </tr>
  );
}
