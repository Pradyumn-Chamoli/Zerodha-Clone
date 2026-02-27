import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container mt-5 border-top pt-5 footer-section">

        {/* TOP SECTION */}
        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 col-12">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="img-fluid footer-logo mb-3"
            />
            <p className="text-muted small">
              © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold">Company</p>
            <div className="d-flex flex-column gap-1">
              <a href="#" className="text-muted text-decoration-none">About</a>
              <a href="#" className="text-muted text-decoration-none">Products</a>
              <a href="#" className="text-muted text-decoration-none">Pricing</a>
              <a href="#" className="text-muted text-decoration-none">Referral programme</a>
              <a href="#" className="text-muted text-decoration-none">Careers</a>
              <a href="#" className="text-muted text-decoration-none">Zerodha.tech</a>
              <a href="#" className="text-muted text-decoration-none">Press & media</a>
              <a href="#" className="text-muted text-decoration-none">Zerodha cares (CSR)</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold">Support</p>
            <div className="d-flex flex-column gap-1">
              <a href="#" className="text-muted text-decoration-none">Contact</a>
              <a href="#" className="text-muted text-decoration-none">Support Portal</a>
              <a href="#" className="text-muted text-decoration-none">Z-connect blog</a>
              <a href="#" className="text-muted text-decoration-none">List of charges</a>
              <a href="#" className="text-muted text-decoration-none">Downloads & resources</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold">Account</p>
            <div className="d-flex flex-column gap-1">
              <a href="#" className="text-muted text-decoration-none">Open an account</a>
              <a href="#" className="text-muted text-decoration-none">Fund transfer</a>
              <a href="#" className="text-muted text-decoration-none">60 day challenge</a>
            </div>
          </div>

        </div>

        {/* FULL DISCLAIMER TEXT */}
        <div className="mt-5 text-muted footer-text">

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. 
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. 
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, 
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking 
            please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read 
            the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints 
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal 
            of the grievances.
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge 
            in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker 
            / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 
            3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. 
            Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. 
            Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done 
            through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again 
            when you approach another intermediary.
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number 
            and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment 
            the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone 
            to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto (Tactical Consulting Private Limited | IRDAI Registered 
            Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, 
            SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;