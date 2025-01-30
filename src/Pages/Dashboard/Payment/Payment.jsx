import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
export default function Payment() {
  return (
    <>
      <SectionTitle subHeading={"Please pay to eat"} heading={"Payment"} />
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </>
  );
}
