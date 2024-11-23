import React, { useEffect } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';

const KhaltiPayment = () => {
  useEffect(() => {
    document.title = "Khalti Payment Integration";
  }, []);

  const handleKhaltiPayment = () => {
    let config = {
      publicKey: "test_public_key_62e914f526674fcb9419e7e9f4a69c6c",
      productIdentity: "1234567890",
      productName: "Drogon",
      productUrl: "http://gameofthrones.com/buy/Dragons",
      eventHandler: {
        onSuccess(payload) {
          console.log("Payment Successful:", payload);
          // You can call your backend here to verify the payment
        },
        onError(error) {
          console.log("Payment Failed:", error);
        },
      },
      paymentPreference: [
        "MOBILE_BANKING",
        "KHALTI",
        "EBANKING",
        "CONNECT_IPS",
        "SCT",
      ],
    };

    // Initialize Khalti checkout
    let checkout = new KhaltiCheckout(config);

    // Show the Khalti payment modal
    checkout.show({ amount: 1000 }); // Amount is in paisa, so this is 10 NPR
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Khalti Payment Integration</h1>
      <button
        id="payment-button"
        onClick={handleKhaltiPayment}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Pay with Khalti
      </button>
    </div>
  );
};

export default KhaltiPayment;
