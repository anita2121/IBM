/* ============================================================
   AI Onboarding Buddy – script.js  (Redesign v2)
   Data adalah contoh simulasi. Bukan kebijakan perusahaan nyata.
   ============================================================ */

'use strict';

// ═══════════════════════════════════════════════════════════════
// KNOWLEDGE BASE
// ═══════════════════════════════════════════════════════════════
const KB = [
  {
    keywords: ['bantuan', 'help', 'apa saja', 'topik', 'bisa apa', 'fitur'],
    answer: `Berikut topik yang bisa saya bantu:<br>
<ul>
  <li>📅 <b>Hari pertama</b> – alur onboarding hari pertama</li>
  <li>🕐 <b>Absensi</b> – prosedur absensi &amp; jam kerja</li>
  <li>🏖️ <b>Cuti</b> – kebijakan &amp; pengajuan cuti</li>
  <li>💰 <b>Gaji &amp; tunjangan</b> – jadwal &amp; komponen gaji</li>
  <li>🏢 <b>Fasilitas</b> – fasilitas yang tersedia</li>
  <li>👔 <b>Kode etik</b> – etika &amp; perilaku di tempat kerja</li>
  <li>📧 <b>Komunikasi</b> – alat komunikasi resmi</li>
  <li>🔒 <b>Keamanan data</b> – kebijakan keamanan informasi</li>
  <li>📋 <b>SOP</b> – panduan prosedur operasional</li>
  <li>🆘 <b>Darurat</b> – prosedur keadaan darurat</li>
</ul>
Ketik salah satu kata kunci di atas untuk memulai!`
  },
  {
    keywords: ['hari pertama', 'hari ke-1', 'pertama masuk', 'mulai kerja', 'onboarding pertama'],
    answer: `<b>📅 Alur Onboarding Hari Pertama</b><br><br>
<ul>
  <li><b>08:00</b> – Registrasi &amp; penerimaan ID card di resepsionis lantai 1</li>
  <li><b>08:30</b> – Orientasi umum bersama HR (briefing 60 menit)</li>
  <li><b>09:30</b> – Tur keliling kantor bersama buddy karyawan</li>
  <li><b>10:00</b> – Penyerahan perangkat kerja (laptop, akses email, badge)</li>
  <li><b>11:00</b> – Perkenalan dengan tim divisi</li>
  <li><b>12:00</b> – Makan siang bersama tim</li>
  <li><b>13:00</b> – Sesi onboarding digital (LMS &amp; sistem internal)</li>
  <li><b>15:00</b> – Review target 30 hari bersama supervisor</li>
</ul>
<i>Pastikan membawa dokumen yang diminta HR sebelumnya.</i>`
  },
  {
    keywords: ['absensi', 'hadir', 'jam kerja', 'masuk kerja', 'presensi', 'clock in', 'check in'],
    answer: `<b>🕐 Prosedur Absensi</b><br><br>
<ul>
  <li>Jam kerja standar: <b>08:00 – 17:00</b> (Senin–Jumat)</li>
  <li>Absen masuk &amp; pulang wajib melalui <b>aplikasi MyHR</b> atau mesin fingerprint</li>
  <li>Terlambat &gt;15 menit wajib lapor ke supervisor</li>
  <li>WFH diajukan H-1 melalui aplikasi, maksimal <b>2 hari/minggu</b></li>
  <li>Tidak hadir tanpa keterangan dihitung sebagai alpha</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['cuti', 'libur', 'izin', 'vacation', 'leave', 'sakit'],
    answer: `<b>🏖️ Kebijakan Cuti</b><br><br>
<ul>
  <li><b>Cuti Tahunan:</b> 12 hari/tahun (aktif setelah 3 bulan masa kerja)</li>
  <li><b>Cuti Sakit:</b> Dilampiri surat dokter untuk &gt;2 hari berturut-turut</li>
  <li><b>Cuti Melahirkan:</b> 3 bulan untuk ibu, 3 hari untuk ayah</li>
  <li><b>Cuti Pernikahan:</b> 3 hari</li>
  <li><b>Cuti Keluarga Meninggal:</b> 3 hari</li>
</ul>
<b>Cara Pengajuan:</b>
<ul>
  <li>Buka aplikasi MyHR → Menu Cuti → Ajukan Cuti</li>
  <li>Isi tanggal, jenis cuti, dan keterangan</li>
  <li>Tunggu persetujuan supervisor (maks. 1x24 jam)</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['gaji', 'salary', 'upah', 'tunjangan', 'payroll', 'slip gaji', 'komponen gaji'],
    answer: `<b>💰 Informasi Gaji &amp; Tunjangan</b><br><br>
<ul>
  <li>Gaji dikirim setiap <b>tanggal 25</b> bulan berjalan</li>
  <li>Slip gaji tersedia di aplikasi MyHR → Payroll</li>
  <li>Komponen: Gaji pokok + Tunjangan jabatan + Tunjangan transportasi</li>
  <li>BPJS Kesehatan &amp; Ketenagakerjaan ditanggung perusahaan dan karyawan (sesuai regulasi)</li>
  <li>THR dibayarkan H-7 sebelum Lebaran</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi. Besaran gaji sesuai kontrak masing-masing.</i>`
  },
  {
    keywords: ['fasilitas', 'benefit', 'kantin', 'parkir', 'gym', 'kesehatan', 'asuransi', 'benefit karyawan'],
    answer: `<b>🏢 Fasilitas Karyawan</b><br><br>
<ul>
  <li>🍽️ Kantin bersubsidi di lantai 2 (diskon 50% untuk karyawan)</li>
  <li>🚗 Area parkir gratis (daftar nomor kendaraan ke GA)</li>
  <li>💪 Gym &amp; ruang istirahat di lantai 6</li>
  <li>🏥 Asuransi kesehatan (rawat inap &amp; jalan) – kartu diterima dalam 2 minggu onboarding</li>
  <li>📚 Perpustakaan digital &amp; akses e-learning Udemy for Business</li>
  <li>☕ Pantry tersedia di setiap lantai</li>
  <li>🖥️ Laptop &amp; headset disediakan untuk kebutuhan kerja</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['etika', 'kode etik', 'perilaku', 'dress code', 'pakaian', 'conduct', 'sopan'],
    answer: `<b>👔 Kode Etik &amp; Perilaku</b><br><br>
<ul>
  <li>Berpakaian profesional (business casual Senin–Kamis, smart casual Jumat)</li>
  <li>Menjaga kerahasiaan informasi perusahaan dan klien</li>
  <li>Dilarang menggunakan perangkat kerja untuk keperluan pribadi yang tidak berkaitan</li>
  <li>Menjaga kebersihan dan kerapian area kerja</li>
  <li>Menghormati rekan kerja tanpa diskriminasi</li>
  <li>Konflik kepentingan wajib dilaporkan ke HR</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['komunikasi', 'email', 'slack', 'teams', 'chat', 'alat komunikasi', 'microsoft'],
    answer: `<b>📧 Alat Komunikasi Resmi</b><br><br>
<ul>
  <li><b>Email:</b> Microsoft Outlook (nama.belakang@perusahaan.com)</li>
  <li><b>Chat Internal:</b> Microsoft Teams (untuk tim &amp; proyek)</li>
  <li><b>Video Call:</b> Microsoft Teams / Zoom (untuk meeting eksternal)</li>
  <li><b>Dokumen:</b> Microsoft SharePoint &amp; OneDrive</li>
  <li><b>Manajemen Tugas:</b> Jira / Trello (sesuai divisi)</li>
</ul>
Akun dikirim ke email pribadi dalam 1x24 jam hari pertama.<br>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['keamanan', 'data', 'password', 'privasi', 'security', 'rahasia'],
    answer: `<b>🔒 Keamanan Data &amp; Informasi</b><br><br>
<ul>
  <li>Gunakan password minimal 8 karakter (huruf besar, kecil, angka, simbol)</li>
  <li>Ganti password akun setiap 90 hari</li>
  <li>Jangan bagikan password kepada siapapun termasuk IT support</li>
  <li>Kunci layar saat meninggalkan meja (<kbd>Win+L</kbd> / <kbd>Cmd+Q</kbd>)</li>
  <li>Dilarang menyimpan data klien di penyimpanan cloud pribadi</li>
  <li>Laporkan insiden keamanan ke <b>it.security@perusahaan.com</b></li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['sop', 'prosedur', 'standar', 'standard', 'panduan'],
    answer: `<b>📋 Panduan SOP Utama</b><br><br>
Dokumen SOP tersedia di SharePoint → Folder "SOP &amp; Kebijakan". Ringkasan:<br><br>
<ul>
  <li><b>SOP Absensi &amp; Kehadiran</b> – ketik "absensi" untuk detail</li>
  <li><b>SOP Pengajuan Cuti</b> – ketik "cuti" untuk detail</li>
  <li><b>SOP Pengelolaan Aset IT</b> – lapor kehilangan ke GA dalam 1x24 jam</li>
  <li><b>SOP Pengadaan Barang</b> – melalui form intranet, persetujuan manager</li>
  <li><b>SOP Perjalanan Dinas</b> – booking minimal H-3, reimburse maks. H+7</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['darurat', 'emergency', 'bahaya', 'kebakaran', 'evakuasi', 'k3'],
    answer: `<b>🆘 Prosedur Keadaan Darurat</b><br><br>
<ul>
  <li>Nomor darurat internal: <b>ext. 911</b></li>
  <li>Titik kumpul evakuasi: Parkiran utama (area P1)</li>
  <li>Alarm kebakaran → tetap tenang, ikuti petunjuk warden lantai</li>
  <li>APAR (pemadam) tersedia di setiap ujung koridor</li>
  <li>Jangan gunakan lift saat evakuasi</li>
  <li>Warden K3 tiap lantai menggunakan rompi kuning</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi.</i>`
  },
  {
    keywords: ['kontrak', 'probasi', 'percobaan', 'masa percobaan', 'pkwt', 'pkwtt'],
    answer: `<b>📝 Informasi Kontrak Kerja</b><br><br>
<ul>
  <li>Masa probasi: <b>3 bulan</b> sejak tanggal bergabung</li>
  <li>Evaluasi probasi dilakukan di bulan ke-2 dan ke-3</li>
  <li>Setelah probasi lulus: pengangkatan sebagai karyawan tetap (PKWTT)</li>
  <li>Kontrak kerja dapat diperpanjang maksimal 2x sebelum pengangkatan</li>
  <li>Salinan kontrak tersimpan di MyHR → Dokumen Saya</li>
</ul>
<i>⚠️ Ini adalah data contoh simulasi. Detail kontrak merujuk dokumen resmi HR.</i>`
  }
];

// ═══════════════════════════════════════════════════════════════
// SOP DATA
// ═══════════════════════════════════════════════════════════════
const SOP_DATA = [
  { icon: '🕐', title: 'Absensi & Jam Kerja', body: 'Jam kerja 08:00–17:00 (Sen–Jum). Absen wajib via aplikasi MyHR atau fingerprint. WFH maksimal 2 hari/minggu dengan pengajuan H-1.', tag: 'Administrasi' },
  { icon: '🏖️', title: 'Pengajuan Cuti', body: 'Cuti tahunan 12 hari/tahun (aktif setelah 3 bulan). Ajukan via MyHR → Cuti. Persetujuan supervisor maksimal 1x24 jam.', tag: 'SDM' },
  { icon: '💻', title: 'Pengelolaan Aset IT', body: 'Perangkat kerja adalah milik perusahaan. Kerusakan/kehilangan dilaporkan ke GA dalam 1x24 jam. Dilarang instal software tanpa izin IT.', tag: 'IT' },
  { icon: '✈️', title: 'Perjalanan Dinas', body: 'Booking minimal H-3 melalui intranet. Reimburse tiket, hotel, dan per diem sesuai kebijakan. Laporan perjalanan diserahkan maks. H+7.', tag: 'Keuangan' },
  { icon: '🛒', title: 'Pengadaan Barang', body: 'Ajukan kebutuhan barang via form intranet. Nilai <1 juta disetujui supervisor, nilai >1 juta perlu approval manager. Proses 3–5 hari kerja.', tag: 'Keuangan' },
  { icon: '🔒', title: 'Keamanan Informasi', body: 'Password minimal 8 karakter, ganti tiap 90 hari. Data klien tidak boleh disimpan di cloud pribadi. Laporkan insiden ke it.security@perusahaan.com.', tag: 'IT' },
  { icon: '🤝', title: 'Kode Etik & Perilaku', body: 'Berpakaian profesional, menjaga kerahasiaan perusahaan, menghormati rekan tanpa diskriminasi. Konflik kepentingan wajib dilaporkan ke HR.', tag: 'HR' },
  { icon: '🆘', title: 'Prosedur Darurat', body: 'Nomor darurat ext. 911. Titik kumpul evakuasi di P1. Ikuti arahan warden rompi kuning. Jangan gunakan lift saat evakuasi.', tag: 'K3' }
];

// ═══════════════════════════════════════════════════════════════
// TASKS DATA
// ═══════════════════════════════════════════════════════════════
const TASKS_DATA = [
  {
    group: 'Minggu Pertama',
    items: [
      { id: 'T01', title: 'Registrasi & ambil ID card', desc: 'Datang ke resepsionis lantai 1 dengan dokumen identitas', badge: 'Wajib', badgeClass: 'badge-urgent' },
      { id: 'T02', title: 'Orientasi HR', desc: 'Ikuti sesi briefing onboarding bersama tim HR', badge: 'Wajib', badgeClass: 'badge-urgent' },
      { id: 'T03', title: 'Aktivasi email & akun perusahaan', desc: 'Cek inbox email pribadi untuk link aktivasi', badge: 'Wajib', badgeClass: 'badge-urgent' },
      { id: 'T04', title: 'Perkenalan dengan tim divisi', desc: 'Ikuti sesi perkenalan formal dengan seluruh anggota tim', badge: 'Normal', badgeClass: 'badge-normal' },
      { id: 'T05', title: 'Review target 30 hari bersama supervisor', desc: 'Diskusikan ekspektasi dan KPI awal bersama atasan', badge: 'Wajib', badgeClass: 'badge-urgent' },
    ]
  },
  {
    group: 'Bulan Pertama',
    items: [
      { id: 'T06', title: 'Selesaikan modul onboarding LMS', desc: 'Akses LMS melalui intranet, selesaikan 5 modul dasar', badge: 'Wajib', badgeClass: 'badge-urgent' },
      { id: 'T07', title: 'Daftar asuransi kesehatan', desc: 'Isi formulir BPJS dan asuransi swasta melalui HR', badge: 'Wajib', badgeClass: 'badge-urgent' },
      { id: 'T08', title: 'Setup tools & software kerja', desc: 'Instal semua software yang dibutuhkan bersama tim IT', badge: 'Normal', badgeClass: 'badge-normal' },
      { id: 'T09', title: 'Kenali proses bisnis utama divisi', desc: 'Baca dokumentasi proses di SharePoint divisi', badge: 'Normal', badgeClass: 'badge-normal' },
      { id: 'T10', title: 'Meeting 1-on-1 dengan supervisor', desc: 'Jadwalkan sesi check-in mingguan rutin', badge: 'Normal', badgeClass: 'badge-normal' },
    ]
  },
  {
    group: 'Pengembangan Awal',
    items: [
      { id: 'T11', title: 'Ikuti training teknis divisi', desc: 'Daftar ke HR untuk jadwal training internal', badge: 'Normal', badgeClass: 'badge-normal' },
      { id: 'T12', title: 'Bergabung di grup komunikasi tim', desc: 'Minta link grup Teams/Slack kepada buddy Anda', badge: 'Normal', badgeClass: 'badge-normal' },
      { id: 'T13', title: 'Eksplorasi portal karyawan (intranet)', desc: 'Pelajari menu-menu penting di portal internal', badge: 'Opsional', badgeClass: 'badge-optional' },
      { id: 'T14', title: 'Ikuti event community perusahaan', desc: 'Pantau kalender event di intranet', badge: 'Opsional', badgeClass: 'badge-optional' },
    ]
  }
];

// ═══════════════════════════════════════════════════════════════
// SUMMARY INFO
// ═══════════════════════════════════════════════════════════════
const SUMMARY_INFO = [
  {
    title: '🏢 Informasi Perusahaan',
    rows: [
      ['Nama Perusahaan', 'PT Contoh Maju Bersama (Simulasi)'],
      ['Alamat Kantor', 'Jl. Jenderal Sudirman No. 1, Jakarta Selatan'],
      ['Jam Operasional', 'Senin–Jumat, 08:00–17:00 WIB'],
      ['Hotline HR', 'ext. 1001 / hr@perusahaan.com'],
      ['Hotline IT', 'ext. 1002 / it@perusahaan.com'],
    ]
  },
  {
    title: '👤 Kontak Penting',
    rows: [
      ['HR Business Partner', 'Hubungi melalui ext. 1001'],
      ['IT Helpdesk', 'ext. 1002 atau tiket JIRA'],
      ['General Affairs', 'Hubungi melalui ext. 1003'],
      ['Keamanan / Security', 'ext. 911 (darurat) / ext. 1004 (non-darurat)'],
    ]
  }
];

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let conversationHistory = [];  // { role, text, time }
let taskState = {};            // { [id]: 'todo' | 'doing' | 'done' }
let currentSection = 'chat';

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set welcome timestamp
  const wt = document.getElementById('welcomeTime');
  if (wt) wt.textContent = nowStr();

  loadTaskState();
  renderSOP();
  renderTasks();
  renderSummary();
  renderHistory();
  renderDashboard();

  // Default active section is chat (already set via HTML class)
  currentSection = 'chat';
});

// ═══════════════════════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════════════════════
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

document.getElementById('sidebarClose').addEventListener('click', closeSidebar);

// ═══════════════════════════════════════════════════════════════
// SECTION TITLES
// ═══════════════════════════════════════════════════════════════
const SECTION_TITLES = {
  dashboard: 'Dashboard',
  chat:      'Chatbot AI',
  sop:       'Panduan SOP',
  tasks:     'Tugas & Aktivitas',
  summary:   'Ringkasan',
  history:   'Riwayat Chat'
};

// ═══════════════════════════════════════════════════════════════
// SECTION SWITCH
// ═══════════════════════════════════════════════════════════════
function switchSection(name) {
  currentSection = name;

  // deactivate
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // activate
  const sectionEl = document.getElementById('section-' + name);
  if (sectionEl) sectionEl.classList.add('active');
  const navEl = document.querySelector(`[data-section="${name}"]`);
  if (navEl) navEl.classList.add('active');

  // topbar
  document.getElementById('topbarTitle').textContent = SECTION_TITLES[name] || name;

  // clear btn — only on chat / history
  const clearBtn = document.getElementById('clearBtn');
  clearBtn.style.display = (name === 'chat' || name === 'history') ? 'flex' : 'none';

  // refresh when needed
  if (name === 'history') renderHistory();
  if (name === 'dashboard') renderDashboard();

  // scroll main to top for page sections
  if (name !== 'chat') window.scrollTo({ top: 0, behavior: 'smooth' });

  closeSidebar();
}

// init clear btn
document.getElementById('clearBtn').style.display = 'flex';

// ═══════════════════════════════════════════════════════════════
// CLEAR
// ═══════════════════════════════════════════════════════════════
function clearCurrentSection() {
  if (currentSection !== 'chat' && currentSection !== 'history') return;
  if (!confirm('Hapus seluruh riwayat percakapan?')) return;

  conversationHistory = [];
  const container = document.getElementById('chatMessages');
  container.innerHTML = '';
  // Add fresh greeting
  addBotMessage('Percakapan telah dihapus. Silakan mulai percakapan baru! 👋');
  renderHistory();
}

// ═══════════════════════════════════════════════════════════════
// CHAT — SEND
// ═══════════════════════════════════════════════════════════════
function sendMessage() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();

  if (!text) {
    showInputError('Silakan ketik pertanyaan Anda terlebih dahulu.');
    return;
  }
  if (text.length > 500) {
    showInputError('Pertanyaan terlalu panjang (maks. 500 karakter).');
    return;
  }

  clearInputError();
  addUserMessage(text);
  input.value = '';
  autoResize(input);
  setButtonLoading(true);

  // Simulate AI thinking delay
  const delay = 700 + Math.random() * 600;
  setTimeout(() => {
    const reply = findAnswer(text);
    addBotMessage(reply);
    setButtonLoading(false);
  }, delay);
}

function sendQuickPrompt(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}

function handleKeyDown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
}

// ═══════════════════════════════════════════════════════════════
// CHAT — ANSWER ENGINE
// ═══════════════════════════════════════════════════════════════
function findAnswer(query) {
  const q = query.toLowerCase().normalize('NFC');
  let best = null, bestScore = 0;

  for (const entry of KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += kw.length;
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }

  if (best) return best.answer;

  return `Maaf, saya belum menemukan jawaban untuk pertanyaan tersebut.<br><br>
Coba ketik <code>bantuan</code> untuk melihat daftar topik, atau hubungi HR di <b>ext. 1001</b>.<br><br>
<i>💡 Gunakan kata kunci: "cuti", "absensi", "gaji", "fasilitas", "sop", dll.</i>`;
}

// ═══════════════════════════════════════════════════════════════
// CHAT — RENDER MESSAGES
// ═══════════════════════════════════════════════════════════════
function addUserMessage(text) {
  const time = nowStr();
  conversationHistory.push({ role: 'user', text, time });

  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'message user-message';
  div.innerHTML = `
    <div class="msg-avatar user-av">ARS</div>
    <div class="msg-body">
      <span class="msg-sender">Anda</span>
      <div class="bubble">${escHtml(text)}</div>
      <span class="msg-time">${time}</span>
    </div>`;
  container.appendChild(div);
  scrollChat();
}

function addBotMessage(html) {
  const time = nowStr();
  conversationHistory.push({ role: 'bot', text: html, time });

  const container = document.getElementById('chatMessages');

  // typing indicator
  const typing = document.createElement('div');
  typing.className = 'message bot-message typing-indicator';
  typing.innerHTML = `
    <div class="msg-avatar bot-av">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    </div>
    <div class="bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  container.appendChild(typing);
  scrollChat();

  setTimeout(() => {
    if (container.contains(typing)) container.removeChild(typing);
    const div = document.createElement('div');
    div.className = 'message bot-message';
    div.innerHTML = `
      <div class="msg-avatar bot-av">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
      </div>
      <div class="msg-body">
        <span class="msg-sender">AI Onboarding Buddy</span>
        <div class="bubble">${html}</div>
        <span class="msg-time">${time}</span>
      </div>`;
    container.appendChild(div);
    scrollChat();
  }, 380);
}

function scrollChat() {
  const c = document.getElementById('chatMessages');
  if (c) c.scrollTop = c.scrollHeight;
}

function setButtonLoading(loading) {
  const btn = document.getElementById('sendBtn');
  if (!btn) return;
  btn.disabled = loading;
  btn.innerHTML = loading
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="10" style="animation:spin 1s linear infinite;transform-origin:center"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg>`;
}

// ═══════════════════════════════════════════════════════════════
// INPUT ERROR
// ═══════════════════════════════════════════════════════════════
function showInputError(msg) {
  clearInputError();
  const wrapper = document.querySelector('.chat-input-wrapper');
  const err = document.createElement('p');
  err.id = 'inputError';
  err.className = 'input-error-msg';
  err.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${msg}`;
  const hint = wrapper.querySelector('.input-hint');
  if (hint) hint.after(err);
  document.getElementById('chatInput').style.borderColor = '#dc2626';
}

function clearInputError() {
  const el = document.getElementById('inputError');
  if (el) el.remove();
  const inp = document.getElementById('chatInput');
  if (inp) inp.style.borderColor = '';
}

// ═══════════════════════════════════════════════════════════════
// SOP
// ═══════════════════════════════════════════════════════════════
function renderSOP() {
  const grid = document.getElementById('sopCards');
  if (!grid) return;
  grid.innerHTML = SOP_DATA.map(s => `
    <div class="sop-card">
      <div class="sop-card-top">
        <div class="sop-icon-box">${s.icon}</div>
        <div class="sop-card-title">${s.title}</div>
      </div>
      <div class="sop-card-body">${s.body}</div>
      <div class="sop-card-footer">
        <span class="sop-tag">${s.tag}</span>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════════════
// TASKS
// ═══════════════════════════════════════════════════════════════
function loadTaskState() {
  try {
    const saved = localStorage.getItem('onboarding_tasks_v2');
    taskState = saved ? JSON.parse(saved) : {};
  } catch { taskState = {}; }
}

function saveTaskState() {
  try { localStorage.setItem('onboarding_tasks_v2', JSON.stringify(taskState)); } catch {}
}

function cycleTask(id) {
  // Cycle: todo → doing → done → todo
  const cur = taskState[id] || 'todo';
  const next = cur === 'todo' ? 'doing' : cur === 'doing' ? 'done' : 'todo';
  taskState[id] = next;
  saveTaskState();
  renderTasks();
  renderDashboard();
}

function getTaskStats() {
  let total = 0, done = 0, doing = 0;
  TASKS_DATA.forEach(g => g.items.forEach(item => {
    total++;
    const s = taskState[item.id] || 'todo';
    if (s === 'done')  done++;
    if (s === 'doing') doing++;
  }));
  return { total, done, doing };
}

function renderTasks() {
  const container = document.getElementById('taskList');
  if (!container) return;
  const { total, done } = getTaskStats();

  container.innerHTML = TASKS_DATA.map(group => {
    const groupDone  = group.items.filter(i => (taskState[i.id] || 'todo') === 'done').length;
    const items = group.items.map(item => {
      const status = taskState[item.id] || 'todo';
      const isDone = status === 'done';
      const statusLabel  = status === 'todo' ? 'Belum Dimulai' : status === 'doing' ? 'Sedang Berjalan' : 'Selesai';
      const statusClass  = status === 'todo' ? 'status-todo' : status === 'doing' ? 'status-doing' : 'status-done';
      const itemClass    = status === 'doing' ? 'in-progress' : status === 'done' ? 'done done-item' : '';
      const checkSvg = isDone
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20,6 9,17 4,12"/></svg>`
        : '';
      return `
        <div class="task-item ${itemClass}" onclick="cycleTask('${item.id}')" title="Klik untuk ubah status">
          <div class="task-check">${checkSvg}</div>
          <div class="task-content">
            <div class="task-title">${item.title}</div>
            <div class="task-desc">${item.desc}</div>
          </div>
          <div class="task-meta">
            <span class="task-status-badge ${statusClass}">${statusLabel}</span>
            <span class="task-priority ${item.badgeClass}">${item.badge}</span>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="task-group">
        <div class="task-group-header">
          <span class="task-group-title">${group.group}</span>
          <span class="task-group-count">${groupDone}/${group.items.length} selesai</span>
        </div>
        ${items}
      </div>`;
  }).join('');

  // progress
  const pct = total ? Math.round((done / total) * 100) : 0;
  const fillEl = document.getElementById('progressFill');
  const textEl = document.getElementById('progressText');
  const pctEl  = document.getElementById('progressPct');
  if (fillEl) fillEl.style.width = pct + '%';
  if (textEl) textEl.textContent = `${done} / ${total} tugas selesai`;
  if (pctEl)  pctEl.textContent  = pct + '%';
}

// ═══════════════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════════════
function renderSummary() {
  const container = document.getElementById('summaryCards');
  if (!container) return;

  const { total, done, doing } = getTaskStats();
  const pct = total ? Math.round((done / total) * 100) : 0;
  const circumference = 251.2;
  const offset = circumference - (pct / 100) * circumference;

  const statsHtml = `
    <div class="summary-stats-grid">
      <div class="sum-stat-card">
        <div class="sum-stat-icon">📅</div>
        <div class="sum-stat-value">30</div>
        <div class="sum-stat-label">Hari Masa Onboarding</div>
      </div>
      <div class="sum-stat-card">
        <div class="sum-stat-icon">📋</div>
        <div class="sum-stat-value">${SOP_DATA.length}</div>
        <div class="sum-stat-label">Dokumen SOP</div>
      </div>
      <div class="sum-stat-card">
        <div class="sum-stat-icon">✅</div>
        <div class="sum-stat-value">${done}</div>
        <div class="sum-stat-label">Tugas Selesai</div>
      </div>
      <div class="sum-stat-card">
        <div class="sum-stat-icon">⏳</div>
        <div class="sum-stat-value">${doing}</div>
        <div class="sum-stat-label">Tugas Sedang Berjalan</div>
      </div>
    </div>`;

  const completionHtml = `
    <div class="completion-card">
      <div class="completion-ring">
        <svg width="88" height="88" viewBox="0 0 88 88">
          <circle class="ring-bg"   cx="44" cy="44" r="40"/>
          <circle class="ring-fill" cx="44" cy="44" r="40"
            style="stroke-dashoffset:${offset.toFixed(1)}"/>
        </svg>
        <div class="ring-text">${pct}%</div>
      </div>
      <div class="completion-info">
        <h3>Progress Onboarding: ${pct}%</h3>
        <p>${done} dari ${total} tugas telah diselesaikan.<br>
          ${pct < 50 ? 'Semangat! Anda baru saja memulai perjalanan onboarding.' :
            pct < 100 ? 'Bagus! Terus lanjutkan hingga semua tugas selesai.' :
            '🎉 Luar biasa! Semua tugas onboarding sudah selesai!'}</p>
      </div>
    </div>`;

  const infoHtml = SUMMARY_INFO.map(section => `
    <div class="info-block">
      <div class="info-block-title">${section.title}</div>
      <div class="info-table-card">
        ${section.rows.map(([k, v]) => `
          <div class="info-row">
            <div class="info-key">${k}</div>
            <div class="info-val">${v}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  container.innerHTML = statsHtml + completionHtml + infoHtml;
}

// ═══════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════
function renderDashboard() {
  renderDashStats();
  renderDashProgress();
}

function renderDashStats() {
  const el = document.getElementById('dashboardStats');
  if (!el) return;
  const { total, done, doing } = getTaskStats();
  const pct = total ? Math.round((done / total) * 100) : 0;
  el.innerHTML = `
    <div class="stat-card">
      <div class="stat-icon-box blue">📋</div>
      <div>
        <div class="stat-number">${SOP_DATA.length}</div>
        <div class="stat-label">Dokumen SOP</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon-box amber">📝</div>
      <div>
        <div class="stat-number">${total}</div>
        <div class="stat-label">Total Tugas</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon-box green">✅</div>
      <div>
        <div class="stat-number">${done}</div>
        <div class="stat-label">Tugas Selesai</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon-box sky">💬</div>
      <div>
        <div class="stat-number">${conversationHistory.filter(h=>h.role==='user').length}</div>
        <div class="stat-label">Pertanyaan Ditanyakan</div>
      </div>
    </div>`;
}

function renderDashProgress() {
  const { total, done } = getTaskStats();
  const pct = total ? Math.round((done / total) * 100) : 0;

  const fill   = document.getElementById('dashProgressFill');
  const badge  = document.getElementById('dashProgressBadge');
  const note   = document.getElementById('dashProgressNote');
  if (fill)  fill.style.width  = pct + '%';
  if (badge) badge.textContent = pct + '%';
  if (note) {
    note.textContent = pct === 0
      ? 'Mulai dengan menyelesaikan tugas di menu Tugas & Aktivitas.'
      : pct < 50
      ? `${done} dari ${total} tugas selesai. Terus semangat!`
      : pct < 100
      ? `Hampir selesai! ${total - done} tugas lagi tersisa.`
      : '🎉 Semua tugas onboarding telah diselesaikan!';
  }
}

// ═══════════════════════════════════════════════════════════════
// HISTORY
// ═══════════════════════════════════════════════════════════════
function renderHistory() {
  const container = document.getElementById('historyList');
  if (!container) return;

  if (!conversationHistory.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
          </svg>
        </div>
        <p class="empty-title">Belum Ada Riwayat</p>
        <p class="empty-sub">Mulai percakapan di menu Chatbot AI untuk melihat riwayat di sini.</p>
      </div>`;
    return;
  }

  container.innerHTML = `<div class="history-timeline">` +
    conversationHistory.map(item => `
      <div class="history-item ${item.role === 'user' ? 'hi-user' : 'hi-bot'}">
        <div class="history-item-header">
          <span class="hi-role ${item.role === 'user' ? 'hi-role-user' : 'hi-role-bot'}">
            ${item.role === 'user' ? '👤 Anda' : '🤖 AI Buddy'}
          </span>
          <span class="hi-time">${item.time}</span>
        </div>
        <div class="history-item-text">${item.role === 'user' ? escHtml(item.text) : item.text}</div>
      </div>`).join('') +
    `</div>`;
}

// ═══════════════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════════════
function nowStr() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}
