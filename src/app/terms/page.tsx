"use client"

import React from 'react';
import styles from './styles.module.scss';
import AppHeader from '@/components/Header';
import AppFooter from '@/components/AppFooter';

export default function Terms() {
  const headerContents = [
    {
      id: 1,
      header: 'SPECIFIC TERMS AND CONDITIONS (STECS ACCOUNT)',
      details: `If you do not agree to these terms and conditions, please do not proceed and exit the application immediately. Also, be informed that we can terminate your relationship with us if we believe that you have violated any of these terms. 
      These terms and conditions apply to and regulate the provision of financial services provided by Stecs Financial Technologies Ltd(“Stecs”), a financial technology institution, to the Customer herein.These Terms and Conditions constitute Stecs's offer and sets out the terms governing this Agreement.`,
      date: 'Effective date: September 1, 2024',
    },
  ];
  const TargetHeaderContents = [
    {
      id: 1,
      header: 'STECS MUDARABAH TERM INVESTMENT (INVESTMENT VAULT)',
      details: `These are Specific Terms and Conditions for the Mudarabah Term Investment (MTI) based on Mudarabah contract
      provided by Stecs (Alausa) Cooperative Multipurpose Society Ltd (‘Stecs’). The following terms and conditions
      should be read carefully.`,
      date: 'Effective date: September 1, 2024',
    },
  ];


  const targetVaultTermsContents = [
    {
      id: 1,
      title: '1. Investment Basis',
      description: `Funds are mobilized from investors on the basis of an investment management contract between Stecs and an investor. The funds are invested by the investment manager on behalf of an investor in diversified Shariah-compliant transactions and instruments having predetermined target returns. The funds will be invested in predominantly fixed income contracts (Murabahah or Cost-plus), Ijarah (Islamic lease). The investment may also be made in Mudarabah (profit sharing) contracts and/or Sukuks. Returns generated from the investments are distributed to investors according to a profit-sharing ratio, which may use an indicative return for the relevant investment period as a performance benchmark.`,
    },
    {
      id: 2,
      title: '2. Investment Nature',
      description: `The investment is a Shariah-compliant term investment. Unlike conventional 'returns paying' deposit investments, the investment does not pay returns. Instead, the investment manager discretionarily invests funds mobilized in Shariah-compliant investments. Returns generated will be distributed in accordance with a pre-agreed profit-sharing formula.`,
    },
    {
      id: 3,
      title: '3. Calculation of Indicative Returns',
      description: `Indicative returns to investors are calculated using a combination of factors including the average returns across different assets/transactions and a profit-sharing split between the investor and the Investment Manager. Accordingly, while the Investment Manager will strive to achieve the indicative returns contained in the acknowledgment notice/Investment Advice, the actual returns to investors may vary from time to time.`,
    },
    {
      id: 4,
      title: '4. No Guarantee',
      description: `The Stecs Mudarabah Term Investment (Investment Vault) represents an investment partnership between the Investor (Stecs Users) and the Investment Manager (Stecs) where the Investment Manager deploys its expertise to maximise returns for the Investor. The Investment Manager is knowledgeable in investment matters and shall exercise all reasonable care and skills to invest all funds coming under its control in Shariah-compliant instruments and in safe and secure investments, implementing necessary credit and risk management controls. The Investment Manager does not guarantee that the Indicative Returns will be achieved and shall not be liable for any diminution in capital or shortfall from the Indicative Returns. Any investment losses will be borne by investors.`,
    },
    {
      id: 5,
      title: '5. Operation of Stecs Investment Vault',
      description: [
        'The account shall be operated in accordance with the existing laws, rules and regulations in Nigeria.',
        'Minimum investment shall be N5,000 for the flexible vault and N50,000 for the fixed vaults.',
        'All Know Your Customers (KYC) documentation shall be concluded prior to booking of investment. The Investment Manager reserves the right to take all reasonable steps including third party enquiries to validate information provided.',
        'Investment notifications confirming the investment amount, tenor and indicative returns shall be sent to Investor upon funding their vaults.',
        'All redemption requests may be made on the app as may be applicable, depending on the type of vault you operate.',
        'Proceeds of investment shall be paid only to the account of the Investor and the Investment Manager shall not be obligated to honour third party payment instructions or payment to other than the account of the investor held on the record of the management.',
      ],
    },
    {
      id: 6,
      title: '6. Compensation',
      description: `The Investment Manager shall be entitled to the share of profit indicated in the Investment Agreement and any excess above the indicative return will accrue to the Investment Manager as an incentive fee based on ju’alah contract. Ju’alah Contract is a Shariah-compliant contract in which one of the parties (Ja’il) offers specified compensation (the Ju’l) to anyone (the ‘Amil) who will achieve a determined result in a known or unknown period. The term which literally means compensation for a given service features an incentive-based compensation promised to anyone who fulfils a specified goal. In the Mudarabah Term Investment, the Investor agrees to pay the Investment Manager any excess above the indicative return as compensation for meeting the investment target.`,
    },
    {
      id: 7,
      title: '7. Variation',
      description: `The terms of this contract are standard and are not subject to further negotiation by the Investor. The Investment Manager reserves the right to vary the terms and conditions of the investment from time to time. The Investment Manager shall notify every and all investors of any such change and give them seven (7) days grace period to request withdrawal of their investment if they do not agree with the changes.`,
    },
    {
      id: 8,
      title: '8. Termination',
      description: `The Investment Manager reserves the right to terminate the investment at any time by returning any invested funds and accrued returns to the Investor.`,
    },
    {
      id: 9,
      title: '9. Confidentiality',
      description: `All information relating to the account shall remain confidential and shall not be disclosed by the Investment Manager to third parties without the Investor's written instructions. This obligation does not apply to requests made by regulatory and law enforcement agencies or any other authority which the Investment Manager is obligated to disclose to under the law. The Investor shall keep all account information confidential and absolve the Investment Manager from liability for any disclosure due to the Investor's error or negligence.`,
    },
    {
      id: 10,
      title: '10. Governing Law and Jurisdiction',
      description: `This term and conditions shall be governed by Nigerian Laws, and the courts shall have jurisdictions to entertain disputes arising therefrom.`,
    },
  ];


  return (
    <main>
      <div className="pt-[25px] pb-[25px] md:pb-[0] bg-[#fff] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] md:drop-shadow-none">
        <AppHeader />
      </div>
      <div className={styles.termsContainer}>
        <header className={styles.header}>
          <h1>Terms and Conditions</h1>

        </header>
        {headerContents.map((item) => (
          <div key={item.id}>
            <h2>{item.header}</h2>
            <p>{item.details}</p>
            <p>{item.date}</p>
          </div>
        ))}

        <div>
          <h3>1. About us</h3>
          <p>You are welcome to stecs.ng (the “website” or “software application”). Henceforth, “site” shall be interpreted to include other Stecs’ platforms (including mobile applications), which Stecs may make available to you from time to time.</p>
          <p>This site is operated and maintained by Stecs Financial Technologies Ltd (“Stecs”, “we”, “our”, “us”). We are registered in Nigeria under the Registration Company Number RC 1873053 and have our registered address at 12F, Tola Adewumi Street, Maryland Estate, Maryland, Lagos. We are a Limited Liability Company regulated by the Corporate Affairs Commission. To contact us, please email hello@stecs.ng or call our customer service line on 02013309146.</p>
        </div>
        <div>
          <h3>2. By using our site, you accept these terms</h3>
          <p>
            By using our site, you irrevocably confirm that you accept our Terms and Conditions of use (these “terms”), Acceptable Use Policy, as well as our Privacy Policy and agree to comply with them.
          </p>
          <span>Prohibited uses:</span>
          <p>You may use the Site only for lawful purposes. You may not use the Site:</p>
          <ul>
            <li>In any way that breaches any applicable local, national or international law or regulation.</li>
            <li>In any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect.</li>
            <li>For the purpose of harming or attempting to harm any person and in any way.</li>
            <li>To bully, insult, intimidate or humiliate any person.</li>
            <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards.</li>
            <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).</li>
            <li>To knowingly transmit any data, send or upload any material that contains viruses, trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other programs or similar computer code designed to adversely affect the operation of any computer software or hardware.
            </li>
          </ul>
        </div>
        <div>
          <h3>3. Acceptance of Terms and Use of the Services</h3>
          <p>Eligibility:</p>
          <ul>
            <li>This is a contract between you and Stecs.</li>
            <li>You must therefore read carefully and agree to these terms before using the Services. If you do not agree, you may not apply for an Account or use these Services.</li>
            <li>You may only apply for an Account or use the Services if you are an individual or legal entity formed and registered in the Federal Republic of Nigeria and can enter into a binding contract with Stecs, and only in compliance with this Agreement and all applicable local, state, national and international laws, rules and regulations.</li>
          </ul>
          <p>b. Applying for an Account:</p>
          <p>Your Account gives you access to the Services, the savings account ("returns-free (Qard) Savings Account"), Debit cards ("Cards") and other services provided by our Banking Partner ("Banking Provider"), and any other functionality that we may establish and maintain from time to time and in our sole discretion.</p>
          <p>c. You must specify at least one Signatory to manage your account when submitting your Application.</p>
          <p>d. Prohibited uses: You may not use the Site, Account or the Services:</p>
          <ul>
            <li>For any third parties unaffiliated with the company</li>
            <li>For any personal, household or other use that is not related to the Company's business purpose</li>
            <li>In any way that breaches any local, national or international law</li>
          </ul>
          <p>e. You agree not to reproduce, re-sell or duplicate any part of our site. Not to interfere with or damage any part of our site or networks in which the site is stored on.
            You are responsible for ensuring that all persons who access our site through your account or internet service are aware of these terms of use and privacy policy, and that they comply with them.
            However, you may choose to, or we may invite you to, submit comments or ideas about the Services, including without limitation about how to improve the Services or our products ("Feedback"). By submitting any feedback, you agree that your disclosure is gratuitous, unsolicited, and without restriction, that it will not place Stecs under any fiduciary or other obligation, and that we are free to use your feedback without any additional compensation to you, or to disclose your feedback on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Stecs does not waive any rights to use similar or related ideas previously known to Stecs, or developed by its employees, or obtained from other sources other than you.
            For the purpose of this Agreement, "Intellectual Property Rights" means all patent rights, copyrights, mask work rights, moral rights, rights of publicity, trademark, trade dress, and service mark rights, goodwill, trade secret rights and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals and extensions thereof, under the laws of any state, country, territory, or other jurisdiction.
          </p>
        </div>
        <div>
          <h3>4. Access to the site</h3>
          <p>
            You are solely responsible for the provision of all hardware, software, telephone or other communications equipment and/or service to connect to the Internet and access our site, and are responsible for all Internet access charges, telephone charges, or other fees or charges incurred in connecting to the Internet and accessing our site.
          </p>
        </div>
        <div>
          <h3>5. Our Intellectual Property and Proprietary Rights</h3>
          <p>Subject to the terms and conditions of this Agreement, you are hereby granted a non-exclusive, limited, non-transferable, freely revocable license to use the Services as permitted by the features of the Services.
            Stecs exclusively owns the right to all Intellectual Property on our site and all material published herein. These materials both digital or paper, must not be modified in any way. All such rights are reserved and protected by the prevailing intellectual property laws of the Federal Republic of Nigeria and equivalent international bodies around the world.
            Stecs reserves all rights granted to you and may terminate this license at any time for any reason or no reason.
            The services and all materials therein or transferred thereby, including, without limitation, software, images, text, illustrations, logos, trademarks, copyrights, photographs, videos, user-generated content, graphics and all Intellectual Property Rights related thereto, are the exclusive property of Stecs and its licensors.</p>
        </div>
        <div>
          <h3>6. You must keep your details safe</h3>
          <p>
            If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential, you must not disclose this information to any third party.

            We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms.

            If you know or suspect that anyone other than you, knows your user identification code or password, you must promptly notify us via any of our contact medium.

            You should notify us of any change of information in your user application such as change of address and contact information via any of our contact medium.</p>
        </div>
        <div>
          <h3>7. Third-Party Links and Information on our site</h3>
          <p>
            Our Services may contain links to third-party sites and materials that are not owned or controlled by us. Stecs does not assume any responsibility for any such third-party services, products or materials. You expressly relieve Stecs from any and all liabilities arising from your use of any third-party website or application linked from our site. These links are provided for your information only and do not serve as an approval by Stecs.
            The materials, information and content on our site is provided for general information only.
          </p>
        </div>
        <div>
          <h3>8. We are not responsible for viruses and you must not introduce them</h3>
          <p>
            We do not guarantee that our site will be secure or free from bugs or viruses.
            You are responsible for configuring your information technology, computer programmes and platform to access our site. You should use your own virus protection software.

            You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of-service attack or by any means gain any unauthorised access to segments of our site, which are not ordinarily accessible to the public. By breaching this provision, you would commit a criminal offence under the relevant Nigeria criminal laws, including but not limited to the Cyber Crimes (Prohibition, Prevention, etc.) Act 2015**. We will report any such conduct to the relevant law enforcement authorities, and we will cooperate with those authorities by disclosing your identity to them. In the event of such a breach your right to use our site will cease immediately.</p>
        </div>
        <div>
          <h3>9. The use of your personal data</h3>
          <p>By opening an account with us, you choose to provide us with your Registration Information, and you agree to update it from time to time so that it remains accurate.

            You hereby irrevocably authorize us to use your Registration Information and Account Activities at our sole discretion.

            You agree that we provide our services to you through some of our business partners, and that your account with us is currently domiciled with Providus Bank Limited (the “partner bank”). You hereby authorize us to migrate your account with us to any other platform or bank and close your account with us at the Domicile Bank at any time that we may deem fit. Provided that we shall notify you prior to such migration and close-down. Further provided that you may elect that we do not migrate such account but open a new account with the newly migrated platform, the opening of which is at our sole discretion. Where you do not elect otherwise within 3 (three) days from the date of the notice, you are deemed to have expressly authorised that we migrate your account from the Domicile Bank and close the account maintained with the Domicile Bank.</p>
        </div>
        <div>
          <h3>10. Term and Termination of Agreement</h3>
          <p>
            This Agreement is effective when you submit your application to us and continues until terminated by either you or us, or in accordance with the Banking Provider Agreements or as otherwise set forth in this Agreement. You may terminate this Agreement by paying all amounts you owe and providing notice to us; except that you will still be responsible for any charges, fees, fines, and other loses caused by your action or inaction prior to terminating this Agreement. We may terminate this Agreement, or suspend your Account, by providing you notice.
          </p>
        </div>
        <div>
          <h3>11. Breach of these Agreements</h3>
          <p>
            When any terms of these agreement is breached we may immediately relieve you of your access to our site and or issue a legal proceedings.
          </p>
        </div>
        <div>
          <h3> 12. Indemnity and rights</h3>
          <p>

            You agree to defend, indemnify and hold harmless Stecs and its subsidiaries, agents, managers, and other other affiliated companies, and their employees, agents, contractors, and directors, our Banking Providers, and our third-party service providers, from and against any and all third-party claims, damages, obligations, losses, liabilities, cost or debt, and expenses (including but not limited to legal fees) arising out of, or resulting from your use of and access to our Services, your violation of any term of this Agreement, your violation of any third-party right including without limited any right of privacy or Intellectual property right. We have the right to take legal action against you based on fraud, abuse or suspicious transaction activity in connection with any of your activities relating to Stecs and you agree to cooperate with us through such investigation and legal proceedings.
            We reserve the right to use your personal information or any other information provided by you to open a bank account with either our Banking Provider or any other Bank other than our Banking Provider.</p>
        </div>
        <div>
          <h3>13. Limitation of liability</h3>
          <p>
            To the maximum extent permitted by applicable Law, in no event shall Stecs, its affiliates, agents, directors, employees, Bank Providers, or Licensors be liable for any indirect, punitive, incidental, special damages, including without limitation damages for loss of profits, goodwill, use of data or other intangible uses, arising out of or relating to the use of, or inability to use our services, under no circumstances will Stecs be responsible for any damage.</p>
        </div>
        <div>
          <h3>14. Governing law</h3>
          <p>You agree that the services shall be deemed solely based in Nigeria; and the services shall be deemed a passive one that does not give rise to personal jurisdiction over us, either specific or general, in jurisdiction other than Nigeria. This Agreement shall be governed by the internal substantive laws of Nigeria without respect to its conflict of laws principles.
          </p>
        </div>
        <div>
          <h3>15. Dispute resolution and Arbitration</h3>
          <p>For any dispute with Stecs, you agree to first contact us at support@Stecs.ng and attempt to resolve the dispute with us informally. In the unlikely event that Stecs has not been able to resolve a dispute it has with you after ninety (90) days, we each agree to resolve any claim, dispute, or controversy arising out of or in connection with this Agreement, or the breach or alleged breach thereof by means of informal mediation, arbitration in accordance with the Arbitration and Conciliation Act, Laws of the Federation of Nigeria, 2010, or litigation depending on the subject matter which the dispute resolution mechanism shall be solely approved by us upon notification by the customer. These claims exclude any claims arising from protection of Intellectual Property Rights and breach of Confidential Information. Claims cannot be reassigned, sold or transferred. The maximum amount that can be offered in a claim will be solely determined by Stecs and cannot exceed ₦30,000 if an arbitrator rule in your favour.</p>
        </div>
        <div>
          <h3>16. Miscellaneous
          </h3>
          <p>This agreement comprises the entire agreement between Stecs and you and supersedes any prior agreements with respect to the subject matter herein. Stecs may revise this agreement or any other policy at any time and from time to time, and such revision shall be effective two (2) days upon posting notice of such revision prominently on our site. You agree to review this agreement periodically to be aware of such revisions. If any such revision is unacceptable to you, you must discontinue accessing our site.Your continued accessing and use of our site following notice of any such revision shall conclusively be deemed acceptance of all such revisions.This agreement is personal to you and you may not assign your rights or obligations thereunder to anyone. All logos, brand names, products, trademarks and service marks appearing herein may be the trademarks or service marks of their respective owners. References to any trademark, service mark and links to or from our site have been done strictly for clarification and identification and does not constitute endorsement by Stecs of the products, services or information offered by the owner of such trademark, service mark or link or endorsement of Stecs by such trademark, service mark or link owner.
          </p>
        </div>

        <div className='mt-5'>
          {TargetHeaderContents.map((item) => (
            <div key={item.id}>
              <h2>{item.header}</h2>
              <p>{item.details}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>

        <div>
          {targetVaultTermsContents.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              {Array.isArray(item.description) ? (
                <ul>
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/*  */}

      </div>
      <AppFooter />
    </main>

  );
}