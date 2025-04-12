
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReferralNetwork from "@/components/ReferralNetwork";

const ReferralsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-foreground">Referral Network</h1>
            <p className="text-muted-foreground">
              Map your connections and find referral opportunities at your target companies
            </p>
          </div>
          
          <ReferralNetwork />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReferralsPage;

