import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { fetchPostJSON } from "../utils/api-helpers";
import logo from "../public/logo.png";
import Link from "next/link";
import ProjectList from "../components/ProjectList";
import PaymentModal from "../components/PaymentModal";

const Home: NextPage = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [data, setData] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  // async function handleClick() {
  //   // setShouldFetch(true);
  //   // const { data, error } = useSWR(shouldFetch ? "/api/invoice" : null, fetchGetJSON);
  //   // const res = await fetchGetJSON("/api/invoice");
  //   const amount = 100.0;
  //   try {
  //     const stripe = await fetchPostJSON("/api/stripe_checkout", {
  //       amount,
  //     });
  //     const btcpay = await fetchPostJSON("/api/btcpay", {
  //       amount,
  //     });
  //     console.debug(stripe);
  //     setStripeUrl(stripe.url);
  //     setBtcPayUrl(btcpay.checkoutLink);
  //     console.debug(btcpay);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white py-8 px-16 flex items-center justify-between">
        <div className="space-y-4">
          <Link href="/" passHref>
            <Image alt="OpenSats logo" src={logo} width={132} height={20} />
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>Projects</li>
              <li>List Your Project</li>
              <li>How It Works</li>
              <li>About Us</li>
              <li>Sponsors</li>
            </ul>
          </nav>
        </div>

        <div className="space-x-2">
          <span>Developers: </span>
          <button>Register</button>
        </div>
      </header>
      <main>
        <section>
          <div className="bg-hero-bloom p-8 space-y-8">
            <h1 className="text-white">
              Support contributors to Bitcoin and other free and open source
              projects
            </h1>
            <button onClick={() => setModalOpen(true)}>
              Donate to the General Fund
            </button>
          </div>
        </section>
        <ProjectList />
        {/* <button onClick={handleClick}>Heyo</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {stripeUrl && <a href={stripeUrl}>Stripe Checkout</a>}
        {btcpayUrl && <a href={btcpayUrl}>BTCPay Checkout</a>}
        <p>testing 123</p> */}
      </main>

      <footer className="py-8 px-16  flex">
        <span>© Open Sats, 2022</span>
      </footer>
      <PaymentModal isOpen={modalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Home;
