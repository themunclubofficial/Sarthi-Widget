(function(){
if(document.getElementById('sb')) return;
var s=document.createElement('style');
s.textContent=`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=DM+Sans:wght@300;400;500;600&display=swap'); *,*::before,*::after{box-sizing:border-box;margin:0;padding:0} :root{ --d:#060c1e; --d2:#0a1228; --n:#0f1e45; --n2:#1a2e6a; --n3:#223480; --g:#C8960C; --g2:#E6AE14; --g3:#F2C94C; --glow:rgba(200,150,12,0.3); --w:#fff; --bsz:66px; --pw:390px; --ph:560px; --br:22px; } #sb{ position:fixed;bottom:26px;right:26px; width:var(--bsz);height:var(--bsz); border-radius:50%;cursor:pointer;z-index:99999; background:transparent; border:none; box-shadow:0 4px 22px var(--glow),0 2px 12px rgba(6,12,30,0.5); transition:transform 0.2s,box-shadow 0.2s; overflow:hidden; animation:idlepulse 3.5s ease-in-out infinite; } #sb:hover{transform:scale(1.09);box-shadow:0 6px 28px rgba(200,150,12,0.55),0 3px 16px rgba(6,12,30,0.5);animation:none} #sb img{ width:100%;height:100%; object-fit:cover; object-position:center 18%; border-radius:50%; display:block; } @keyframes idlepulse{ 0%,100%{box-shadow:0 4px 22px var(--glow),0 0 0 0 rgba(200,150,12,0.3)} 50%{box-shadow:0 4px 22px var(--glow),0 0 0 10px rgba(200,150,12,0)} } #stt{ position:fixed;bottom:104px;right:26px; background:var(--d2);color:var(--w); font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500; padding:6px 13px;border-radius:8px;white-space:nowrap; pointer-events:none;opacity:0;transform:translateY(5px); transition:opacity 0.2s,transform 0.2s;z-index:99998; border:1px solid rgba(200,150,12,0.28);letter-spacing:0.3px; } #stt::after{content:'';position:absolute;bottom:-6px;right:22px; border:6px solid transparent;border-top-color:var(--d2);border-bottom:none} #sb:hover + #stt{opacity:1;transform:translateY(0)} #sp{ position:fixed;bottom:106px;right:26px; width:var(--pw);height:var(--ph); border-radius:var(--br);z-index:99997; display:flex;flex-direction:column;overflow:hidden; transform:translateY(30px) scale(0.95);opacity:0;pointer-events:none; transition:transform 0.32s cubic-bezier(0.34,1.48,0.64,1),opacity 0.25s ease; border:1px solid rgba(200,150,12,0.2); background: radial-gradient(ellipse at 15% 0%,rgba(200,150,12,0.13) 0%,transparent 50%), radial-gradient(ellipse at 85% 0%,rgba(34,52,128,0.5) 0%,transparent 45%), radial-gradient(ellipse at 50% 100%,rgba(200,150,12,0.07) 0%,transparent 55%), linear-gradient(168deg,#070d22 0%,#0c1838 18%,#101f4a 38%,#152860 58%,#0e1c42 78%,#060c1e 100%); box-shadow:0 24px 70px rgba(6,12,30,0.65),0 4px 24px rgba(200,150,12,0.12); } #sp.open{transform:translateY(0) scale(1);opacity:1;pointer-events:all} #sh{ padding:12px 14px 11px;display:flex;align-items:center;gap:11px; flex-shrink:0;position:relative;overflow:hidden; background:radial-gradient(ellipse at 50% 140%,rgba(200,150,12,0.16) 0%,transparent 65%), linear-gradient(160deg,#040810 0%,#080f28 45%,#0d1836 100%); border-bottom:1px solid rgba(200,150,12,0.25); } #sh::before{content:'';position:absolute;top:0;left:0;right:0;height:2px; background:linear-gradient(90deg,transparent 0%,#A87800 20%,#F2C94C 50%,#A87800 80%,transparent 100%)} #sha{ width:50px;height:50px;border-radius:50%;flex-shrink:0; position:relative;z-index:1;overflow:hidden; box-shadow:0 0 0 2px var(--g2),0 0 16px rgba(200,150,12,0.3); background:var(--d); } #sha img{ width:100%;height:100%; object-fit:cover; object-position:center 18%; display:block; } #shi{flex:1;position:relative;z-index:1} #shi .nm{font-family:'Playfair Display',serif;font-size:17px;font-weight:800; color:var(--w);letter-spacing:0.6px;line-height:1.2;text-shadow:0 0 20px rgba(200,150,12,0.2)} #shi .sub{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600; letter-spacing:1px;text-transform:uppercase; background:linear-gradient(90deg,#C8960C,#F2C94C,#E6AE14,#C8960C); background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent; background-clip:text;animation:goldshift 4s linear infinite;margin-top:2px} @keyframes goldshift{0%{background-position:0%}100%{background-position:200%}} .hst{display:flex;align-items:center;gap:5px;margin-top:3px} .hst .dot{width:7px;height:7px;border-radius:50%;background:#4ADE80; box-shadow:0 0 7px #4ADE80;animation:glowdot 2.2s ease-in-out infinite} @keyframes glowdot{0%,100%{box-shadow:0 0 4px #4ADE80}50%{box-shadow:0 0 12px #4ADE80}} .hst .lbl{font-family:'DM Sans',sans-serif;font-size:10px;color:#8FFABC;font-weight:500;letter-spacing:0.4px} #sc{width:30px;height:30px;border-radius:50%;background:rgba(200,150,12,0.1); border:1px solid rgba(200,150,12,0.22);cursor:pointer;color:rgba(255,255,255,0.7); font-size:14px;display:flex;align-items:center;justify-content:center; transition:background 0.15s,color 0.15s;flex-shrink:0;position:relative;z-index:1} #sc:hover{background:rgba(200,150,12,0.22);color:var(--w)} #sm{flex:1;overflow-y:auto;padding:14px 13px 8px; display:flex;flex-direction:column;gap:9px;scroll-behavior:smooth} #sm::-webkit-scrollbar{width:3px} #sm::-webkit-scrollbar-track{background:transparent} #sm::-webkit-scrollbar-thumb{background:rgba(200,150,12,0.2);border-radius:4px} .mr{display:flex;gap:7px;align-items:flex-end} .mr.u{flex-direction:row-reverse} .mav{width:27px;height:27px;border-radius:50%;flex-shrink:0;overflow:hidden; border:1.5px solid var(--g);background:var(--n);position:relative} .mav img{width:100%;height:100%;object-fit:cover;object-position:center 18%;display:block} .mb{max-width:76%;padding:9px 13px;font-family:'DM Sans',sans-serif; font-size:13.5px;line-height:1.56;word-break:break-word;border-radius:15px} .mr.b .mb{background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.92); border-bottom-left-radius:4px;border:1px solid rgba(200,150,12,0.16);backdrop-filter:blur(6px)} .mr.u .mb{background:linear-gradient(135deg,#9a6d00,#C8960C 50%,#dba810); color:#050c1e;font-weight:500;border-bottom-right-radius:4px; box-shadow:0 2px 12px rgba(200,150,12,0.28)} .cta-btn{ display:inline-block;margin-top:8px; padding:7px 16px;border-radius:999px; background:linear-gradient(135deg,#9a6d00,#C8960C,#dba810); color:#050c1e;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700; text-decoration:none;letter-spacing:0.3px; border:none;cursor:pointer; box-shadow:0 2px 10px rgba(200,150,12,0.35); transition:filter 0.15s,transform 0.12s; } .cta-btn:hover{filter:brightness(1.12);transform:translateY(-1px)} .team-card{ display:flex;align-items:center;gap:8px; padding:6px 10px;border-radius:10px; background:rgba(255,255,255,0.05);border:1px solid rgba(200,150,12,0.14); margin-top:5px; } .team-card .role{font-size:10px;color:var(--g3);font-family:'DM Sans',sans-serif;letter-spacing:0.3px} .team-card .tname{font-size:13px;color:var(--w);font-family:'DM Sans',sans-serif;font-weight:600} .team-card a{ margin-left:auto;padding:4px 10px;border-radius:999px; background:rgba(200,150,12,0.12);border:1px solid rgba(200,150,12,0.3); color:var(--g3);font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600; text-decoration:none;white-space:nowrap; transition:background 0.15s; } .team-card a:hover{background:rgba(200,150,12,0.25);color:var(--w)} .tr{display:flex;gap:7px;align-items:flex-end} .tb{background:rgba(255,255,255,0.07);border:1px solid rgba(200,150,12,0.16); border-radius:15px;border-bottom-left-radius:4px;padding:10px 13px; display:flex;align-items:center;gap:4px;backdrop-filter:blur(6px)} .tb span{width:7px;height:7px;border-radius:50%;background:rgba(200,150,12,0.55); animation:bounce 1.3s ease-in-out infinite} .tb span:nth-child(2){animation-delay:0.18s} .tb span:nth-child(3){animation-delay:0.36s} @keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:0.35}40%{transform:translateY(-6px);opacity:1}} .ecap{ background:rgba(200,150,12,0.08);border:1px solid rgba(200,150,12,0.22); border-radius:11px;padding:9px 11px;display:flex;gap:6px;align-items:center; margin-top:5px; } .ecap input{flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(200,150,12,0.22); border-radius:8px;padding:6px 10px;color:var(--w); font-family:'DM Sans',sans-serif;font-size:12px;outline:none} .ecap input::placeholder{color:rgba(255,255,255,0.3)} .ecap input:focus{border-color:rgba(200,150,12,0.5)} .ecap button{background:linear-gradient(135deg,#b8850a,#D4A017);border:none; border-radius:8px;padding:6px 11px;color:#050c1e; font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;cursor:pointer} .ncap{display:flex;flex-direction:column;gap:6px;margin-top:5px} .ncap input{background:rgba(255,255,255,0.07);border:1px solid rgba(200,150,12,0.22); border-radius:8px;padding:7px 11px;color:var(--w); font-family:'DM Sans',sans-serif;font-size:12.5px;outline:none} .ncap input::placeholder{color:rgba(255,255,255,0.3)} .ncap input:focus{border-color:rgba(200,150,12,0.5)} .ncap button{background:linear-gradient(135deg,#9a6d00,#C8960C); border:none;border-radius:8px;padding:7px 14px;color:#050c1e; font-family:'DM Sans',sans-serif;font-size:12.5px;font-weight:700;cursor:pointer; align-self:flex-start} #sch{padding:4px 13px 9px;display:flex;flex-wrap:wrap;gap:6px;flex-shrink:0} .chip{font-family:'DM Sans',sans-serif;font-size:11.5px;font-weight:500; color:var(--g3);background:rgba(200,150,12,0.07); border:1px solid rgba(200,150,12,0.28);border-radius:999px; padding:5px 12px;cursor:pointer;white-space:nowrap;letter-spacing:0.2px; transition:background 0.15s,color 0.15s,border-color 0.15s} .chip:hover{background:rgba(200,150,12,0.2);border-color:var(--g2);color:var(--w)} .cdiv{flex-shrink:0;height:1px; background:linear-gradient(90deg,transparent,rgba(200,150,12,0.22),transparent); margin:0 13px} #sir{padding:9px 11px 11px;display:flex;gap:7px;align-items:center; border-top:1px solid rgba(200,150,12,0.13);flex-shrink:0; background:rgba(4,8,16,0.5)} #si{flex:1;border:1px solid rgba(200,150,12,0.22);border-radius:999px; padding:9px 15px;font-family:'DM Sans',sans-serif;font-size:13px; outline:none;color:var(--w);background:rgba(255,255,255,0.055); transition:border-color 0.15s,background 0.15s} #si:focus{border-color:rgba(200,150,12,0.55);background:rgba(255,255,255,0.08)} #si::placeholder{color:rgba(255,255,255,0.3)} #ss{width:38px;height:38px;border-radius:50%; background:linear-gradient(135deg,#9a6d00,#C8960C,#e6b820); border:none;cursor:pointer;display:flex;align-items:center;justify-content:center; transition:transform 0.12s,box-shadow 0.15s;flex-shrink:0; box-shadow:0 2px 12px rgba(200,150,12,0.38)} #ss:hover{transform:scale(1.08);box-shadow:0 4px 18px rgba(200,150,12,0.55)} #ss:active{transform:scale(0.95)} #ss svg{color:#040810} #sbr{text-align:center;font-family:'DM Sans',sans-serif;font-size:10px; color:rgba(200,150,12,0.38);padding:0 0 7px;letter-spacing:0.4px} #sbr a{color:rgba(200,150,12,0.55);text-decoration:none} @media(max-width:600px){ :root{--pw:100vw;--ph:100dvh;--br:0px} #sp{ bottom:0!important;right:0!important; width:100vw!important;height:100dvh!important; border-radius:0!important; } #sb{bottom:20px;right:20px;width:58px;height:58px} #stt{display:none} } @media(min-width:601px) and (max-width:900px){ :root{--pw:360px;--ph:520px} }`;
document.head.appendChild(s);
var d=document.createElement('div');
d.innerHTML=`<div id="sb" onclick="toggle()" aria-label="Chat with Sarthi"><img src="https://static.wixstatic.com/media/0a0861_117440d3eb8846efa4ade3c5f5565e34~mv2.png" alt="Sarthi"/></div><div id="stt">Chat with Sarthi 🌐</div><div id="sp" role="dialog" aria-label="Sarthi Chat"><div id="sh"><div id="sha"><img src="https://static.wixstatic.com/media/0a0861_117440d3eb8846efa4ade3c5f5565e34~mv2.png" alt="Sarthi"/></div><div id="shi"><div class="nm">Sarthi</div><div class="sub">The MUN Club · AI Guide</div><div class="hst"><div class="dot"></div><span class="lbl">Online · Ready to guide you</span></div></div><button id="sc" onclick="toggle()" aria-label="Close">✕</button></div><div id="sm"></div><div id="sch"><button class="chip" onclick="chip('🗓️ Upcoming Conferences')">🗓️ Find Conferences</button><button class="chip" onclick="chip('📋 List My Conference')">📋 List Conference</button><button class="chip" onclick="chip('🎓 MUN Training')">🎓 Training</button><button class="chip" onclick="chip('👥 Meet the Team')">👥 The Team</button><button class="chip" onclick="chip('✨ What can you do?')">✨ What can Sarthi do?</button></div><div class="cdiv"></div><div id="sir"><input id="si" type="text" placeholder="Ask Sarthi anything…" onkeydown="if(event.key==='Enter'){event.preventDefault();sendMsg()}" autocomplete="off"/><button id="ss" onclick="sendMsg()" aria-label="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div><div id="sbr">Powered by <a href="https://themunclub.com" target="_blank">The MUN Club</a></div></div>`;
document.body.appendChild(d);
const AV = "https://static.wixstatic.com/media/0a0861_117440d3eb8846efa4ade3c5f5565e34~mv2.png";

// ── WEBSITE PAGES (update this object as the site grows) ──
// ══════════════════════════════════════════════
// UPDATE THIS SECTION AS THE WEBSITE GROWS
// ══════════════════════════════════════════════
const PAGES = {
  conferences: { label:"Browse Conferences",   url:"https://www.themunclub.com/listed-conferences" },
  listmun:     { label:"List Your Conference", url:"https://www.themunclub.com/list-mun" },
  batches:     { label:"Training Batches",     url:"https://www.themunclub.com/tmc-batches" },
  library:     { label:"Digital Library",      url:"https://www.themunclub.com/digital-library" },
  about:       { label:"About Us & Team",      url:"https://www.themunclub.com/about" },
  home:        { label:"Visit TMC →",          url:"https://www.themunclub.com" },
  whatsapp:    { label:"Join WhatsApp Community", url:"https://chat.whatsapp.com/G8S8G1J11QnLqZT1KLekTY" },
  jointeam:    { label:"Apply to Join TMC Team",  url:"https://docs.google.com/forms/d/e/1FAIpQLSfblG0yJbyd9VIRU3Q_VpFdk24Wck3TG8H1kZ4i5f2yFyA97Q/viewform" },
};

// ══ TEAM — update names/roles/links here as team changes ══
const TEAM = [
  { name:"Parth Sarraf",      role:"Founder",                       link:"https://linktr.ee/parth_sarraf724" },
  { name:"Purav Mehta",       role:"Website Administrator",          link:"https://linktr.ee/puravmehta1" },
  { name:"Vedanshi Bundela",  role:"Events & Operations",           link:"https://linktr.ee/vedanshibundela" },
  { name:"Geetika Singh",     role:"Social Media Management",       link:"https://linktr.ee/geetikasingh26" },
  { name:"Aryan Sirswal",     role:"Rules & Ethics",                link:"https://linktr.ee/AryanSirswal" },
  { name:"Samarth Dewal",     role:"Announcements & Communications",link:"https://linktr.ee/samdewal1215" },
  { name:"Nischaya Prasher",  role:"Member Relations",              link:"https://linktr.ee/nischaya.prasher" },
  { name:"Sanjay Chaudhary", role:"External Relations",            link:"https://linktr.ee/SanjayChoudhary1716" },
];

// ── STATE ──
let open=false, hist=[], busy=false, greeted=false;
let userName="", userEmail="", profileAsked=false;

// ── SYSTEM PROMPT ──
const SYS = `You are Sarthi (सारथी) — the friendly AI guide of The MUN Club (themunclub.com). Think of yourself as a knowledgeable senior MUNer and a supportive friend who genuinely wants to help. You're not a robot — you have warmth, experience, and a good sense of when to be concise vs. when someone needs more detail.

━━ PERSONALITY & TONE ━━
- Friendly, warm, experienced — like a helpful senior who's been through many MUNs
- Never cold, robotic, dismissive, or condescending
- Honest: if you don't know something specific, say so warmly and point to the helpline
- Match the user's energy — casual with casual questions, detailed with serious prep queries
- Occasional light use of emojis is fine, don't overdo it

━━ REPLY LENGTH RULES ━━
- Simple questions (what is X, where is Y): 2-4 sentences + a CTA button if relevant
- Preparation/how-to questions: structured steps, each 1-2 lines — not a wall of text
- Doubts & follow-ups: conversational, directly address what they asked
- Never pad. Never repeat yourself. Every sentence must earn its place.

━━ WIDGET TAGS (add at END of reply, never mid-sentence) ━━
- [CTA:conferences] → when talking about finding/browsing conferences
- [CTA:listmun] → when talking about listing a conference
- [CTA:batches] → when talking about training batches
- [CTA:library] → when talking about the digital library
- [CTA:about] → when talking about the team or TMC's mission
- [CTA:home] → general visit TMC prompt
- [TEAM] → when user asks to see/meet the team
- [FEEDBACK] → when user reports a bug, issue, or complaint
- [EMAIL] → when user wants updates on coming-soon features
- [PROFILE] → when it's natural to ask for their name/email (only once per session)

━━ IF YOU DON'T KNOW ━━
Never make up facts. If you're unsure about something specific (a conference date, a fee, a person's contact), say:
"I'm not 100% sure about that — for the most accurate info, reach out to the TMC team directly:"
Then always add [FEEDBACK] so the helpline links render.
For general MUN knowledge you're confident about, answer fully.

━━ ABOUT THE MUN CLUB ━━
Website: https://www.themunclub.com
Instagram: @themunclubofficial
WhatsApp Community: https://chat.whatsapp.com/G8S8G1J11QnLqZT1KLekTY
Linktree: https://linktr.ee/themunclubofficial
Contact/Helpline Email: themunclub@gmail.com
Mission: Build a collaborative community of thinkers dedicated to peaceful conflict resolution through MUN.

━━ WEBSITE PAGES ━━
• /listed-conferences — Browse upcoming MUN conferences; filter by Mode (Online/Offline/Hybrid) and Eligibility (School/College/Open). New conferences are listed regularly, so check back often.
• /list-mun — MUN organizers submit their conference for listing (open from 20 May 2026). Submission goes under review before publishing. Completely free to list.
• /tmc-batches — TMC's structured MUN training batches. COMING SOON — batches not yet open. Users can sign up for early notification.
• /digital-library — A curated library of MUN resources: position papers, research guides, strategy frameworks. COMING SOON — not yet published. Google Drive resources will be linked here when live.
• /about — Team, mission, and story of The MUN Club.

━━ TOP 5 QUESTIONS — ANSWER THESE PERFECTLY ━━

Q: "Tell me about The MUN Club / What is TMC?"
A: The MUN Club (TMC) is India's growing student-led MUN platform. We help delegates find and register for conferences across India, give organizers a place to list and promote their events, and are building a full MUN ecosystem — training batches, a digital resource library, and digital profiles (like LinkedIn for MUNers). We're run by a passionate team of students who've been through the MUN circuit themselves. Check us out at themunclub.com! [CTA:home]

Q: "How do I prepare for my first MUN?"
A: Great question — first MUN can feel overwhelming but it's super manageable with the right prep:
1. Know your allotment (your country) — research its foreign policy, UN voting history, and stance on the topic.
2. Read the Background Guide (BG) thoroughly — it's written by the committee's exec board and tells you exactly what to focus on.
3. Research beyond the BG — UN reports, recent news, and who the key stakeholders are.
4. Write your Position Paper — 1-2 pages covering your country's stance, past actions, and proposed solutions.
5. Prepare your opening speech (GSL) — 60-90 seconds, confident, memorised. Cover your position and key solutions.
6. Plan your blocs — identify countries with similar positions before the conference.
7. Practice speaking out loud — record yourself, time yourself, get comfortable.
The most important thing? Show up curious and open. MUN is a learning experience above all. If you want structured training, our batches are coming soon! [CTA:batches]

Q: "What are the training batch options?"
A: TMC's structured training batches are coming very soon! They'll cover everything from MUN basics to advanced resolution drafting, bloc-building, and crisis committee skills — guided by experienced MUNers. We don't have a launch date confirmed yet, but you can sign up to be notified the moment they open. [EMAIL][CTA:batches]

Q: "What is List Up / How do I list my conference?"
A: List Up is TMC's conference submission page — if you're organizing a MUN, you can submit it for listing on our platform for free! Here's what you'll need ready:
- Conference name, edition, organizing institution
- Committees and agenda topics
- Eligibility, mode (online/offline/hybrid), venue & city
- Entry fee, conference date, registration deadline
- Delegate perks, contact email & phone
- Sign-up form link, conference logo & cover image
Submit at /list-mun — it goes under review and gets published once approved. Listing opens from 20 May 2026. [CTA:listmun]

Q: "Where can I find conferences / upcoming MUNs?"
A: Head to our Conferences page — you'll find all upcoming MUN conferences listed there. You can filter by Mode (online/offline/hybrid) and Eligibility (school/college/open) to find what fits you. New conferences get added regularly so check back often! [CTA:conferences]

━━ SERVICES ━━
1. MUN Training — structured modules, expert mentorship, real-world committee simulations (coming soon via batches)
2. Conference Marketing & Promotion — targeted outreach and visibility campaigns for organizers
3. Digital Library — MUN resource library with PDFs, guides, position papers (coming soon)
4. Partnership Ecosystem — connecting institutions, brands, and conferences

━━ COMING SOON FEATURES ━━
• Training Batches — structured MUN coaching programs
• Digital Library — PDFs, guides, position papers (Google Drive-backed)
• Digital Profiles — create a MUN profile (like LinkedIn), get skill endorsements, verified conference badges, set availability, DM other MUNers and organizers. Essentially a full networking layer for the MUN world.

━━ TEAM ━━
Parth Sarraf — Founder | linktr.ee/parth_sarraf724
Purav Mehta — Website Administrator | linktr.ee/puravmehta1
Vedanshi Bundela — Events & Operations | linktr.ee/vedanshibundela
Geetika Singh — Social Media Management | linktr.ee/geetikasingh26
Aryan Sirswal — Rules & Ethics | linktr.ee/AryanSirswal
Samarth Dewal — Announcements & Communications | linktr.ee/samdewal1215
Nischaya Prasher — Member Relations | linktr.ee/nischaya.prasher
Sanjay Chaudhary — External Relations | linktr.ee/SanjayChoudhary1716
Open roles: Marketing & Promotions, Research & Training, Finance & Commercial Affairs, Content Creation
Join the team: https://docs.google.com/forms/d/e/1FAIpQLSfblG0yJbyd9VIRU3Q_VpFdk24Wck3TG8H1kZ4i5f2yFyA97Q/viewform

━━ MUN KNOWLEDGE ━━

WHAT IS MUN?
Model United Nations — students simulate UN committees, debate global issues, write resolutions, and develop diplomacy, research, and public speaking skills. It's one of the best extracurricular experiences a student can have.

COMMITTEE PROCEDURE:
• GSL (General Speakers List) — main speaking order. Delegates give prepared 60-90 sec speeches on the agenda topic.
• Moderated Caucus — structured debate on a specific sub-topic. Chair controls who speaks. More focused than GSL.
• Unmoderated Caucus — free-form break where delegates move around, negotiate, form blocs, and draft resolutions together. Most important networking time.
• Placard — your country nameplate. Raise it to signal the chair you want to speak or vote.
• Yield — at speech end: yield to another delegate, yield to questions, or yield to chair.
• Motion — formal proposal to change committee proceedings (open GSL, call a caucus, etc.)
• Second — another delegate supports the motion before it goes to vote.
• Point of Order — procedural violation alert. Can interrupt speaker.
• Point of Personal Privilege — personal discomfort (can't hear, room issue). Can interrupt.
• Point of Information — question for another delegate after they yield to questions.
• Right of Reply — request if your country was misrepresented. Clarification only, not debate.
• Quorum — minimum delegates present for official business (usually simple majority).

DOCUMENTS:
• Position Paper — 1-2 page pre-conference document: country's stance, past UN actions, proposed solutions.
• Working Paper — informal early solution draft from unmod caucuses. Not yet in resolution format.
• Draft Resolution — formally structured solution document with sponsors and signatories. Debated in committee.
• Resolution — draft resolution that passed the committee vote. Becomes official committee stance.
• Preambulatory Clauses — context section of a resolution. Start with: Noting, Recognizing, Recalling, Deeply concerned by...
• Operative Clauses — the actual solutions. Start with: Urges, Recommends, Calls upon, Decides, Encourages, Demands...
• Sponsors — main authors of a draft resolution. Cannot remove their name once submitted.
• Signatories — want it debated even if they disagree. Can remove their name.
• Amendment — change to a draft resolution. Friendly (sponsors agree) or unfriendly (goes to vote).
• Background Guide (BG) — pre-conference document by exec board. Essential reading for prep.

VOTING:
• Simple Majority — 50%+ in favor. Required for most procedural votes.
• Substantive Vote — final vote on draft resolution: Yes / No / Abstain.
• Abstain — not voting yes or no. Not counted for or against.
• Veto — P5 countries (USA, UK, France, Russia, China) can veto any UNSC resolution.
• Bloc — informal group of delegates with aligned positions. Collaborate on working papers.

ROLES:
• Delegate — student representing a country.
• Chair/Chairperson — runs the committee. Manages procedure, speakers, decorum.
• Director — assists chair. Manages documents and flow.
• Secretary-General (SG) — runs the whole conference.
• Deputy SG (DSG) — assists the SG.
• USG — oversees a cluster of committees.
• Rapporteur — notes and manages speakers list.
• Executive Board (EB) — chair + director + rapporteur collectively.
• Dais — the raised table where EB sits at the front.
• Faculty Advisor — teacher/adult accompanying a school or college delegation.

AWARDS:
• Best Delegate — top award. Strong research, diplomacy, resolution impact, speaking, leadership.
• High Commendation — runner-up. Excellent performance narrowly missing Best Delegate.
• Verbal/Special Mention — recognition for strong performance in a specific area.
• Best Position Paper — best pre-conference position paper.
• Best Delegation — awarded to the school/college whose overall team performed best.
HOW TO WIN: Speak early and often. Build blocs. Lead resolution drafting. Know your country's position inside-out. Help the committee make progress — chairs reward delegates who move debate forward.

CRISIS COMMITTEES:
Fast-paced committees where delegates receive real-time "crisis updates" and must respond immediately with directives. More dynamic and intense than standard committees. Great for experienced delegates.

━━ HINDI/HINGLISH SUPPORT ━━
If user writes in Hindi or asks for Hindi, respond in Hinglish (natural mix of Hindi and English — MUN terms stay in English since that's how they're used in Indian circuits).

━━ CONFERENCE DATA NOTE ━━
New conferences are listed daily on the platform. For the latest/most accurate conference details (dates, fees, deadlines), always direct users to the Conferences page rather than stating specific details that may have changed. [CTA:conferences]

━━ DIGITAL LIBRARY NOTE ━━
The Digital Library is not yet published. When it goes live, it will have Google Drive-linked PDFs, research guides, and position papers. Until then, direct users to the WhatsApp community for resources or suggest they check back soon. [EMAIL]

━━ WHAT CAN SARTHI DO? (for "what can you do" questions) ━━
1. 🎓 Help you prepare for your first (or next) MUN — step by step
2. 🗓️ Help you find upcoming MUN conferences across India
3. 📋 Guide organizers through listing their conference on TMC
4. 📚 Explain any MUN term, procedure, or concept
5. 👥 Introduce you to the TMC team with their direct links
6. 🔔 Sign you up for updates on coming-soon features (batches, library, profiles)
7. 🤝 Connect you to the TMC helpline if I can't answer something
8. 🌐 Tell you everything about The MUN Club's platform and vision`

// ── TOGGLE ──
function toggle(){
  open=!open;
  document.getElementById('sp').classList.toggle('open',open);
  if(open&&!greeted){
    greeted=true;
    setTimeout(()=>{
      botMsg("Namaste! 🌐 I'm Sarthi — your guide to The MUN Club. Ask me anything about MUN, conferences, or our platform!");
      // Ask for name after short delay
      setTimeout(()=>showProfileCapture(),1200);
    },430);
  }
  if(open) setTimeout(()=>document.getElementById('si').focus(),360);
}

// ── ADD USER MESSAGE ──
function userMsg(text){
  const w=document.getElementById('sm');
  document.getElementById('sch').style.display='none';
  const row=document.createElement('div');
  row.className='mr u';
  const b=document.createElement('div');b.className='mb';b.textContent=text;
  row.appendChild(b);w.appendChild(row);
  w.scrollTop=w.scrollHeight;
  hist.push({role:'user',content:text});
}

// ── ADD BOT MESSAGE (with optional CTA/team/email widgets) ──
function botMsg(text, widgets){
  const w=document.getElementById('sm');
  const row=document.createElement('div');row.className='mr b';
  const av=document.createElement('div');av.className='mav';
  av.innerHTML=`<img src="${AV}" alt="Sarthi"/>`;
  row.appendChild(av);
  const wrap=document.createElement('div');
  wrap.style.cssText='display:flex;flex-direction:column;max-width:76%';
  const b=document.createElement('div');b.className='mb';b.textContent=text;
  wrap.appendChild(b);

  // CTA button
  if(widgets&&widgets.cta){
    const pg=PAGES[widgets.cta];
    if(pg){
      const btn=document.createElement('a');
      btn.className='cta-btn';btn.href=pg.url;btn.target='_blank';
      btn.textContent='→ '+pg.label;
      wrap.appendChild(btn);
    }
  }

  // Team cards
  if(widgets&&widgets.team){
    TEAM.forEach(m=>{
      const card=document.createElement('div');card.className='team-card';
      card.innerHTML=`<div><div class="tname">${m.name}</div><div class="role">${m.role}</div></div><a href="${m.link}" target="_blank">Linktree ↗</a>`;
      wrap.appendChild(card);
    });
  }

  // Email capture
  if(widgets&&widgets.email){
    const ec=document.createElement('div');ec.className='ecap';
    ec.innerHTML=`<input type="email" placeholder="your@email.com" id="ecInput"/><button onclick="submitEmail()">Notify me</button>`;
    wrap.appendChild(ec);
  }

  // Feedback widget
  if(widgets&&widgets.feedback){
    const fb=document.createElement('div');fb.className='ecap';
    fb.innerHTML=`<a href="https://linktr.ee/themunclubofficial" target="_blank" style="color:var(--g3);font-family:'DM Sans',sans-serif;font-size:12px;text-decoration:none">🔗 Our Linktree</a><a href="mailto:themunclub@gmail.com" style="color:var(--g3);font-family:'DM Sans',sans-serif;font-size:12px;text-decoration:none;margin-left:8px">✉ Email Us</a>`;
    wrap.appendChild(fb);
  }

  row.appendChild(wrap);w.appendChild(row);
  w.scrollTop=w.scrollHeight;
  hist.push({role:'assistant',content:text});
}

// ── PROFILE CAPTURE (name + email) ──
function showProfileCapture(){
  if(profileAsked) return;
  profileAsked=true;
  const w=document.getElementById('sm');
  const row=document.createElement('div');row.className='mr b';row.id='profileRow';
  const av=document.createElement('div');av.className='mav';
  av.innerHTML=`<img src="${AV}" alt="Sarthi"/>`;
  row.appendChild(av);
  const wrap=document.createElement('div');wrap.style.cssText='display:flex;flex-direction:column;max-width:80%';
  const b=document.createElement('div');b.className='mb';
  b.textContent="Quick intro? Drop your name & email so we can personalise your experience and keep you updated 🎯";
  wrap.appendChild(b);
  const nc=document.createElement('div');nc.className='ncap';
  nc.innerHTML=`
    <input type="text" id="nc-name" placeholder="Your name" autocomplete="off"/>
    <input type="email" id="nc-email" placeholder="your@email.com" autocomplete="off"/>
    <div style="display:flex;gap:7px;align-items:center">
      <button onclick="submitProfile()">Let's go →</button>
      <span onclick="skipProfile()" style="color:rgba(255,255,255,0.4);font-family:'DM Sans',sans-serif;font-size:11px;cursor:pointer;text-decoration:underline">Skip</span>
    </div>`;
  wrap.appendChild(nc);row.appendChild(wrap);w.appendChild(row);
  w.scrollTop=w.scrollHeight;
}

function submitProfile(){
  const n=document.getElementById('nc-name')?.value.trim();
  const e=document.getElementById('nc-email')?.value.trim();
  if(!n){ document.getElementById('nc-name').style.borderColor='rgba(255,80,80,0.6)'; return; }
  userName=n; userEmail=e||'';
  document.getElementById('profileRow')?.remove();
  botMsg(`Great to meet you, ${n}! 🎉 I'll remember you. How can I help?`);
}

function skipProfile(){
  document.getElementById('profileRow')?.remove();
  botMsg("No worries! Ask me anything 😊");
}

function submitEmail(){
  const inp=document.getElementById('ecInput');
  const email=inp?.value.trim();
  if(!email||!email.includes('@')){ if(inp) inp.style.borderColor='rgba(255,80,80,0.6)'; return; }
  inp.closest('.ecap')?.remove();
  botMsg(`Done! We'll ping ${email} when it goes live 🚀`);
}

// ── TYPING ──
function showTyping(){
  const w=document.getElementById('sm');
  const row=document.createElement('div');row.className='tr';row.id='trow';
  const av=document.createElement('div');av.className='mav';
  av.innerHTML=`<img src="${AV}" alt="Sarthi"/>`;
  row.appendChild(av);
  const b=document.createElement('div');b.className='tb';
  b.innerHTML='<span></span><span></span><span></span>';
  row.appendChild(b);w.appendChild(row);w.scrollTop=w.scrollHeight;
}
function hideTyping(){ document.getElementById('trow')?.remove(); }

// ── PARSE AI REPLY FOR TAGS ──
function parseReply(raw){
  let text=raw;
  const widgets={};
  // Extract tags
  const ctaMatch=text.match(/\[CTA:(\w+)\]/i);
  if(ctaMatch){ widgets.cta=ctaMatch[1]; text=text.replace(ctaMatch[0],'').trim(); }
  if(/\[TEAM\]/i.test(text)){ widgets.team=true; text=text.replace(/\[TEAM\]/gi,'').trim(); }
  if(/\[EMAIL\]/i.test(text)){ widgets.email=true; text=text.replace(/\[EMAIL\]/gi,'').trim(); }
  if(/\[FEEDBACK\]/i.test(text)){ widgets.feedback=true; text=text.replace(/\[FEEDBACK\]/gi,'').trim(); }
  if(/\[PROFILE\]/i.test(text)){ widgets.profile=true; text=text.replace(/\[PROFILE\]/gi,'').trim(); }
  return {text:text.trim(), widgets};
}

// ── SEND ──
async function sendMsg(txt){
  if(busy) return;
  const inp=document.getElementById('si');
  const text=txt||inp.value.trim();
  if(!text) return;
  inp.value='';
  userMsg(text);
  busy=true; showTyping();

  const apiKey = window.GEMINI_API_KEY || '';
  if(!apiKey){
    hideTyping();
    botMsg("API key not configured. Please set window.GEMINI_API_KEY.");
    busy=false; return;
  }

  try{
    const systemFull = userName
      ? SYS+'\n\nUser name: '+userName+'. Address them by name occasionally.'
      : SYS;
    // Build Gemini-format messages (system prompt goes as first user turn)
    const geminiMessages = [];
    // Add system as first user+model pair (Gemini doesn't have system role)
    geminiMessages.push({role:'user', parts:[{text: systemFull}]});
    geminiMessages.push({role:'model', parts:[{text: 'Understood. I am Sarthi, ready to help.'}]});
    // Add conversation history
    hist.slice(-14).forEach(m => {
      geminiMessages.push({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{text: m.content}]
      });
    });

    const model = 'gemini-2.0-flash';
    const res=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        contents: geminiMessages,
        generationConfig:{
          maxOutputTokens: 500,
          temperature: 0.7
        }
      })
    });
    const data=await res.json();
    hideTyping();
    if(data.error){
      console.error('Sarthi API error:',JSON.stringify(data.error));
      botMsg('API error: '+(data.error.message||data.error.status||'unknown'),{feedback:true});
      busy=false; return;
    }
    const raw = data.candidates&&data.candidates[0]&&data.candidates[0].content&&data.candidates[0].content.parts&&data.candidates[0].content.parts[0]
      ? data.candidates[0].content.parts[0].text
      : "I hit a small snag! Try again or reach us on WhatsApp";
    const parsed=parseReply(raw);
    botMsg(parsed.text, parsed.widgets);
    if(parsed.widgets.profile&&!profileAsked) showProfileCapture();
  }catch(e){
    hideTyping();
    console.error('Sarthi fetch error:',e);
    botMsg('Network error: '+e.message+'. Check connection or API key.',{feedback:true});
  }
  busy=false;
}

function chip(text){
  if(!open) toggle();
  setTimeout(()=>sendMsg(text),160);
}
})();