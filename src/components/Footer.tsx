import Image from "next/image";
import { CONTACT } from "@/data/content";
import { Icon, Roll } from "./ui";

const tel = CONTACT.phone.replace(/[^+\d]/g, "");

function Item({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <li>
      <Image src={`/footer/${icon}.svg`} width={16} height={16} alt="" />
      <span>{children}</span>
    </li>
  );
}

/** Footer from the Figma frame "Footer" (1440 x 895): four columns, a divider row, and a full-width AML wordmark. */
export function Footer() {
  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-cols">
          <div className="ft-brand">
            <Image src="/footer/logo.svg" width={84} height={43} alt="AML Consumer Care Ltd" />
            <p>Toothpaste and personal care made by AML Consumer Care Ltd in Dhaka, Halal certified, now in cosmetic shops and super shops across Bangladesh.</p>
            <a className="ft-btn" href="/#contact">
              <Roll>Ask a question</Roll>
              <span className="arrow"><Icon id="i-arrow" /></span>
            </a>
          </div>

          <div className="ft-col">
            <h4>Our companies</h4>
            <ul>
              {CONTACT.entities.map((e) => <Item key={e} icon="building">{e}</Item>)}
            </ul>
          </div>

          <div className="ft-col">
            <h4>Group headquarters</h4>
            <ul className="ft-addr">
              <Item icon="location">
                {CONTACT.address.map((l, i) => <span key={l}>{l}{i < CONTACT.address.length - 1 && <br />}</span>)}
              </Item>
            </ul>
          </div>

          <div className="ft-col">
            <h4>Contact</h4>
            <ul>
              <Item icon="call"><a href={`tel:${tel}`}>{CONTACT.phone}</a></Item>
              <Item icon="globe"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></Item>
              <Item icon="clock">{CONTACT.hours}</Item>
            </ul>
          </div>
        </div>

        <div className="ft-bar">
          <span>© {new Date().getFullYear()} AML Consumer Care Ltd, Dhaka. All rights reserved.</span>
          <span>Design &amp; Developed by Opseek.agency</span>
        </div>
      </div>

      {/* Pre-rendered at 2x: sharp at the top, progressively blurred toward the bottom. */}
      <Image className="ft-mark" src="/footer/wordmark-blur.webp" width={2880} height={780} alt="" aria-hidden="true" />
    </footer>
  );
}
