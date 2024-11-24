'use client';

import AppHeader from '@/components/Header';
import style from './styles.module.scss';
import AppFooter from '@/components/AppFooter';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <main>
      <div className="pt-[25px] pb-[25px] md:pb-[0] bg-[#fff] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] md:drop-shadow-none">
        <AppHeader />
      </div>
      <div
        className={`${style.widthEnforcer} wrapper-pad mx-auto`}
      >
        <div className={style.title}>PRIVACY POLICY FOR STECS</div>
        <div className={style.body}>
          <ol className={style.numbering}>
            <li>
              <p className={style.infoTitle}>Introduction</p>
              <p className={style.text}>
                This Privacy Policy (the <strong>“Policy”</strong>) applies to
                Stecs Financial Technologies Limited’s online interface (i.e.,
                website or mobile application) and any affiliate, subsidiary or
                online interface that is linked to this Policy, (individually
                referred to as a <strong>“site”</strong>, and, collectively,{" "}
                <strong>“sites”</strong>). The term (
                <strong>“the company”</strong> or <strong>"Stecs”</strong>,{" "}
                <strong>“we"</strong>, <strong>"us"</strong>,{" "}
                <strong>"our"</strong>) in this Policy shall refer to STECS
                Financial Technologies Ltd and any of its affiliate, subsidiary
                that is linked to this policy. Stecs is committed to protecting
                the privacy of its users (<strong>"you"</strong>,
                <strong> "your"</strong>). This Privacy Policy explains how we
                collect, use, and protect personal information that we collect
                from you when you use our website or services. By using our
                website or services, you agree to the terms of this Privacy
                Policy.
              </p>
              <p>
                Please read this Policy carefully. By using the Site and any
                services we offer via the Site, you are agreeing to be bound by
                this Policy with respect to the information collected about you
                via this Site.
              </p>
              <p className={style.text}>
                You may use the Site only for lawful purposes. You may not use
                the Site:
                <ul>
                  <li>
                    In any way that breaches any applicable local, national or
                    international law or regulation.
                  </li>
                  <li>
                    In any way that is unlawful or fraudulent or has any
                    unlawful or fraudulent purpose or effect.
                  </li>
                  <li>
                    For the purpose of harming or attempting to harm any person
                    and in any way.
                  </li>
                  <li>To bully, insult, intimidate or humiliate any person.</li>
                  <li>
                    To send, knowingly receive, upload, download, use or re-use
                    any material which does not comply with our content
                    standards.
                  </li>
                  <li>
                    To transmit, or procure the sending of, any unsolicited or
                    unauthorised advertising or promotional material or any
                    other form of similar solicitation (spam).
                  </li>
                  <li>
                    To knowingly transmit any data, send or upload any material
                    that contains viruses, trojan horses, worms, time-bombs,
                    keystroke loggers, spyware, adware or any other programs or
                    similar computer code designed to adversely affect the
                    operation of any computer software or hardware.
                  </li>
                </ul>
              </p>

              <p className={style.text}>
                You also agree:
                <ul>
                  <li>
                    Not to reproduce, duplicate, copy or re-sell any part of our
                    Site as this is in contravention of the provisions of our
                    terms of use.
                  </li>
                  <li>
                    Not to access without authority, interfere with, damage or
                    disrupt:
                    <ol className={style.smallLetter}>
                      <li>any part of our Site;</li>
                      <li>
                        any equipment or network on which our Site is stored; or
                      </li>
                      <li>any software used in the provision of our Site</li>
                    </ol>
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>
                Types of Personal Information We Collect
              </p>
              <p className={style.text}>
                We collect personal information from you when you use our site.
              </p>
              <p className={style.text}>
                We may collect the following information from you:
                <ul>
                  <li>name, username, gender, date of birth;</li>
                  <li>email address, postal address, telephone number;</li>
                  <li>your interests;</li>
                  <li>account number, card number and expiry date</li>
                  <li>or any other information that may be required</li>
                </ul>
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>
                How We Use Your Personal Information
              </p>
              <p className={style.text}>
                We use your personal information to provide our services to you,
                to communicate with you, to process payments, and to improve our
                services. Specifically, we may use your personal information for
                the following purposes:
                <ul>
                  <li>To create and maintain your account</li>
                  <li>To process payments and provide you with our services</li>
                  <li>
                    To communicate with you regarding our services, updates, and
                    promotions
                  </li>
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>To improve and personalize our services</li>
                  <li>
                    To comply with legal obligations and regulatory
                    requirements.
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>
                How We Share Your Personal Information
              </p>
              <p className={style.text}>
                Services available on this Site are offered in conjunction with
                some of our business partners, including Providus Bank Limited
                (the "business partners").
              </p>
              <p className={style.text}>
                In order for services to be provided, we may share some
                necessary details about you with the Business Partners, and
                according to our business dynamics and the continued provision
                of efficient services to you, we may, from time to time,
                transfer such details to other Business Partners as we deem fit.
                However, under any circumstance, we will take steps to ensure
                that your privacy rights continue to be protected.
              </p>
              <p className={style.text}>
                We may transfer your personal information to any other third
                party as part of a sale of some or all of our business and
                assets to any third party or as part of any business
                restructuring or reorganisation, but we will take steps with the
                aim of ensuring that your privacy rights continue to be
                protected.
              </p>
              <p className={style.text}>
                In addition, we may pass your information onto one of our
                carefully selected business partners or to other carefully
                selected third parties to enable them to send you information
                which may be of interest to you but only if you have given us
                permission to do so. You can stop receiving such mail whenever
                you choose by unsubscribing via the link provided.
              </p>
              <p className={style.text}>
                We may also share your personal information with regulatory
                authorities or law enforcement agencies as required by law or to
                protect our legal interests.
              </p>
              <p className={style.text}>
                Other than as set out above, we will not disclose any of your
                personal information without your permission.
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>
                Security of Your Personal Information
              </p>
              <p className={style.text}>
                We take appropriate technical and organisational measures to
                protect your personal information against unauthorised access,
                disclosure, alteration, or destruction. We implement measures
                such as encryption, firewalls, and access controls to protect
                your personal information. We use secure server software (SSL)
                to encrypt any financial information you need to input before it
                is sent to us. We also require our service providers to
                implement appropriate security measures.
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>
                Retention of Your Personal Information
              </p>
              <p className={style.text}>
                We retain your personal information for as long as necessary to
                provide our services to you, to comply with legal obligations,
                or to protect our legal interests. We will delete your personal
                information when it is no longer necessary for these purposes.
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>Your Rights</p>
              <p className={style.text}>
                You have the right to access, correct, or delete your personal
                information. You may also object to the processing of your
                personal information or request a restriction on its processing.
                You may exercise these rights by contacting us using the contact
                details provided below.
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>
                Cookies and Tracking Technologies
              </p>
              <p className={style.text}>
                We use cookies and other tracking technologies to collect
                information about your use of our site. This information may
                include your IP address, browser type, operating system, and
                other usage information. We use this information to analyze
                trends, administer our website, and personalize your experience.
                You may disable cookies in your browser settings, but this may
                affect the functionality of our website and services. A number
                of cookies we use last only for the duration of your session and
                expire when you close your browser. Other cookies are used to
                remember you when you return to the site and will last for
                longer. A cookie helps you get the best out of the Site and
                helps us to provide you with a more customised service. We use
                cookies:
                <ul>
                  <li>
                    so that you will not have to re-enter your details each time
                    you visit the Site to track how our Site is used and to
                    improve and update our content
                  </li>
                  <li>store your preferences</li>
                  <li>
                    customise elements of the layout and/or content of the site
                    for you
                  </li>
                  <li>
                    collect statistical information about how you use the site
                    so that we can improve the site
                  </li>
                </ul>
                You can refuse to accept these cookies and most devices and
                browsers offer their own privacy settings for cookies. You will
                need to manage your cookie settings for each device and browser
                you use. However, if you do not accept these cookies, you may
                experience some inconvenience in your use of the Site and some
                online products and services. For example, we will not be able
                to recognize your device and you will need to answer a challenge
                question each time you log on. You also may not receive tailored
                advertising or other offers from us that may be relevant to your
                interests and needs.
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>Changes to your Details</p>
              <p className={style.text}>
                Keeping your account information accurate and up to date is very
                important. If your account information is incomplete, inaccurate
                or not current, please use the Contact Us option on our Site, or
                call or write to us at the telephone numbers or appropriate
                address for changes listed on your account statements, records,
                online or other account materials. You can also speak to a
                customer representative from the Company.
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>
                Updates to this Privacy Policy
              </p>
              <p className={style.text}>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes to this Privacy Policy by
                posting a notice on our website or by other means.
              </p>
            </li>
            <li>
              <p className={style.infoTitle}>Contact Us</p>
              <p className={style.text}>
                If you have any questions or concerns about this Privacy Policy
                or our data protection practices, please contact us, by sending
                an email to us at <Link href="mailto:hello@stecs.ng">hello@stecs.ng</Link> or writing to us at 12F, Tola
                Adewumi Street, Maryland Estate, Maryland, Lagos.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <AppFooter />
    </main>
  );
}

export default PrivacyPolicy;