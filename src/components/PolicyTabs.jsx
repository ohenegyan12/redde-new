import React, { useState } from 'react';
import './PolicyTabs.css';

const PolicyTabs = () => {
    const [activeTab, setActiveTab] = useState('privacy');

    const policies = {
        privacy: {
            sections: [
                {
                    title: "Information We Collect And How We Use It",
                    content: (
                        <>
                            <p>Our primary purpose in collecting personal information is to provide you with a safe, smooth, efficient, and customised experience. We may use your personal information to:</p>
                            <ul>
                                <li>Provide the services and customer support you request.</li>
                                <li>Transactions and send notices about your transactions</li>
                                <li>Resolve disputes, collect fees, and troubleshoot problems.</li>
                                <li>Prevent potentially prohibited or illegal activities, and enforce our Terms of Service.</li>
                                <li>Customise, measure, and improve our services and the content and layout of our website.</li>
                                <li>Send you targeted marketing, service update notices, and promotional offers based on your communication preferences;</li>
                                <li>Compare information for accuracy and verify it with third parties.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "Registration Information",
                    content: (
                        <p>When you sign up for a Redde Account, we ask for your personal information so that we can provide you with the service. The information we require to register for the service includes your name, other names, gender, birthday, mobile number, address, citizenship, and email address. For businesses or non-profit organisations, we also require you to provide your website address, email business category, business name, business type, industry, phone number, location address, and a government-issued identification number (TIN or VAT for Ghana-based businesses). This information allows us to process payments and protect users from fraud. In some cases, we may also ask you to send us additional information or to answer additional questions to help verify your information. The information we collect is stored in association with your Redde Account</p>
                    )
                },
                {
                    title: "Information Obtained From Third Parties",
                    content: (
                        <p>In order to protect you from fraud or other misconduct, we may obtain information about you from third parties to verify the information you provide. For example, we may use bank authorization and fraud screening services to verify that your business location address matches the information that you provided to us.</p>
                    )
                },
                {
                    title: "Transaction Information",
                    content: (
                        <p>When you use Redde to conduct a transaction, we collect information about each transaction, including but not limited to the transaction amount, a description provided by the seller of the goods or services being purchased, and the names of the seller and buyer.</p>
                    )
                },
                {
                    title: "Information About Your Use Of The Service",
                    content: (
                        <p>In order to protect you from fraud, phishing, and other misconduct, we may collect information about your interaction with the service to help validate your identity or detect potentially fraudulent conduct. For example, in some circumstances we may try to determine service usage patterns (such as how quickly you type) so that we can try to detect and prevent unauthorized attempts to access your account (such as automated hacking attacks, or the use of stolen usernames or passwords). Any such information we collect will only be used to detect and prevent fraud or other misconduct, unless you explicitly grant us permission to use it in another manner.</p>
                    )
                },
                {
                    title: "Redde Cookies",
                    content: (
                        <>
                            <p>When you access your Redde Account or a pay LIVE webpage, we send one or more cookies - a small file containing a string of characters - to your computer that uniquely identifies your browser. We use cookies to improve the quality of our service by storing user preferences and tracking user trends. We send a 'session cookie' to your computer when you log in to your account. This type of cookie helps us to recognize you if you visit multiple pages on our site during the same session, so that we don’t need to ask you for your password on each page. Once you log out or close your browser, this cookie expires and no longer has any effect.</p>
                            <p>Most browsers are initially set up to accept cookies, but you can reset your browser to refuse all cookies or to indicate when a cookie is being sent. We encode our cookies so that only we can interpret the information stored in them. You are free to decline our cookies if your browser permits, but doing so may interfere with your use of our website.</p>
                        </>
                    )
                },
                {
                    title: "Log Information",
                    content: (
                        <p>When you access Redde Webpages, our servers automatically record information that your browser sends to us. These server logs may include information such as your web request, Internet Protocol address, browser type, browser language, the date and time of your request and one or more cookies that may uniquely identify your browser.</p>
                    )
                },
                {
                    title: "User Information",
                    content: (
                        <p>When you send email or other communication to us, we may retain those communications in order to process your inquiries, respond to your requests and improve our services.</p>
                    )
                },
                {
                    title: "Links",
                    content: (
                        <>
                            <p>We may present links in a format that enables us to keep track of whether these links have been followed. We use this information to improve the quality of our search technology, and customized content. In addition to the above, we use the information we collect to:</p>
                            <ul>
                                <li>Provide our products and services to you, including the display of customized content;</li>
                                <li>Perform auditing, research and analysis in order to maintain, protect and improve our services;</li>
                                <li>Ensure the technical functioning of our platform; and</li>
                                <li>Develop new services. We process personal information on our servers in Ghana and the United States of America. We may process personal information to provide our own services.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "Information Sharing",
                    content: (
                        <>
                            <p>We will not sell or rent your personal information to companies or individuals outside of Wigal Vision. If you are making a purchase with Redde, we will not share any of the personal information you provided us during registration of your account; except in the limited circumstances described below. In addition, we will only share your personal information with other companies or individuals outside of Wigal Vision in the following circumstances: As necessary to process your Redde & banking transactions and maintain your account. As with any financial institution, if you process a transaction through our service, we need to share some information (for example, your business and account number) with our partner banks and the Bank of Ghana. Some sellers may require that their buyers provide a contact information (for example, a telephone number) in order to process a transaction.</p>
                            <p>In those cases, the merchant will specifically request that information from you from their website before or after your Redde transaction. We will not share your telephone number with the merchant, and where necessary, we will inform and request your permission online before you complete your transaction. As a standard policy to protect our users, Redde does not allow or approve of merchants who request for user’s Redde details on their website. Any such merchant has not been certified by Redde and users are advised to report immediately and not to transact with the merchant. You may be given a choice on a seller-by-seller basis whether you’d like to receive promotional emails from the seller. If you decide later that you don't want to receive promotional emails from a seller, you will need to contact the seller directly. To detect, prevent, or otherwise address fraud, security or technical issues.</p>
                            <p>We require opt-in consent for the sharing of any sensitive personal information.</p>
                            <p>We provide such information to our subsidiaries, affiliated companies or other trusted businesses or persons for the purpose of processing personal information on our behalf. We require that these parties agree to process such information based on our instructions and in compliance with this Policy and any other appropriate confidentiality and security measures. We have a good faith belief that access, use, preservation or disclosure of such information is reasonably necessary to:</p>
                            <ul>
                                <li>Satisfy any applicable law, regulation, legal process or enforceable governmental request,</li>
                                <li>Enforce applicable Terms of Service including investigation of potential violations thereof</li>
                                <li>Detect, prevent, or otherwise address fraud, security or technical issues, or</li>
                                <li>Protect against imminent harm to the rights, property or safety of Wigal Vision, its users or the Public as required or permitted by law.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "Information Security",
                    content: (
                        <p>We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical and technical security measures to guard against unauthorized access to systems where we store personal data. For example, your email address will always be stored in an encrypted form (except when you provide it to us in a communication outside of our web page or mobile app interface). The security of your account also depends on keeping your account password confidential, and you should not share your account name or password with anyone. If you do share your account information with a third party, they will have access to your account and your personal information.</p>
                    )
                },
                {
                    title: "Data Integrity",
                    content: (
                        <p>Redde processes personal information only for the purposes for which it was collected and in accordance with this Privacy Policy or any applicable service-specific privacy notice. We review our data collection, storage and processing practices to ensure that we only collect, store and process the personal information needed to provide or improve our services or as otherwise permitted under this Policy. We take reasonable steps to ensure that the personal information we process is accurate, complete, and current, but we depend on our users to update or correct their personal information whenever necessary.</p>
                    )
                },
                {
                    title: "Accessing And Updating Personal Information",
                    content: (
                        <p>You can review and update your payment information by logging in to your Redde Account and going to the 'Account Settings' page, where you can update your personal information (for example, change in address or phone number). You can also view all your previous transaction history on the 'Money Story' page. You can disable or close your Redde account by contacting us. If you do so, your Redde account will no longer be able to conduct transactions. However, in order to meet our reporting and auditing obligations, and to detect, deter, and prevent fraud or other misconduct on our systems, your account information will be retained in our systems. If you disable Redde, your personally identifiable information will not be used by Wigal Vision or shared with third parties except for these purposes. We may delete these records over time if permitted or required by law. Disabling your Redde account does not close or cancel your Redde Account. This Privacy Policy continues to apply to the personal information we maintain after you disable or close or cancel your Redde Account.</p>
                    )
                },
                {
                    title: "Enforcement",
                    content: (
                        <p>Redde regularly reviews its compliance with this Privacy Policy. Please feel free to direct any questions or concerns regarding this Privacy Policy or Redde’s treatment of personal information by contacting us through this web site www.Redde.com.gh or by writing to us at Privacy Matters C/o Wigal Vision Ltd. PMB CT 498 Cantonments Accra, Ghana. When we receive formal written complaints at this address, it is Redde’s policy to contact the complaining user regarding his or her concerns. We will cooperate with the appropriate regulatory authorities, including that cannot be resolved between Wigal Vision and an individual, business or non-profit.</p>
                    )
                },
                {
                    title: "Changes To This Policy",
                    content: (
                        <p>Please note that this Privacy Policy may change from time to time. We will not reduce your rights under this Policy without your explicit consent. We will email you and post on our Web Pages any Policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including notification in your account interface or SMS notification). Each version of this Policy will be identified at the top of the page by its effective date, and we will also keep prior versions of this Privacy Policy in an archive for your review. If you have any questions about this Policy, please feel free to contact us through our website or write to us at Wigal Vision.</p>
                    )
                }
            ]
        },
        terms: {
            sections: [
                {
                    title: "Welcome to Redde",
                    content: (
                        <p>Thank you for using our payment services which are governed by these Terms of Use. Please read them carefully.</p>
                    )
                },
                {
                    title: "1. About Redde",
                    content: (
                        <p>1.1. Redde is a trading name for a product of Wigal Vision Limited, a company incorporated under the laws of Ghana with registration number CS467452014.</p>
                    )
                },
                {
                    title: "2. Scope of these Terms of Use",
                    content: (
                        <>
                            <p>2.1. These Terms of Use govern the opening, use and closure of your Redde Account and other related payment services as referred to herein. Together with our Privacy Policy, and any other terms and conditions referred to therein, they constitute the legal relationship between you and us. For the use of additional services you may have to accept additional terms and conditions as notified to you when you are ordering or using such services. You are advised to print or download and keep a copy of these Terms of Use for future reference. You can always view the current Terms of Use on our Website.</p>
                            <p>2.2. Depending on the type of Redde Account you have, additional terms and conditions may apply and will be communicated to you at the appropriate time.</p>
                        </>
                    )
                },
                {
                    title: "3. Your Redde Account",
                    content: (
                        <p>3.1. As a merchant, your Redde account allows you to receive payments for your goods and services. You can use the Redde portal to periodically sweep your money into your bank account, Mobile money account, or any other account that is permitted under the laws of Ghana.</p>
                    )
                },
                {
                    title: "4. Opening Your Redde Account",
                    content: (
                        <>
                            <p>4.1. In order to use our payment services you must first create a Redde Account by registering your details on our Website or through our Mobile App. As part of the signup process you will need to accept these Terms of Use and our Privacy Policy and you must have legal capacity to accept the same. If you order additional services, you may be asked to accept additional terms and conditions.</p>
                            <p>4.2. You must be 18 years or older to use our services and by creating a Redde Account you declare that you are 18 years or older. This does not apply to products for which we set a different age limit. We may require at any time that you provide evidence of your age.</p>
                            <p>4.3. You may only create one Redde Account per email address and phone number unless we explicitly approve otherwise.</p>
                            <p>4.4. You fully agree that all information you provide during the signup process or any time thereafter must be accurate and truthful.</p>
                        </>
                    )
                },
                {
                    title: "5. Maintaining Your Redde Account",
                    content: (
                        <>
                            <p>5.1. You must ensure that the information recorded on your Redde Account is always accurate and up to date and we shall not be liable for any loss arising out of your failure to do so. We may ask you at any time to confirm the accuracy of your information or to provide documents or other evidence.</p>
                            <p>5.2. We may contact you by e-mail, phone number or both with information or notices regarding your Redde Account. It is your responsibility to regularly check the proper functioning of your email account or other methods of communication that you have registered with your Redde Account and to retrieve and read messages relating to your Redde Account promptly. We shall not be liable for any loss arising out of your failure to do so.</p>
                            <p>5.3. Payments received are displayed in your online transactions history. Each transaction is given a unique transaction ID and shown in the transaction history. You should quote this transaction ID when communicating with us about a particular transaction. You should check your Redde Account transaction history regularly. You should report any irregularities or clarify any questions you have as soon as possible by contacting Customer Service.</p>
                        </>
                    )
                },
                {
                    title: "6. Keeping Your Redde Account Safe",
                    content: (
                        <>
                            <p>6.1. You must take all reasonable steps to keep your Redde Account password and security details safe at all times and never disclose it to anyone. Our personnel will never ask you to provide your password or security details to us or to a third party. Any message you receive or website you visit that asks for your password, other than the Redde Website, should be reported to us. If you are in doubt whether a website is genuine, you should contact Customer Service. It is advisable to change your password regularly (at least every three (3) to six (6) months) in order to reduce the risk of a security breach in relation to your Redde Account. We also advise you not to choose a password that is easily guessed from information someone might know or gather about you or a password that has a meaning. You must never allow anyone to access your Redde Account or watch you accessing your Redde Account.</p>
                            <p>6.2. If you have any indication or suspicion of your Redde Account, login details, password or other security feature being lost, stolen, misappropriated, used without authorisation or otherwise compromised, you are advised to change your password. You must contact Customer Service without undue delay on becoming aware of any loss, theft, misappropriation or unauthorised use of your Redde Account, login details, password or other security features. Any undue delay in notifying us may not only affect the security of your Redde Account but may result in you being liable for any losses as a result. If you suspect that your Redde Account was accessed by someone else, you should also contact the police and report the incident.</p>
                            <p>6.3. We may suspend your Redde Account or otherwise restrict its functionality on reasonable grounds relating to the security of the Redde Account or any of its security features or if we reasonably suspect that an unauthorised or fraudulent use of your Redde Account has occurred or that any of its security features have been compromised. We will notify you of any suspension or restriction and of the reasons for such suspension or restriction in advance or, where we are unable to do so, immediately after the suspension or restriction has been imposed, unless notifying you would be unlawful or compromise our reasonable security interests. We will lift the suspension and/or the restriction as soon as practicable after the reasons for the suspension and/or restriction have ceased to exist.</p>
                            <p>6.4. You must take all reasonable care to ensure that your e-mail account(s) are secure and only accessed by you, as your e-mail address may be used to reset passwords or to communicate with you about the security of your Redde Account. In case any of the e-mail addresses registered with your Redde Accounts are compromised, you should without undue delay after becoming aware of this contact Customer Service and also contact your e-mail service provider.</p>
                            <p>6.5. Irrespective of whether you are using a public, a shared or your own computer to access your Redde Account, you must always ensure that your login details are not stored by the browser or cached or otherwise recorded. You should never use any functionality that allows login details or passwords to be stored by the computer you are using.</p>
                            <p>6.6. Additional products or services you use may have additional security requirements and you must familiarise yourself with those as notified to you.</p>
                        </>
                    )
                },
                {
                    title: "7. Closing Your Redde Account",
                    content: (
                        <p>You may close your Redde Account at any time by contacting Customer Service. We reserve the right to carry out any necessary money laundering, terrorism financing, fraud or other illegal activity checks before authorising closure of your Redde Account.</p>
                    )
                },
                {
                    title: "8. Receiving Funds",
                    content: (
                        <>
                            <p>8.1. If you receive funds into your bank Account, we will send you a notification e-mail, phone number or both. You should regularly reconcile incoming payments with your own records.</p>
                            <p>8.2. You should be aware that receipt of funds to your bank Account does not necessarily mean that these transactions cannot be reversed. We reserve the right to reverse a payment in case the payer or the payer’s bank or payment service provider has charged back or otherwise reversed.</p>
                            <p>8.3. It is strictly forbidden to receive payments as consideration for the sale or supply of illegal product as stipulated by the laws of the land.</p>
                            <p>8.4. It is strictly forbidden to receive payments from persons or entities offering illegal gambling services, including (but not limited to) illegal sports, scamming, betting, casino games and poker games. We may suspend or terminate your Redde Account at any time or refuse to execute or reverse a transaction if we believe that you directly or indirectly use or have used your Redde Account for or in connection with illegal gambling transactions.</p>
                            <p>8.5. It is strictly forbidden to use your Redde Account for any illegal purposes including but not limited to fraud and money laundering. We will report any suspicious activity to the relevant law enforcement agency. You are prohibited from using your Redde Account in an attempt to abuse, exploit or circumvent the usage restrictions imposed by a merchant on the services it provides.</p>
                            <p>8.6. We reserve the right to reverse the transaction; and/or close or suspend your Redde Account; and/or report the transaction to the relevant law enforcement agency; and/or claim damages from you; and charge you an administration fee in case we apply any of the above.</p>
                            <p>8.7. It is your and not our responsibility to ensure that you only receive payments from persons or entities for the sale or supply of goods and services that you may provide in compliance with any applicable laws and regulations. The mere fact that you accepts payments through us is not an indication of the legality of the supply or provision of your goods and services.</p>
                        </>
                    )
                },
                {
                    title: "9. Your Data",
                    content: (
                        <p>The processing of your data is governed by our Privacy Policy which can be found on our Website. By accepting these Terms of Use, you also agree to the terms of our Privacy Policy, Anti-Money Laundering Policy and every other policy we display on our website. You should print and keep a copy of the Privacy Policy together with these Terms of Use.</p>
                    )
                },
                {
                    title: "10. Liability",
                    content: (
                        <>
                            <p>In case of an unauthorised payment or a payment that was incorrectly executed due to an error by us, we shall at your request immediately refund the payment amount including all fee deducted therefrom. This shall not apply:</p>
                            <ul>
                                <li>where the unauthorised payment arises from your failure to keep the personalised security features of your Redde Account safe in accordance with section 6 in which case you shall remain liable for the action;</li>
                                <li>if you fail to notify us without undue delay of any loss of your password or other event that could reasonably be expected to have compromised the security of your Redde Account after you have gained knowledge of such event in which case you shall remain liable for losses incurred up to your notification to us;</li>
                                <li>if the transaction was unauthorised but you have compromised the security of your Redde Account with intent or gross negligence in which case you shall be solely liable for all losses; or</li>
                                <li>If you fail to dispute and bring the unauthorised or incorrectly executed transaction to our attention within 2 weeks from the date of the transaction.</li>
                            </ul>
                            <p>Subject to the foregoing, we shall not be liable for any disruption or impairment of our service or for disruptions or impairments of intermediary services on which we rely for the performance of our obligations hereunder, provided that such disruption or impairment is due to abnormal and unforeseeable circumstances beyond our reasonable control or the control of the intermediary affected.</p>
                            <p>We shall not be liable for any indirect or consequential losses including but not limited to loss of profit, loss of business and loss of reputation. We shall not be liable for any losses arising from our compliance with legal and regulatory requirements.</p>
                            <p>Nothing in these Terms of Use shall operate to exclude liability for death or personal injury due to negligence or for fraud or fraudulent misrepresentation or for any statutory liability that cannot be excluded or amended by agreement between the parties.</p>
                            <p>Our obligation under these Terms of Use is limited to providing you with an electronic money account and related payment services and does not make any statement in relation to or endorsement of the quality, safety or legality of any goods or services provided by a Redde customer, merchant or intermediary.</p>
                            <p>We shall not be liable for the assessment or payment of any taxes, duties or other charges that arise from the underlying commercial transaction between you and another Redde customer.</p>
                            <p>Indemnification/re-imbursement. You agree to defend, reimburse or compensate us and hold us and our other companies in our corporate group harmless from any claim, demand, expenses or costs (including legal fees, fines or penalties) that we incur or suffer due to or arising out of your or your agents' breach of these Terms of Use, breach of any applicable law or regulation and/or use of the services. This provision shall survive termination of the relationship between you and us.</p>
                        </>
                    )
                },
                {
                    title: "11. Termination and suspension",
                    content: (
                        <>
                            <p>11.1. We may terminate your Redde Account or any payment service associated with it by giving you two weeks’ prior notice. You may terminate your Redde Account with us at any time.</p>
                            <p>11.2. Together with a termination notice or at any time thereafter we may give you reasonable instructions on how to proceed.</p>
                            <p>11.3. We may suspend your Redde Account at any time if:</p>
                            <ul>
                                <li>We reasonably believe that your Redde Account has been compromised or for other security reasons; or</li>
                                <li>We reasonably suspect your Redde Account to have been used or is being used without your authorisation or fraudulently; and we shall notify you either prior to the suspension or, if prior notification is not possible under the circumstances, promptly after the suspension unless we are prohibited by law to notify you.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "12. Changes to these Terms of Use",
                    content: (
                        <>
                            <p>12.1. These Terms of Use and any additional terms and conditions that may apply are subject to change. Changes will be implemented with prior notice from us under the procedure set forth in this section.</p>
                            <p>12.2. We shall give notice to you of any proposed change by sending an e-mail to the primary email address registered with your Redde Account.</p>
                            <p>12.3. If you object to the changes, they will not apply to you, however, any such objection shall constitute a notice by you to terminate and close your Redde Account. Your Redde Account will be closed in accordance with the provisions of section 6 above.</p>
                        </>
                    )
                },
                {
                    title: "13. How We Communicate",
                    content: (
                        <>
                            <p>13.1. We usually communicate to you via e-mail, phone or both. For this purpose you must at all times maintain at least one valid e-mail address and phone number in your Redde Account profile. You are required to check for incoming messages regularly and frequently. E-mails may contain links to further communication on our Website. Any communication or notice sent by e-mail will be deemed received by you.</p>
                            <p>13.2. Where legislation requires us to provide information to you on a durable medium, we will either send you an e-mail (with or without attachment) or send you a notification pointing you to information on our Website in a way that enables you to retain the information in print format or other format that can be retained by you permanently for future reference. You are required to keep copies of all communications we send or make available to you.</p>
                            <p>13.3. You can request a copy of the current Terms of Use or any other contractual document relevant to you by contacting Customer Service or visiting the website.</p>
                            <p>13.4. We will never send you any e-mails with executable files attached or with links to any executable files. If you receive any e-mail with such attachments, you should delete the message without clicking on the attachment. If you are unsure whether a communication is originating from us, please contact Customer Service.</p>
                            <p>13.5. We will communicate to you in English and will always accept communications made to us in English. For non-standard communication, we reserve the right to communicate with you in English.</p>
                            <p>13.6. Apart from communicating via e-mail, we may contact you via letter or telephone, where appropriate. If you use any mobile services, we may communicate with you via SMS. Any communication or notice sent by post will be deemed received ten days from the date of posting for Ghana post or within 14 days of posting for international post. Any communication or notice sent by SMS will be deemed received the same day.</p>
                            <p>13.7. You may contact us at any time by sending a message to Customer Service via the “E-Mail Support” facility on our Website.</p>
                        </>
                    )
                },
                {
                    title: "14. Complaints",
                    content: (
                        <>
                            <p>Any complaints about us or the services we provide should be addressed to us in the first instance by contacting Customer Service. You should clearly indicate that you are wishing to make a complaint to us. This helps us to distinguish a complaint from a mere query. We send you a complaint acknowledgement by post or by e-mail.</p>
                            <p>We endeavour to provide you with an answer or resolution to your complaint within reasonable timeframes. Should this not be possible due to unforeseen circumstances or lack of information, we will contact you.</p>
                        </>
                    )
                },
                {
                    title: "15. Miscellaneous",
                    content: (
                        <>
                            <p>15.1. No person other than you shall have any rights under these Terms of Use and the provisions of the Payment Systems Act 2003.</p>
                            <p>15.2. Your Redde Account is personal to you and you may not assign any rights under the Terms of Use to any third party.</p>
                            <p>15.3. Your Redde Account is operated in Ghana and these Terms of Use shall be governed by and interpreted in accordance with the laws of Ghana. Any dispute under these Terms of Use or otherwise in connection with your Redde Account shall be brought exclusively in the courts of Ghana except where prohibited by Ghana law.</p>
                            <p>15.4. If any part of these Terms of Use is found by a court of competent jurisdiction to be invalid, unlawful or unenforceable then such part shall be severed from the remainder of the Terms of Use, which shall continue to be valid and enforceable to the fullest extent permitted by law.</p>
                        </>
                    )
                },
                {
                    title: "Definitions",
                    content: (
                        <>
                            <p>Various terms in these Terms of Use have a defined meaning as follows:</p>
                            <ul>
                                <li><strong>“Business Day”</strong> means any day other than a Saturday or a Sunday or a public or bank holiday in Ghana;</li>
                                <li><strong>“Customer Service”</strong> means our customer service, which you can reach by sending a message through the “Contact Us” or email facility on the Website.</li>
                                <li><strong>“Fees”</strong> shall mean the charges payable by you to us for using our services;</li>
                                <li><strong>“Privacy Policy”</strong> is the Redde’s policy governing the processing of personal data which is available on the Website, as may be amended from time to time;</li>
                                <li><strong>“Redde Account”</strong> shall mean the money account you open and maintain through the Redde Website and Mobile App;</li>
                                <li><strong>“Redde Website”</strong> or <strong>“Website”</strong> shall mean the website available at www.reddeonline.com;</li>
                                <li><strong>“Terms of Use”</strong>, shall mean these Redde Account Terms of Use, published on the Website and a may be amended from time;</li>
                                <li><strong>“We”, “us”, “our”</strong> shall mean Redde;</li>
                                <li><strong>“You”, “your”</strong> shall mean you, the natural person or legal entity in whose name the Redde Account is opened and maintained;</li>
                            </ul>
                        </>
                    )
                }
            ]
        },
        aml: {
            sections: [
                {
                    title: "Preamble",
                    content: (
                        <p>It is the policy of the Wigal Vision to comply with both the letter and spirit of all statutes and regulations relating to money laundering specifically and financial crime in general, as well as provide its staff with the correct training to enable them identify suspicious transactions and act in accordance with the regulations so as to protect themselves and the Organization.</p>
                    )
                },
                {
                    title: "1.0 Purpose And Overview Of The Policy and Manual",
                    content: (
                        <>
                            <p>This Policy and Manual has been formulated by the Organization to reinforce the broad AML/CFT legal requirements and more importantly, to provide best-practice guidance to the Organization’s staff on how to implement the relevant legal provisions.</p>
                            <p>Money laundering (ML) has been defined as the process whereby criminals attempt to or conceal the illegal origin of illegitimate ownership of property and assets that are the fruits or proceeds of their criminal activities. Financing of Terrorism (FT) is a reverse form of money laundering and may involve both legitimate and illegitimate money.</p>
                            <p>This Manual covers the following key areas:</p>
                            <ul>
                                <li>Design of AML/CFT policy;</li>
                                <li>Compliance Officer’s designation and duties;</li>
                                <li>The need to co-operate with the competent/supervisory authorities;</li>
                                <li>Customer due diligence;</li>
                                <li>Monitoring and responding to suspicious transactions;</li>
                                <li>Reporting requirements;</li>
                                <li>Record keeping;</li>
                                <li>AML/CFT employee training programme;</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "2.1 Institutional Policy Framework",
                    content: (
                        <>
                            <p>Wigal Vision (Wigal) is committed to complying with AML/CFT obligations in order to actively prevent any transaction that otherwise facilitates criminal activity or terrorism. The Organization will implement internal controls to deter criminals from using its facilities.</p>
                            <p>Internal control measures include:</p>
                            <ul>
                                <li>Programmes to assess the risks related to money laundering and terrorist financing;</li>
                                <li>Formulation of control policy concerned with issues of timing, degree of control, and responsibilities;</li>
                                <li>Monitoring programmes for unusually large transactions;</li>
                                <li>Enhanced due diligence for politically exposed persons (PEPs) and high-risk jurisdictions;</li>
                                <li>Employee training on customer due diligence and recognizing suspicious transactions.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "3.0 AML Reporting Officer’s Duties",
                    content: (
                        <>
                            <p>The Organization shall appoint an Anti-Money Laundering Reporting Officer (AMLRO). Duties include:</p>
                            <ul>
                                <li>Developing an AML/CFT Compliance Programme;</li>
                                <li>Receiving and vetting suspicious transaction reports from staff;</li>
                                <li>Filing suspicious transaction reports with the competent/supervisory authority;</li>
                                <li>Coordinating staff training in AML/CFT awareness;</li>
                                <li>Serving as a liaison with relevant competent/supervisory authorities.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "4.0 Co-operation With Competent Authorities",
                    content: (
                        <>
                            <p>The Organization will comply promptly with requests to provide information to the competent authority or other relevant government agency. Procedures include:</p>
                            <ul>
                                <li>Immediately searching institutional records for individuals, entities, or organizations named in the request;</li>
                                <li>Reporting promptly to the requesting authority the outcome of the search;</li>
                                <li>Protecting the security and confidentiality of any such requests.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "5.0 Know Your Customer (KYC)",
                    content: (
                        <>
                            <p>“Know Your Customer” (KYC) requirement entails obtaining full particulars of the identity of a customer and having adequate knowledge of the purpose for which the customer desires to establish a business relationship.</p>
                            <p><strong>Customer Acceptance Policy:</strong> The Organization will not establish a business relationship until all relevant counterparties have been identified and the nature of the business ascertained.</p>
                            <p><strong>Requirement To Obtain Identification Evidence:</strong> The Organization shall be satisfied that a prospective customer is who he/she claims to be. This includes verifying the identity of both the customer and any agent/trustee acting on their behalf.</p>
                        </>
                    )
                },
                {
                    title: "6.0 Definition Of Identity",
                    content: (
                        <>
                            <p>Identity is defined as a set of attributes, including names, date of birth, physical features, and residential address. Identity must be verified whenever a business relationship is to be established or a one-off transaction is undertaken.</p>
                            <p>Appropriate steps should be taken to verify:</p>
                            <ul>
                                <li>The named account holder;</li>
                                <li>Any principal beneficial owner who is not the account holder;</li>
                                <li>The principal controller(s) of an account;</li>
                                <li>Directors and all signatories to a corporate account.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "7.0 Timeframe and Schemes",
                    content: (
                        <>
                            <p><strong>Investments in the Names of Third Parties:</strong> When an investor sets up an account for a third party (e.g., spouse or child), the person funding the subscription must be identified in addition to the legal owner.</p>
                            <p><strong>Timeframe:</strong> Staff may start processing account opening upon request but must take diligent steps to verify identity and must not transfer or pay out funds to a third party until verification is met.</p>
                        </>
                    )
                },
                {
                    title: "8.0 Identification Procedures",
                    content: (
                        <>
                            <p>Officers should satisfy themselves that they are dealing with a real person or organization by obtaining adequate identification evidence. Since no single form of identification is fully guaranteed, the process should be cumulative.</p>
                            <p><strong>Establishing Identity:</strong> Applicants must provide full name, permanent home address, telephone/email, date of birth, nationality, and occupation. This must be backed by an unexpired official document bearing a photograph (e.g., passport, driver's license).</p>
                        </>
                    )
                },
                {
                    title: "10.0 Politically-Exposed Persons (PEPs)",
                    content: (
                        <>
                            <p>PEPs are persons who occupy or have occupied high public office. Business relationships with PEPs expose the Organization to significant reputational and legal risks. Due diligence includes:</p>
                            <ul>
                                <li>Gathering information and checking credible databases to establish if a customer is a PEP;</li>
                                <li>Determining the source of funds before acceptance;</li>
                                <li>Requiring approval by the Compliance Officer and Senior Management;</li>
                                <li>Carrying out on-going monitoring of accounts.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "11.0 Documentary Evidence Checklist",
                    content: (
                        <>
                            <p>Checks should be undertake by cross-validation of documentary evidence. Acceptable documents include:</p>
                            <ul>
                                <li>Current international passport;</li>
                                <li>Residence permit;</li>
                                <li>Current driver’s licence;</li>
                                <li>National identity card;</li>
                                <li>Recent utility bill;</li>
                                <li>Tax clearance certificate.</li>
                            </ul>
                            <p>For non-face-to-face identification, extra care must be exercised by supplementing evidence with additional checks.</p>
                        </>
                    )
                },
                {
                    title: "12.0 Trusts, Nominees and Fiduciaries",
                    content: (
                        <>
                            <p>Trusts and quasi-corporate entities can be attractive for criminal activity. Identification procedures must reflect perceived risk. Officials should verify the identity of trustees, settlers, controllers, and beneficiaries.</p>
                            <p><strong>Executorships:</strong> Documentation must verify the identity of executor(s)/administrator(s). Reports must be made if there is suspicion about the origin of assets in an estate.</p>
                        </>
                    )
                },
                {
                    title: "13.0 Corporate Entities",
                    content: (
                        <>
                            <p>Branch officials should obtain beneficial ownership information. For corporate entities, required info includes:</p>
                            <ul>
                                <li>Registered corporate name and incorporation number;</li>
                                <li>Principal place of business and mailing address;</li>
                                <li>Names of Directors and Secretary;</li>
                                <li>Certificate of Incorporation and Regulations;</li>
                                <li>Board resolution to open an account and identify signatories.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "14.2 Correspondent Banking",
                    content: (
                        <p>Redde will not enter into or continue correspondent banking relationships with banks in jurisdictions identified as high risk or non-co-operative. Relationships may be terminated if banks do not respond adequately to due diligence queries.</p>
                    )
                },
                {
                    title: "16.0 Monitoring Suspicious Transactions",
                    content: (
                        <>
                            <p>A suspicious transaction is one which is unusual because of its size, volume, pattern, or otherwise suggestive of known money laundering methods.</p>
                            <p>The Compliance Officer should file a <strong>Suspicious Transaction Report (STR)</strong> when a transaction:</p>
                            <ul>
                                <li>Involves funds from illegal activity;</li>
                                <li>Is designed to evade reporting requirements;</li>
                                <li>Has no apparent lawful purpose;</li>
                                <li>Facilitates criminal activity.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "20.0 Record Keeping",
                    content: (
                        <p>Record keeping is critical to AML/CFT effectiveness. AML-related records (ID docs, transaction records, STRs) must be maintained properly and kept for not less than six (6) years.</p>
                    )
                },
                {
                    title: "21.0 Employee Education and Training",
                    content: (
                        <>
                            <p>Comprehensive training programmes are designed to equip staff with skills for AML/CFT tasks. Training includes:</p>
                            <ul>
                                <li>AML regulations and offences;</li>
                                <li>KYC/CDD requirements;</li>
                                <li>Recognizing "Red Flags";</li>
                                <li>Reporting requirements and record keeping.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "23.0 Tipping Off",
                    content: (
                        <p>Directors, officers, and employees are prohibited from disclosing the fact that an STR or related info is being reported to the FIC. Tipping off a customer could compromise investigation efforts.</p>
                    )
                },
                {
                    title: "24.0 Protection & Sanctions",
                    content: (
                        <>
                            <p>Staff reporting violations in good faith will be protected from victimization and civil/criminal liabilities. Conversely, staff involved in violations will face administrative sanctions and potential criminal prosecution under the AML Act.</p>
                            <p><strong>Penalty:</strong> Contravention of Section 1 or 2 of the AML Act 2008 (Act 749) carries a fine of up to 5,000 penalty units or imprisonment for up to 10 years.</p>
                        </>
                    )
                }
            ]
        },
        retention: {
            sections: [
                {
                    title: "1. Purpose",
                    content: (
                        <p>The purpose of this Policy is to ensure that necessary records and documents are adequately protected and maintained and to ensure that records that are no longer needed by Wigal Vision or are of no value are discarded at the proper time. This Policy also aids employees in understanding their obligations in retaining electronic documents - including e-mail, Web files, text files, sound and movie files, PDF documents, and all Microsoft Office or other formatted files.</p>
                    )
                },
                {
                    title: "2. Policy",
                    content: (
                        <p>This Policy represents Wigal Vision’s policy regarding the retention and disposal of physical and electronic records and documents.</p>
                    )
                },
                {
                    title: "3. Administration",
                    content: (
                        <>
                            <p>The Retention Policy Administrator (the “Head of IT and Security”) is the officer in charge of the administration of this Policy and the implementation of processes and procedures to ensure that the Record Retention Schedule is followed. The Administrator is authorized to:</p>
                            <ul>
                                <li>Modify the Record Retention Schedule to ensure compliance with local and federal laws.</li>
                                <li>Monitor laws affecting record retention.</li>
                                <li>Annually review the record retention and disposal program.</li>
                                <li>Monitor compliance with this Policy.</li>
                            </ul>
                        </>
                    )
                },
                {
                    title: "4. Suspension of Disposal (Litigation/Claims)",
                    content: (
                        <p>In the event Wigal Vision is served with any subpoena or if any employee becomes aware of a governmental investigation, audit, or litigation, all document disposal shall be suspended. The Administrator will promptly inform all staff of any such suspension.</p>
                    )
                },
                {
                    title: "Appendix A: Accounting and Finance",
                    content: (
                        <table className="policy-table">
                            <thead>
                                <tr>
                                    <th>Record Type</th>
                                    <th>Retention Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Accounts Payable/Receivable ledgers</td><td>7 years</td></tr>
                                <tr><td>Annual Audit Reports and Financial Statements</td><td>Permanent</td></tr>
                                <tr><td>Annual Plans and Budgets</td><td>7 years</td></tr>
                                <tr><td>Bank Statements and Canceled Checks</td><td>7 years</td></tr>
                                <tr><td>Employee Expense Reports</td><td>7 years</td></tr>
                                <tr><td>General Ledgers</td><td>Permanent</td></tr>
                                <tr><td>Investment Records</td><td>7 years after sale</td></tr>
                                <tr><td>Credit card records (customer numbers)</td><td>2 years</td></tr>
                            </tbody>
                        </table>
                    )
                },
                {
                    title: "Appendix A: Corporate and Contracts",
                    content: (
                        <table className="policy-table">
                            <thead>
                                <tr>
                                    <th>Record Type</th>
                                    <th>Retention Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Contracts and Related Correspondence</td><td>7 years after expiration</td></tr>
                                <tr><td>Minute books, Bylaws, Articles of Incorporation</td><td>Permanent</td></tr>
                                <tr><td>Licenses and Permits</td><td>Permanent</td></tr>
                                <tr><td>Insurance Policies (inc. expired)</td><td>Permanent</td></tr>
                                <tr><td>Releases and Settlements</td><td>25 years</td></tr>
                            </tbody>
                        </table>
                    )
                },
                {
                    title: "Appendix A: Electronic Documents",
                    content: (
                        <>
                            <p><strong>Electronic Mail:</strong> All e-mail is to be deleted after 12 months. Any e-mail deemed vital to the job should be copied to a secure server directory and printed.</p>
                            <p><strong>Archiving:</strong> Wigal Vision archives deleted e-mail for six months before permanent deletion. Staff with more than 500MB in their account will be limited until the size is reduced.</p>
                            <p><strong>PDF and Formatted Files:</strong> The maximum retention for PDF files is 6 years. Formatted files (Word, etc.) must be reviewed annually and deleted after 5 years if unnecessary.</p>
                            <p><strong>Cookies:</strong> Internet cookies on workstations should be deleted once per month.</p>
                        </>
                    )
                },
                {
                    title: "Appendix A: Personnel and Payroll",
                    content: (
                        <table className="policy-table">
                            <thead>
                                <tr>
                                    <th>Record Type</th>
                                    <th>Retention Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Payroll Registers and Cost Records</td><td>7 years</td></tr>
                                <tr><td>Time Cards/Sheets</td><td>2 years</td></tr>
                                <tr><td>Garnishments / Assignments</td><td>Termination + 7 years</td></tr>
                                <tr><td>Unclaimed Wage Records</td><td>6 years</td></tr>
                                <tr><td>Retirement and Pension Records</td><td>Permanent</td></tr>
                                <tr><td>Personnel Records (Individual)</td><td>6 years after separation</td></tr>
                                <tr><td>Employment Contracts</td><td>7 years after separation</td></tr>
                                <tr><td>Employee Medical Records</td><td>Separation + 6 years</td></tr>
                            </tbody>
                        </table>
                    )
                },
                {
                    title: "Appendix A: Tax and Property",
                    content: (
                        <table className="policy-table">
                            <thead>
                                <tr>
                                    <th>Record Type</th>
                                    <th>Retention Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Tax Returns (Income, Property, etc.)</td><td>Permanent</td></tr>
                                <tr><td>Tax-Exemption Documents</td><td>Permanent</td></tr>
                                <tr><td>Payroll and Excise Tax Records</td><td>7 years</td></tr>
                                <tr><td>Tax Workpaper Packages</td><td>7 years</td></tr>
                                <tr><td>Property Deeds and Assessments</td><td>Permanent</td></tr>
                                <tr><td>Sale/Lease Agreements</td><td>Permanent</td></tr>
                            </tbody>
                        </table>
                    )
                },
                {
                    title: "Appendix A: Miscellaneous and Grants",
                    content: (
                        <table className="policy-table">
                            <thead>
                                <tr>
                                    <th>Record Type</th>
                                    <th>Retention Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Grant Proposals and Agreements</td><td>7 years after completion</td></tr>
                                <tr><td>Legal Memoranda and Opinions</td><td>7 years after close</td></tr>
                                <tr><td>Court Orders</td><td>Permanent</td></tr>
                                <tr><td>Historical Value Material (Pictures, etc.)</td><td>Permanent</td></tr>
                                <tr><td>Records of Contributions</td><td>Permanent</td></tr>
                                <tr><td>Sponsorship Agreements</td><td>Permanent</td></tr>
                            </tbody>
                        </table>
                    )
                }
            ]
        }
    };

    return (
        <section className="policy-tabs-section">
            <div className="policy-tabs-container">
                <div className="tabs-navigation">
                    <button
                        className={`policy-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
                        onClick={() => setActiveTab('privacy')}
                    >
                        Privacy Policy
                    </button>
                    <button
                        className={`policy-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
                        onClick={() => setActiveTab('terms')}
                    >
                        Terms & Conditions
                    </button>
                    <button
                        className={`policy-tab-btn ${activeTab === 'aml' ? 'active' : ''}`}
                        onClick={() => setActiveTab('aml')}
                    >
                        Anti-Money Laundering
                    </button>
                    <button
                        className={`policy-tab-btn ${activeTab === 'retention' ? 'active' : ''}`}
                        onClick={() => setActiveTab('retention')}
                    >
                        Retention Policy
                    </button>
                </div>

                <div className="policy-content-area">
                    {policies[activeTab].sections.map((section, index) => (
                        <div key={index} className="policy-section">
                            <h2 className="policy-section-title">{section.title}</h2>
                            <div className="policy-section-content">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PolicyTabs;
