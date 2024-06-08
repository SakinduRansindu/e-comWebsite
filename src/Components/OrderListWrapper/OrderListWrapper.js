import React from "react";
import SellerOrderListItem from "./SellerOrderListItem";
import CustomerOrderListItem from "./CustomerOrderListItem";
import Alert from "../Alert/Alert";
import { AuthData } from "../AuthWrapper/AuthWrapper";

export default function OrderListWrapper({ data }) {
  const { user, CheckSessionErrors } = AuthData();

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

  if (user.role === "seller" && data.length > 0) {
    return (
      <section class="py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="card widget-card border-dark shadow-sm">
              <div class="card-body p-4">
                <h5 class="card-title widget-card-title mb-4">Orders</h5>
                <div class="table-responsive">
                  <table class="table table-hover table-borderless bsb-table-xl text-nowrap align-middle m-0">
                    <thead>
                      <tr>
                        <th>Item/Order Id</th>
                        <th>Name/tel</th>
                        <th>Date/time</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((order) => {
                        return (
                          <SellerOrderListItem
                            orderId={order.PurchaseId}
                            name={order.Product.DisplayName}
                            productId={order.Product.ProductId}
                            customerName={
                              order.User.FirstName + " " + order.User.LastName
                            }
                            phone_No={order.User.Phone_No}
                            PurchaseDateTime={formatDate(
                              order.PurchaseDateTime
                            )}
                            state={order.state}
                            date={order.date}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (user.role === "customer" && data.length > 0) {
    return (
      <section class="py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="card widget-card border-dark shadow-sm">
              <div class="card-body p-4">
                <h5 class="card-title widget-card-title mb-4">My Orders</h5>
                <div class="table-responsive">
                  <table class="table table-hover table-borderless bsb-table-xl text-nowrap align-middle m-0">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Date/time</th>
                        <th>Units</th>
                        <th>Status</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((order) => {
                        return (
                          <CustomerOrderListItem
                            name={order.Product.DisplayName}
                            price={order.TotalPrice}
                            units={order.Units}
                            state={order.state}
                            date={order.PurchaseDateTime}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (data.length === 0) {
    return (
      <div className="my-5">
        <Alert
          title={"Info:"}
          message={"No orders yet :)"}
          type={"alert-info"}
        ></Alert>
      </div>
    );
  } else {
    if (!user.role) {
      CheckSessionErrors(false);
    }
    return (
      <div className="my-5">
        <Alert title={"Error:"} message={"user role not found :("}></Alert>
      </div>
    );
  }
}
