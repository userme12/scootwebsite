import React from "react";
import { Hero, Order } from "../../components/pages/home-components";
import { Advantage } from "../../components/pages/home-components/advantage";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Order />
        <Advantage h2={"Easy to use riding telemetry"} h4={"The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."} imgSrc={"/images/easy.png"}/>
        <Advantage h2={"Coming to a city near you"} h4={"Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."} imgSrc={"/images/coming.png"} styles={'flex-row-reverse'}/>
        <Advantage h2={"Zero hassle payments"} h4={"Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."} imgSrc={"/images/zero.png"}/>
      </div>
    </>
  );
};
