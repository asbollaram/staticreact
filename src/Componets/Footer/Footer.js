import React from 'react';
import './Footer.css';

const Footer = () => {
  let url = '';
  return (
    <footer id="site-footer">
      <section className="horizontal-footer-section" id="footer-middle-section">
        <div className="footer-columns">
          <h1>Overview</h1>
          <ul className="footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Services{' '}
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a
                // eslint-disable-next-line no-script-url
                href={url}
                className="footer-column-menu-item-link"
              >
                Pricing
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Portfolio
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-columns">
          <h1>Resources</h1>
          <ul className="footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                FAQ
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Media
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Guides
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Free Resources
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-columns">
          <h1>Information</h1>
          <ul className="footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                About Us
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Terms of Use
              </a>
            </li>
            <li className="footer-column-menu-item">
              <a
                href={url}
                className="footer-column-menu-item-link"
                role="menuitem"
              >
                Legal Information
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Message Us
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href={url} className="footer-column-menu-item-link">
                Leave a Feedback
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer_copyright">
        <div id="footer-copyright-info">
          &copy; Bollaram Studio 2022. All rights reserved.
        </div>
        <div id="footer-social-buttons">
          <img
            src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"
            alt="facebook"
            title="facebook"
          />
          <img
            src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"
            alt="telegram"
            title="telegram"
          />
          <img
            src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"
            alt="pinterest"
            title="pinterest"
          />
          <img
            src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"
            alt="instagram"
            title="instagram"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
