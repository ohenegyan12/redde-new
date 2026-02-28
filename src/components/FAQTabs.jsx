import React, { useState } from 'react';
import './FAQTabs.css';

const FAQTabs = () => {
    const [activeTab, setActiveTab] = useState('General');

    const tabs = ['General', 'Developers', 'Merchants'];

    const faqData = {
        General: [
            {
                q: "What is Redde ?",
                a: "Redde is a system that allows merchants to receive payments for goods and services. You can use the Redde portal to sweep your money into your bank account. Transactions via Redde happen online via a web browser or our Redde app available for iOS, Windows. And Android."
            },
            {
                q: "What is it made for ?",
                a: "Redde provides a secure, easy and convenient method of making online payments for products and services. Online users are often subjected to hours of traffic just to purchase their goods and make payments. That is a thing of the past. With this service, any user will be able to comfortably make payments from their homes and receive payments for items ranging from household goods, food, clothing, etc."
            },
            {
                q: "How is Redde different from other payment platforms?",
                a: "Redde seeks to make payments as easy as pie by simplifying how money transactions are performed. Merchants get a deep insight about transactions and developers get to integrate APIs in simple steps."
            },
            {
                q: "Who can use Redde ?",
                a: "Redde is made for Merchants and Developers. Merchants can use it to recieve, send and track their monetary transactions for their businesses. Developers can integrate it into existing systems to accept payments by using our simple and detailed APIs."
            }
        ],
        Developers: [
            {
                q: "How can I access the Redde APIs ?",
                a: "You need to first create an account, then an apikey and appid will be given to you. You will use them to interact with both the checkout and REST API."
            },
            {
                q: "How is the Checkout different from the REST API ?",
                a: "The Redde checkout simplifies the way your customers pay money on your platforms, with this you only need to make a simple api call then a url is provided for a checkout page which will redirect a customer for him/her to make payments. With the REST API, the developer will have to use the available endpoints to design his/her application just as he/she wants it."
            },
            {
                q: "Do you support developers who want to integrate your APIs ?",
                a: "Yes we do. Visit the Developers corner to read through our documentations or download the pdf documents at our documents section. Also there are times that we blog on how you can work with our APIs giving you simple tricks that works well for you."
            },
            {
                q: "How many applications can I integrate with your APIs ?",
                a: "You can create many applications, even unlimited applications but each will have to be approved by Wigal to be used as a means of receiving funds."
            }
        ],
        Merchants: [
            {
                q: "How can I use the Redde Platform ?",
                a: "To use the Redde Payment Platform, you have to Create an account with us, so that you access a dashboard that will allow you recieve and send money."
            },
            {
                q: "Why do I have to sign up ?",
                a: "Your business details will be needed to verify your identity and also help us to assist and interact with you anytime you have challenges or would want to suggest system improvement."
            },
            {
                q: "How secured is this Redde payment platform ?",
                a: "Redde is very secured because we implement World Class Security Standards such as ISO/IEC 27001:2022, PCI DSS, etc. We enforce strict adherence to data protection and data security compliance."
            },
            {
                q: "How do I track my money and perform transactions ?",
                a: "When you login you are presented with a dashboard which displays the money you have received so far. You can sweep your confirmed money into your bank account easily."
            }
        ]
    };

    return (
        <section className="faq-tabs-section">
            <div className="faq-tabs-container">
                <div className="faq-tabs-header">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`faq-tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="faq-content">
                    {faqData[activeTab].map((item, index) => (
                        <div key={index} className="faq-item">
                            <h3 className="faq-question">{item.q}</h3>
                            <p className="faq-answer">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQTabs;
