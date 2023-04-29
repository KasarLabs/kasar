import React, { FC, useContext } from 'react';
import { ButtonPrimary } from '../s-components/Button';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { UserContext } from '../../context';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripePage = () => {
  const { checkout, client } = useContext(UserContext);
  const shippingAddress = checkout.shippingAddress;
  const item = checkout.lineItems[0];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, elements: any, stripe: any) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        list_items: checkout.lineItems,
        customer: { firstname: shippingAddress.firstName, lastname: shippingAddress.lastName, email: checkout.email },
        shipping: {
          name: item.title,
          street: shippingAddress.address1,
          town_city: shippingAddress.city,
          county_state: shippingAddress.province,
          postal_zip_code: shippingAddress.zip,
          country: shippingAddress.country,
        },
        //???
        fulfillment: { shipping_method: checkout.requiresShipping },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      console.log(orderData)
      // client.checkout.fetch(checkout.id).then((product) => {
      //   // console.log(product) 
      //   console.log(product)
      // });
      // const incomingOrder = await client.checkout.capture(checkout.id, orderData)
      // console.log(incomingOrder)
      // client.checkout.fetch(checkout.id)
      // onCaptureCheckout(checkout.id, orderData);
    }
  };

  // const shippingCost = options[0].price.raw;
  // const total = checkoutToken.live.subtotal.raw + shippingCost;
  const total = checkout.totalPrice.amount
  return (
    <>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ButtonPrimary>Back</ButtonPrimary>
                <ButtonPrimary type="submit" disabled={!stripe}>
                  Pay ${total}
                </ButtonPrimary>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default StripePage;
