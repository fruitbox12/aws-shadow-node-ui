import { BasciConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import { Machine, assign } from 'xstate';
import { Header } from "components/Header";
import { Splash } from "components/Splash";

import Head from "next/head";
import { useState } from "react";
import StepForm from "components/Wizard";
const Home: NextPage = () => {

    return (
       
        <div className="wizard">  
            <Header></Header>
            <Head>
                <title>Create Wagmi Dapp</title>
                <meta name="description" content="Generated by create next wagmi dapp" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>           <StepForm></StepForm>
</div>
        </div>

    );
};

export default Home;
