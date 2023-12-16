/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@utils/i18n";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { useEffect, useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";
import { WagmiConfig, createConfig } from "wagmi";
import { polygonMumbai, polygon, mainnet } from "wagmi/chains";

const chains = [polygonMumbai, polygon, mainnet];

const config = createConfig(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  getDefaultConfig({
    // Required API Keys
    alchemyId: "MzUaa0A87yexjd8UKcHm8HIr1f4aghxT",
    walletConnectProjectId: "a8024e8262cb4e7102941a3577b5a5c0",

    // Required
    appName: "0x Next.js Demo App",

    // Optional
    appDescription: "A Next.js demo app for 0x Swap API and ConnectKit",
  })
);
// import { mainnet } from 'viem/chains'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
	<WagmiConfig config={config}>
              <ConnectKitProvider>
                <ThirdwebProvider
                  activeChain={"mumbai"}
                  supportedWallets={[
                    metamaskWallet(),
                    coinbaseWallet(),
                    walletConnect(),
                    localWallet(),
                    paperWallet({
                      paperClientId: "f3938e08-d7dc-4bf2-8244-e1cfc3401550",
                    }),
                    magicLink({
                      apiKey: "pk_live_14E13E3D656CB582",
                      type: "auth",
                      oauthOptions: {
                        providers: ["github"],
                      },
                    }),
                  ]}
                >
                  {<Component {...pageProps} />}
                 
                </ThirdwebProvider>
              </ConnectKitProvider>
            </WagmiConfig>
    </>
  );
}
