// SVG symbol library shared by every illustration. Static, trusted markup.
export const SPRITE = `
  <defs>
    <linearGradient id="gloss" x1="0" x2="1">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset=".35" stop-color="#fff" stop-opacity=".55"/>
      <stop offset=".6" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="shade" x1="0" x2="1">
      <stop offset="0" stop-color="#000" stop-opacity=".12"/>
      <stop offset=".3" stop-color="#000" stop-opacity="0"/>
      <stop offset=".8" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity=".18"/>
    </linearGradient>
  </defs>
  <symbol id="i-tube" viewBox="0 0 80 200">
    <rect x="5" y="8" width="70" height="17" rx="2" fill="var(--t3, #E3EAF2)"/>
    <path d="M12 10v13M19 10v13M26 10v13M33 10v13M40 10v13M47 10v13M54 10v13M61 10v13M68 10v13" stroke="#000" stroke-opacity=".1" stroke-width="1.5"/>
    <path d="M6 24H74L63 160Q61 168 52 170H28Q19 168 17 160Z" fill="var(--t1, #2F7FE0)"/>
    <path d="M9 62H71L67 116H13Z" fill="var(--t2, #FFFFFF)"/>
    <path d="M6 24H74L63 160Q61 168 52 170H28Q19 168 17 160Z" fill="url(#shade)"/>
    <path d="M14 28H26L30 156L24 158Z" fill="#fff" opacity=".3"/>
    <rect x="26" y="168" width="28" height="28" rx="5" fill="var(--t3, #E3EAF2)"/>
    <rect x="26" y="168" width="28" height="28" rx="5" fill="url(#shade)"/>
  </symbol>
  <symbol id="i-pump" viewBox="0 0 80 200">
    <path d="M36 20H66V28H46V36H36Z" fill="var(--b2, #2B2B2B)"/>
    <rect x="31" y="34" width="18" height="22" rx="3" fill="var(--b2, #2B2B2B)"/>
    <rect x="26" y="54" width="28" height="16" rx="4" fill="var(--b2, #2B2B2B)"/>
    <path d="M12 86Q12 70 28 68H52Q68 70 68 86V186Q68 196 58 196H22Q12 196 12 186Z" fill="var(--b1, #8E7CF0)"/>
    <rect x="19" y="106" width="42" height="56" rx="7" fill="var(--b3, #FFFFFF)" opacity=".92"/>
    <path d="M12 86Q12 70 28 68H52Q68 70 68 86V186Q68 196 58 196H22Q12 196 12 186Z" fill="url(#shade)"/>
    <rect x="18" y="78" width="6" height="106" rx="3" fill="#fff" opacity=".35"/>
  </symbol>
  <symbol id="i-bottle" viewBox="0 0 80 200">
    <rect x="25" y="18" width="30" height="30" rx="7" fill="var(--b2, #FFFFFF)"/>
    <rect x="25" y="18" width="30" height="30" rx="7" fill="url(#shade)"/>
    <path d="M30 46H50L64 64Q70 72 70 84V186Q70 196 60 196H20Q10 196 10 186V84Q10 72 16 64Z" fill="var(--b1, #F06B9C)"/>
    <rect x="17" y="100" width="46" height="58" rx="7" fill="var(--b3, #FFFFFF)" opacity=".92"/>
    <path d="M30 46H50L64 64Q70 72 70 84V186Q70 196 60 196H20Q10 196 10 186V84Q10 72 16 64Z" fill="url(#shade)"/>
    <rect x="16" y="76" width="6" height="108" rx="3" fill="#fff" opacity=".35"/>
  </symbol>
  <symbol id="i-rinse" viewBox="0 0 80 200">
    <rect x="25" y="12" width="30" height="26" rx="4" fill="var(--b2, #FFFFFF)"/>
    <path d="M27 16v18M32 16v18M37 16v18M42 16v18M47 16v18M52 16v18" stroke="#000" stroke-opacity=".08" stroke-width="1.5"/>
    <rect x="29" y="36" width="22" height="12" fill="var(--b2, #FFFFFF)" opacity=".85"/>
    <path d="M30 46H50Q70 56 70 82V188Q70 196 62 196H18Q10 196 10 188V82Q10 56 30 46Z" fill="var(--b1, #2FB5C9)" opacity=".45"/>
    <path d="M12 96H68V188Q68 194 62 194H18Q12 194 12 188Z" fill="var(--b1, #2FB5C9)"/>
    <rect x="18" y="112" width="44" height="50" rx="6" fill="var(--b3, #FFFFFF)" opacity=".92"/>
    <rect x="15" y="62" width="6" height="122" rx="3" fill="#fff" opacity=".4"/>
  </symbol>
  <symbol id="i-jar" viewBox="0 0 120 100">
    <rect x="10" y="10" width="100" height="26" rx="9" fill="var(--b2, #FFFFFF)"/>
    <rect x="10" y="10" width="100" height="26" rx="9" fill="url(#shade)"/>
    <rect x="14" y="34" width="92" height="60" rx="13" fill="var(--b1, #F6C9A8)"/>
    <rect x="26" y="50" width="68" height="28" rx="6" fill="var(--b3, #FFFFFF)" opacity=".9"/>
    <rect x="14" y="34" width="92" height="60" rx="13" fill="url(#shade)"/>
  </symbol>
  <symbol id="i-brush" viewBox="0 0 40 200">
    <path d="M14 196Q12 120 16 70Q17 60 20 60Q23 60 24 70Q28 120 26 196Z" fill="var(--b1, #2F7FE0)"/>
    <rect x="14" y="10" width="12" height="54" rx="6" fill="var(--b1, #2F7FE0)"/>
    <rect x="22" y="12" width="12" height="40" rx="3" fill="var(--b2, #FFFFFF)"/>
    <path d="M24 14v36M27 14v36M30 14v36" stroke="var(--b3, #9FD3FF)" stroke-width="2"/>
  </symbol>
  <symbol id="i-check" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 16 16"><path d="M4 12L12 4M5.5 4H12V10.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-logo" viewBox="0 0 48 48">
    <path d="M6 38L19 10H27L14 38Z" fill="currentColor"/>
    <path d="M22 38L32 16L42 38H34L32 33L30 38Z" fill="currentColor" opacity=".72"/>
  </symbol>
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.2 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 16 16"><path d="M2 4h12v8H2zM2 4l6 5 6-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
  <symbol id="i-phone" viewBox="0 0 16 16"><path d="M5 2h2l1 3-1.5 1a7 7 0 0 0 3.5 3.5L11 8l3 1v2a2 2 0 0 1-2 2A10 10 0 0 1 3 4a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></symbol>
`;
