import React from "react";
import moment from "moment";

export default function CustomerOrderListItem({
  name,
  state,
  date,
  units,
  price,
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };
    return date.toLocaleString("en-US", options);
  };

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
            <span class="text-secondary fs-7">SMM</span>
          </div>
        </div>
      </td>
      <td>
        <h6 class="mb-1">{formatDate(date)}</h6>
        <span class="text-secondary fs-7">United States</span>
      </td>
      <td>
        <h6 class="mb-1">{units}</h6>
      </td>
      <td>
        <span class={"badge  bsb-w-85 " + colorchange(state)}>{state}</span>
      </td>
      <td>Rs.{price}</td>
    </tr>
  );
}
