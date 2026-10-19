import { CONTACT } from "@/data/content";
import { Icon, Logo, Roll } from "./ui";

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="fgrid">
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Logo />
            <p>Malaysian toothpaste and personal care, Halal certified, now in cosmetic shops and super shops across Bangladesh.</p>
            <a className="btn btn-lime" href="#contact" style={{ justifySelf: "start" }}>
              <Roll>Ask a question</Roll><span className="arrow"><Icon id="i-arrow" /></span>
            </a>
          </div>
          <div>
            <h4>Our companies</h4>
            <ul>{CONTACT.entities.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
          <div>
            <h4>Headquarters</h4>
            <p>{CONTACT.address.map((l, i) => <span key={l}>{l}{i < CONTACT.address.length - 1 && <br />}</span>)}</p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li className="sel">{CONTACT.phone}</li>
              <li className="sel">{CONTACT.email}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>
        <div className="wordmark" aria-hidden="true">AmLion</div>
        <div className="fbottom">
          <span>© {new Date().getFullYear()} AmLion Group Sdn Bhd. All rights reserved.</span>
          <span><a href="#about">About</a> · <a href="#products">Products</a> · <a href="#trust">Trust</a> · <a href="#faq">FAQ</a></span>
        </div>
      </div>
    </footer>
  );
}
