import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        subHeading="please process"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl text-red-500">Taka oh taka tui uri uria ....</h2>

      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
