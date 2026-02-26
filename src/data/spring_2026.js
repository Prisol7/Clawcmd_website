export const Spring_2026 = [
  {
    date: '2026-01-20',
    event: 'Class Presentations',
    type: 'meeting',
    description: 'Members present projects and ideas to kick off the semester. Come show what you\'ve been working on.'
  },
  {
    date: '2026-01-27',
    event: 'Kickoff Meeting',
    type: 'meeting',
    description: 'Spring semester kickoff — meet the board, learn what\'s planned, and get plugged in.'
  },
  {
    date: '2026-02-03',
    event: 'Password Cracking Workshop',
    type: 'workshop',
    description: 'Hands-on session covering Hashcat, John the Ripper, and the fundamentals of password security.'
  },
  {
    date: '2026-02-10',
    event: 'CTF: picoCTF',
    type: 'ctf',
    description: 'Compete together in picoCTF — Carnegie Mellon\'s beginner-friendly capture the flag competition.'
  },
  {
    date: '2026-02-17',
    event: 'Networking for Hackers (Gone Wrong Edition)',
    type: 'workshop',
    description: 'TCP/IP, protocols, and how attackers exploit network weaknesses. Fun, chaotic, educational.'
  },
  {
    date: '2026-02-24',
    event: 'Cybersecurity Tools: Nmap & Wireshark',
    type: 'workshop',
    description: 'Master the essentials — network scanning with Nmap and deep packet analysis with Wireshark.'
  },
  {
    date: '2026-03-03',
    event: 'Wi-Fi Hacking Workshop',
    type: 'workshop',
    description: 'WPA2 vulnerabilities, aircrack-ng, and responsible disclosure in wireless security.'
  },
  {
    date: '2026-03-10',
    event: 'OSINT & Steganography',
    type: 'workshop',
    description: 'Open source intelligence gathering and hiding/finding data hidden in plain sight.'
  },
  {
    date: '2026-03-17',
    event: 'Wardriving Workshop',
    type: 'workshop',
    description: 'Take security into the field — map WiFi networks and analyze the wireless landscape of LA.'
  },
  {
    date: '2026-03-24',
    event: 'Easter Egg Trail CTF',
    type: 'ctf',
    description: 'A themed CTF event with hidden clues and challenges spread across campus. Find them all.'
  },
  {
    date: '2026-03-31',
    event: 'TBD',
    type: 'meeting',
    description: 'Details coming soon. Stay tuned to Discord and Instagram for updates.'
  },
  {
    date: '2026-04-07',
    event: 'Web Exploitation',
    type: 'workshop',
    description: 'SQL injection, XSS, CSRF — learn how web apps break and how to lock them down.'
  },
  {
    date: '2026-04-14',
    event: 'Scripting (PowerShell & Bash)',
    type: 'workshop',
    description: 'Automate security tasks using PowerShell and Bash for both offensive and defensive ops.'
  },
  {
    date: '2026-04-21',
    event: 'Encryption & Decryption',
    type: 'workshop',
    description: 'From Caesar ciphers to AES — understand the math and tools behind modern cryptography.'
  },
  {
    date: '2026-04-28',
    event: 'Lockpicking Workshop',
    type: 'workshop',
    description: 'Physical security demystified. Hands-on lockpicking to understand physical access control.'
  },
  {
    date: '2026-05-05',
    event: 'Study-a-thon',
    type: 'study',
    description: 'Finals prep study session. Bring your books, we\'ll bring the caffeine and good vibes.'
  },
  {
    date: '2026-05-12',
    event: 'TBD',
    type: 'meeting',
    description: 'Details coming soon. Stay tuned to Discord and Instagram for updates.'
  },
  {
    date: '2026-05-19',
    event: 'Send-Off Event',
    type: 'event',
    description: 'End of semester celebration. Toast to the year\'s wins and send off our graduating seniors.'
  }
];

function parseLocalDate(dateStr) {
  if (!dateStr) return new Date(NaN);
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (m) {
    const [, y, mo, d] = m;
    return new Date(Number(y), Number(mo) - 1, Number(d));
  }
  return new Date(dateStr);
}

export function getUpcomingEvent(referenceDate = new Date()) {
  const ref = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
    12, 0, 0, 0
  );
  return Spring_2026.find(e => {
    const d = parseLocalDate(e.date);
    if (isNaN(d)) return false;
    d.setHours(12, 0, 0, 0);
    return d >= ref;
  }) || null;
}

export function getPastEvents(referenceDate = new Date()) {
  const ref = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
    23, 59, 59
  );
  return Spring_2026.filter(e => {
    const d = parseLocalDate(e.date);
    return !isNaN(d) && d <= ref;
  });
}

export function formatEventDate(dateStr) {
  const d = parseLocalDate(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function formatEventDateShort(dateStr) {
  const d = parseLocalDate(dateStr);
  if (isNaN(d)) return dateStr;
  return `${d.getMonth() + 1}/${d.getDate()}`;
}
