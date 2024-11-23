import React from "react";

const EsewaPayment = () => {
  const handleEsewaPayment = () => {
    const params = {
      amt: 1000, // Total amount to pay
      psc: 120, // Service charge
      pdc: 0, // Delivery charge
      txAmt: 0, // Tax amount
      tAmt: 1120, // Total amount including all charges
      pid: "unique-product-id", // Unique product ID
      scd: "EPAYTEST", // Merchant code for test, replace with actual merchant code for production
      su: "http://localhost:3000/success", // Success URL (URL to redirect to after payment success)
      fu: "http://localhost:3000/failure", // Failure URL (URL to redirect to after payment failure)
    };

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://uat.esewa.com.np/epay/main"; // Use https://esewa.com.np/epay/main in production

    // Dynamically add form fields
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = params[key];
        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>eSewa Payment Integration</h1>
      <button
        onClick={handleEsewaPayment}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Pay with eSewa
      </button>
    </div>
  );
};

export default EsewaPayment;
