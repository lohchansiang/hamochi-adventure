import * as React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const AppWithoutSSR = dynamic(() => import("@/App"), { ssr: false });

export default function Home() {
    
    return (
        <>
            <Head>
                <title>Hamochi Adventure</title>
                <meta name="description" content="Adventure game by hamochi." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <main className={`${styles.main} ${inter.className}`}>
                <div style={{
                    textAlign:'center'
                }}>

                
                    <div style={{padding:15}}>
                        <Link href="/demo">Page Demo</Link>
                    </div>
                    <div style={{padding:15}}>
                        <Link href="/adventure">Page Adventure</Link>
                    </div>
                    <div style={{padding:15}}>
                        <Link href="/learn">Page Learn</Link>
                    </div>
                </div>
            </main>
        </>
    );
}
