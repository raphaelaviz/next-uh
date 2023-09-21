'use client'

import { footerLinks_EN } from "../lib/constants";
import FooterColumn from "./FooterColumn";
import qrcode from '../assets/qr-code.svg';
import small_logo from '../assets/small-logo.svg';
import appstore from '../assets/appstore.svg';
import playstore from '../assets/playstore.svg';
import Image from "next/image";

const Footer = () => { 
    
    return (
        <section className="footer_main">
            <div className="footer_container">
                <div className="footer_sections">

                    <div className="flex flex-col sm:gap-3 text-sm">
                        <Image src={small_logo} alt="Uphold Logo" />
                    </div>

                    {footerLinks_EN.map((linkGroup, index) => (
                        <FooterColumn key={index} title={linkGroup.title} links={linkGroup.links} />
                    ))}
                    
                    <div className="flex flex-col gap-3 text-sm min-w-max">
                        <div className="flex gap-8 flex-center sm:pl-12">
                            <a
                                href="https://apps.apple.com/us/app/uphold-buy-btc-eth-and-260/id1101145849"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={appstore} alt="App Store" />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.uphold.wallet&hl=en_US&pli=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={playstore} alt="Play Store" />
                            </a>
                        </div>

                        <select
                            className="border-2 border-opacity-50 rounded-md p-2"
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish Global</option>
                        </select>
                    </div>
                </div>

                <div className="lower_footer">
                    <div className="flex-col mx-4">
                        <p>Uphold Europe Limited, Reg No. 09281410, Registered Office: Interchange Triangle, Chalk Farm Road, London, England, NW1 8AB</p>
                        <div className="sm:flex gap-5">
                            <p>© Uphold. Inc. 2018. All Rights Reserved.</p>
                            <a href="/">Agreements</a>
                            <a href="/">Privacy & Data Policy</a>
                            <a href="/">Cookie Policy</a>
                        </div>
                    </div>
                    <div className="flex-center mt-5 sm:mt-0">
                        <Image src={qrcode} alt="QR Code" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
