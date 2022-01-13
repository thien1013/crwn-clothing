import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KHX68D7rIRpOZkiLGn5UiswOO2AG4jKwLAixbRFmZy8KjS760pJsiXgDwGnLtbLLdmRuenCs8htqcw2p38lc0k200owIsM36o";
  const onToken = () => {
    alert("Payment success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
