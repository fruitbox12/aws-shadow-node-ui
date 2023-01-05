import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "styles/globals.css";
import "styles/rainbowkit.css";
import { WagmiConfig } from "wagmi";
import type { NextPage } from "next";
import { Header } from "components/Header";

import Head from "next/head";
// pages/_app.js

// If loading a variable font, you don't need to specify the font weight

function MyApp({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (

        <WagmiConfig client={wagmiClient}>

            <RainbowKitProvider chains={chains}>
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>

    );
}

export default MyApp;
