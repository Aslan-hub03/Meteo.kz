// site generator - Казпроект: Паводки

const fs=require("fs");
const path=require("path");
const os=require("os");
const base=path.join(os.homedir(),"Desktop","казпроект");
function w(f,c){fs.writeFileSync(f,c);console.log(`Created: ${f} (${c.length} bytes)`);}

// ==================== CSS ====================
const css=`
:root {
  --primary: #1a5276;
  --primary-light: #2980b9;
  --primary-dark: #0d2f4a;
  --accent: #e74c3c;
  --warning: #f39c12;
  --success: #27ae60;
  --bg: #f0f4f8;
  --bg-dark: #1a1a2e;
  --card: #ffffff;
  --text: #2c3e50;
  --text-light: #6c7a89;
  --text-white: #ecf0f1;
  --border: #dce1e6;
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
  --radius: 12px;
  --radius-sm: 8px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
}

/* HEADER */
.header {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo { display: flex; align-items: center; gap: 10px; }
.logo-icon { font-size: 28px; }
.logo h1 { color: #fff; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }

.nav { display: flex; gap: 4px; align-items: center; }

.nav-link {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  white-space: nowrap;
  cursor: pointer;
}

.nav-link:hover, .nav-link.active {
  background: rgba(255,255,255,0.15);
  color: #fff;
}

.nav-link.active { background: rgba(255,255,255,0.2); font-weight: 600; }

.burger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
}

/* ALERT BANNER */
.alert-banner {
  background: linear-gradient(90deg, var(--accent), #c0392b);
  color: #fff;
  padding: 12px 20px;
  text-align: center;
  font-weight: 500;
  animation: pulse-bg 3s ease-in-out infinite;
}

@keyframes pulse-bg {
  0%, 100% { background: linear-gradient(90deg, var(--accent), #c0392b); }
  50% { background: linear-gradient(90deg, #c0392b, var(--accent)); }
}

.alert-banner span { margin: 0 8px; }

/* MAIN */
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }

.section { display: none; }
.section.active { display: block; animation: fadeIn 0.3s ease; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* HERO */
.hero {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-light) 100%);
  color: #fff;
  border-radius: var(--radius);
  padding: 60px 40px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: rgba(255,255,255,0.03);
  border-radius: 50%;
}

.hero h2 { font-size: 36px; margin-bottom: 12px; position: relative; z-index: 1; }
.hero p { font-size: 18px; opacity: 0.9; margin-bottom: 24px; position: relative; z-index: 1; }
.hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
  white-space: nowrap;
}

.btn-primary { background: var(--primary); color: #fff; border-color: var(--primary); }
.btn-primary:hover { background: var(--primary-light); border-color: var(--primary-light); transform: translateY(-1px); }

.btn-accent { background: var(--accent); color: #fff; border-color: var(--accent); }
.btn-accent:hover { background: #c0392b; border-color: #c0392b; transform: translateY(-1px); }

.btn-outline { background: transparent; color: var(--primary); border-color: var(--primary); }
.btn-outline:hover { background: var(--primary); color: #fff; }

.btn-outline-light { background: transparent; color: #fff; border-color: rgba(255,255,255,0.5); }
.btn-outline-light:hover { background: rgba(255,255,255,0.15); border-color: #fff; }

.btn-warning { background: var(--warning); color: #fff; border-color: var(--warning); }
.btn-warning:hover { background: #e67e22; }

.btn-success { background: var(--success); color: #fff; border-color: var(--success); }

.btn-full { width: 100%; justify-content: center; }

.btn-sm { padding: 8px 16px; font-size: 13px; }

/* STATS */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 30px;
}

.stat-card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 24px;
  text-align: center;
  box-shadow: var(--shadow);
  border-top: 4px solid var(--primary);
}

.stat-card.danger { border-top-color: var(--accent); }
.stat-card.warning { border-top-color: var(--warning); }
.stat-card.success { border-top-color: var(--success); }

.stat-number { font-size: 36px; font-weight: 800; color: var(--primary); }
.stat-card.danger .stat-number { color: var(--accent); }
.stat-card.warning .stat-number { color: var(--warning); }
.stat-card.success .stat-number { color: var(--success); }

.stat-label { font-size: 14px; color: var(--text-light); margin-top: 4px; }

/* CARDS */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }

.card-icon { font-size: 40px; margin-bottom: 12px; }
.card h3 { font-size: 18px; margin-bottom: 8px; color: var(--primary-dark); }
.card p { font-size: 14px; color: var(--text-light); line-height: 1.7; }

/* INFO SECTIONS (Education) */
.edu-section {
  background: var(--card);
  border-radius: var(--radius);
  padding: 30px;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
}

.edu-section h2 {
  font-size: 24px;
  color: var(--primary-dark);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border);
}

.edu-section h3 {
  font-size: 18px;
  color: var(--primary);
  margin: 20px 0 8px;
}

.edu-section p, .edu-section li {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text);
}

.edu-section ul { padding-left: 24px; }
.edu-section li { margin-bottom: 8px; }

.info-box {
  background: #eaf2f8;
  border-left: 4px solid var(--primary-light);
  padding: 16px 20px;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin: 16px 0;
}

.warning-box {
  background: #fef9e7;
  border-left: 4px solid var(--warning);
  padding: 16px 20px;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin: 16px 0;
}

.danger-box {
  background: #fdedec;
  border-left: 4px solid var(--accent);
  padding: 16px 20px;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin: 16px 0;
}

/* FORMS */
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-weight: 600; margin-bottom: 6px; font-size: 14px; }

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 15px;
  transition: border-color 0.2s;
  font-family: inherit;
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--primary-light);
}

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

/* REGION SELECTOR */
.region-panel {
  background: var(--card);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  margin-bottom: 24px;
}

.region-select-row {
  display: flex;
  gap: 16px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.region-select-row .form-group { flex: 1; min-width: 200px; }

/* FORECAST */
.forecast-card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  margin-bottom: 16px;
}

.risk-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
}

.risk-low { background: #e8f8f0; color: #1e8449; }
.risk-medium { background: #fef9e7; color: #b7950b; }
.risk-high { background: #fdebd0; color: #e67e22; }
.risk-critical { background: #fdedec; color: #c0392b; animation: pulse-badge 1.5s ease-in-out infinite; }

@keyframes pulse-badge {
  0%, 100% { box-shadow: 0 0 0 0 rgba(192,57,43,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(192,57,43,0); }
}

.risk-meter {
  width: 100%;
  height: 12px;
  background: #ecf0f1;
  border-radius: 6px;
  overflow: hidden;
  margin: 12px 0;
}

.risk-meter-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.5s ease;
}

/* COLLECTION POINTS */
.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.point-card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary);
}

.point-card h4 { font-size: 16px; color: var(--primary-dark); margin-bottom: 8px; }
.point-card p { font-size: 14px; margin-bottom: 4px; }
.point-card .point-address { color: var(--text-light); }
.point-card .point-capacity { font-weight: 600; color: var(--primary); }

/* COMPLAINTS */
.complaint-item {
  background: var(--card);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  margin-bottom: 16px;
}

.complaint-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.complaint-id { font-weight: 700; color: var(--primary); font-size: 14px; }

.complaint-status {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.status-new { background: #eaf2f8; color: var(--primary); }
.status-reviewing { background: #fef9e7; color: #b7950b; }
.status-resolved { background: #e8f8f0; color: #1e8449; }
.status-ignored { background: #fdedec; color: #c0392b; }

.complaint-location { font-size: 14px; color: var(--text-light); margin-bottom: 8px; }
.complaint-text { font-size: 15px; line-height: 1.7; }

.complaint-photos { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
.thumb {
  width: 80px;
  height: 60px;
  background: #ecf0f1;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--text-light);
}

/* MEDIA */
.media-item {
  background: var(--card);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  margin-bottom: 16px;
  border-left: 4px solid var(--accent);
}

.media-item h4 { font-size: 16px; color: var(--primary-dark); margin-bottom: 8px; }
.media-item .media-date { font-size: 13px; color: var(--text-light); }
.media-item .media-evidence { margin-top: 12px; }

.evidence-tag {
  display: inline-block;
  background: #fdedec;
  color: var(--accent);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 6px;
  margin-bottom: 6px;
}

/* SUCCESS MESSAGE */
.success-message {
  background: var(--card);
  border-radius: var(--radius);
  padding: 40px;
  text-align: center;
  box-shadow: var(--shadow);
}

.success-message .success-icon { font-size: 64px; margin-bottom: 16px; }
.success-message h3 { color: var(--success); margin-bottom: 8px; }

/* TABS */
.tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  background: var(--card);
  border-radius: var(--radius-sm);
  padding: 4px;
  box-shadow: var(--shadow);
  overflow-x: auto;
}

.tab-btn {
  padding: 10px 20px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-light);
  transition: all 0.2s;
  white-space: nowrap;
}

.tab-btn.active { background: var(--primary); color: #fff; }
.tab-btn:hover:not(.active) { background: #ecf0f1; }

/* TIMELINE */
.timeline { position: relative; padding-left: 30px; }
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item { position: relative; margin-bottom: 20px; }
.timeline-item::before {
  content: '';
  position: absolute;
  left: -26px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  border: 2px solid var(--card);
}

.timeline-item.danger::before { background: var(--accent); }
.timeline-item.warning::before { background: var(--warning); }
.timeline-item.success::before { background: var(--success); }

.timeline-item h4 { font-size: 15px; margin-bottom: 4px; }
.timeline-item p { font-size: 14px; color: var(--text-light); }

/* FOOTER */
.footer {
  background: var(--bg-dark);
  color: var(--text-white);
  padding: 30px 20px;
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
}

.footer a { color: var(--primary-light); text-decoration: none; }
.footer a:hover { text-decoration: underline; }

/* PAGE TITLE */
.page-title { margin-bottom: 8px; }
.page-subtitle { color: var(--text-light); margin-bottom: 24px; font-size: 16px; }

/* FILTERS */
.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filters select, .filters input {
  padding: 10px 14px;
  border: 2px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 14px;
  background: var(--card);
}

/* CONTACT CARDS */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.contact-card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  text-align: center;
}

.contact-card .contact-icon { font-size: 32px; margin-bottom: 8px; }
.contact-card h4 { margin-bottom: 4px; }
.contact-card .contact-phone { font-size: 20px; font-weight: 700; color: var(--primary); }
.contact-card .contact-desc { font-size: 13px; color: var(--text-light); }

/* RESPONSIVE */
@media (max-width: 768px) {
  .burger { display: block; }
  .nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--primary-dark);
    flex-direction: column;
    padding: 12px;
    gap: 4px;
  }
  .nav.open { display: flex; }
  .nav-link { padding: 12px 16px; width: 100%; }
  .hero { padding: 40px 24px; }
  .hero h2 { font-size: 26px; }
  .form-row { grid-template-columns: 1fr; }
  .region-select-row { flex-direction: column; align-items: stretch; }
  .complaint-header { flex-direction: column; align-items: flex-start; }
}
`;

// ==================== HTML ====================
const html=`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Казпроект — Паводки: прогноз и помощь</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<!-- ALERT BANNER -->
<div class="alert-banner" id="alert-banner">
    ⚠️ <span>Паводковая ситуация: усиленный мониторинг в Северном и Западном Казахстане</span>
    <span>|</span>
    <span>Телефон доверия: 112</span>
</div>

<!-- HEADER -->
<header class="header">
    <div class="header-inner">
        <div class="logo">
            <span class="logo-icon">🛡️</span>
            <h1>Казпроект</h1>
        </div>
        <button class="burger" id="burger" aria-label="Меню">☰</button>
        <nav class="nav" id="nav">
            <a class="nav-link active" data-section="home">🏠 Главная</a>
            <a class="nav-link" data-section="education">📚 Образование</a>
            <a class="nav-link" data-section="region">📍 Мой регион</a>
            <a class="nav-link" data-section="complaint">✏️ Сообщить</a>
            <a class="nav-link" data-section="media">📰 СМИ</a>
        </nav>
    </div>
</header>

<main class="container">

    <!-- ============ HOME ============ -->
    <section id="home" class="section active">
        <div class="hero">
            <h2>🌊 Паводки в Казахстане: знай и будь готов</h2>
            <p>Система оповещения, прогнозирования и помощи населению. Актуально для Центрального, Северного и Западного Казахстана.</p>
            <div class="hero-buttons">
                <a class="btn btn-accent" data-section="region">📍 Мой регион — прогноз</a>
                <a class="btn btn-outline-light" data-section="education">📚 Как защититься</a>
                <a class="btn btn-outline-light" data-section="complaint">✏️ Сообщить о проблеме</a>
            </div>
        </div>

        <div class="stats-grid" id="stats-grid"></div>

        <h2 class="page-title">⚡ Актуальная информация</h2>
        <p class="page-subtitle">Последние данные о паводковой ситуации в регионах</p>

        <div class="card-grid" id="alerts-grid"></div>
    </section>

    <!-- ============ EDUCATION ============ -->
    <section id="education" class="section">
        <h2 class="page-title">📚 Всё о паводках</h2>
        <p class="page-subtitle">Знание — лучшая защита. Узнайте, почему случаются паводки и как себя обезопасить.</p>

        <div class="tabs" id="edu-tabs">
            <button class="tab-btn active" data-tab="why">Почему?</button>
            <button class="tab-btn" data-tab="when">Когда?</button>
            <button class="tab-btn" data-tab="where">Где?</button>
            <button class="tab-btn" data-tab="protect">Защита</button>
            <button class="tab-btn" data-tab="action">Действия при ЧС</button>
        </div>

        <div id="edu-content"></div>
    </section>

    <!-- ============ REGION ============ -->
    <section id="region" class="section">
        <h2 class="page-title">📍 Мой регион</h2>
        <p class="page-subtitle">Прогноз паводков, пункты сбора и центры помощи</p>

        <div class="region-panel">
            <div class="region-select-row">
                <div class="form-group">
                    <label for="region-select">🗺️ Область</label>
                    <select id="region-select">
                        <option value="">— Выберите область —</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="city-select">🏙️ Город / Ауыл</label>
                    <select id="city-select" disabled>
                        <option value="">— Сначала выберите область —</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="period-select">📅 Период прогноза</label>
                    <select id="period-select">
                        <option value="7">7 дней</option>
                        <option value="14">14 дней</option>
                        <option value="30">30 дней</option>
                    </select>
                </div>
                <button class="btn btn-primary" id="forecast-btn" style="height:44px;">🔍 Прогноз</button>
            </div>
        </div>

        <div id="forecast-result" style="display:none;"></div>

        <h3 style="margin: 24px 0 12px;">🏥 Пункты сбора и центры помощи</h3>
        <p style="color:var(--text-light);margin-bottom:16px;" id="points-subtitle">Выберите регион для отображения пунктов сбора</p>
        <div class="points-grid" id="points-grid"></div>

        <h3 style="margin: 24px 0 12px;">📞 Экстренные контакты</h3>
        <div class="contact-grid">
            <div class="contact-card">
                <div class="contact-icon">🚨</div>
                <h4>Служба спасения</h4>
                <div class="contact-phone">112</div>
                <div class="contact-desc">Круглосуточно, бесплатно</div>
            </div>
            <div class="contact-card">
                <div class="contact-icon">🏥</div>
                <h4>МЧС Казахстана</h4>
                <div class="contact-phone">101</div>
                <div class="contact-desc">Пожарная служба и ЧС</div>
            </div>
            <div class="contact-card">
                <div class="contact-icon">🚑</div>
                <h4>Скорая помощь</h4>
                <div class="contact-phone">103</div>
                <div class="contact-desc">Медицинская помощь</div>
            </div>
            <div class="contact-card">
                <div class="contact-icon">👮</div>
                <h4>Полиция</h4>
                <div class="contact-phone">102</div>
                <div class="contact-desc">Охрана правопорядка</div>
            </div>
        </div>
    </section>

    <!-- ============ COMPLAINT ============ -->
    <section id="complaint" class="section">
        <h2 class="page-title">✏️ Сообщить о проблеме</h2>
        <p class="page-subtitle">Сообщите о разрушении дамб, застройке пойм, незаконных постройках и других проблемах</p>

        <div class="info-box" style="margin-bottom:24px;">
            💡 <strong>Ваше сообщение имеет значение!</strong> Мы помогаем передать обращения в ответственные органы, в том числе через платформу <strong>е-өтініш</strong>. Если проблема не решается — мы привлекаем СМИ.
        </div>

        <div id="complaint-success" style="display:none;">
            <div class="success-message">
                <div class="success-icon">✅</div>
                <h3>Сообщение отправлено!</h3>
                <p>Ваше обращение зарегистрировано. Номер: <strong id="complaint-number"></strong></p>
                <p style="margin-top:8px;">Вы можете отслеживать статус на этой странице или через е-өтініш.</p>
                <button class="btn btn-primary" id="new-complaint-btn" style="margin-top:20px;">✏️ Отправить ещё</button>
            </div>
        </div>

        <form class="report-form" id="complaint-form">
            <div class="form-row">
                <div class="form-group">
                    <label for="c-name">👤 Ваше имя</label>
                    <input type="text" id="c-name" placeholder="Иван Иванов" required>
                </div>
                <div class="form-group">
                    <label for="c-phone">📞 Телефон</label>
                    <input type="tel" id="c-phone" placeholder="+7 (___) ___-__-__" required>
                </div>
            </div>
            <div class="form-group">
                <label for="c-email">📧 Email (для уведомлений)</label>
                <input type="email" id="c-email" placeholder="email@example.com">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="c-region">🗺️ Область</label>
                    <select id="c-region" required>
                        <option value="">— Выберите —</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="c-type">⚠️ Тип проблемы</label>
                    <select id="c-type" required>
                        <option value="">— Выберите —</option>
                        <option value="dam">🏗️ Разрушение дамбы / плотины</option>
                        <option value="floodplain">🏘️ Застройка поймы реки</option>
                        <option value="blockage">🌊 Засорение русла</option>
                        <option value="erosion">⛰️ Размыв берега</option>
                        <option value="illegal">🚧 Незаконная постройка</option>
                        <option value="other">📋 Другое</option>
                    </select>
                </div>
            </div>
            <div class="form-group" style="margin-bottom:16px;">
                <label for="c-location">📍 Точный адрес / Местоположение</label>
                <input type="text" id="c-location" placeholder="г. Петропавловск, район р. Ишим, ул. Береговая 15" required>
            </div>
            <div class="form-group" style="margin-bottom:16px;">
                <label for="c-description">📝 Подробное описание проблемы</label>
                <textarea id="c-description" rows="5" placeholder="Опишите ситуацию подробно: что происходит, как давно, какие последствия..." required></textarea>
            </div>
            <div class="form-group" style="margin-bottom:24px;">
                <label for="c-photos">📷 Фотографии (доказательства)</label>
                <input type="file" id="c-photos" accept="image/*" multiple>
                <small style="color:var(--text-light);">Приложите фото разрушений, застройки и т.д. Это усилит ваше обращение.</small>
            </div>

            <div class="info-box" style="margin-bottom:20px;">
                📋 <strong>Отправить через е-өтініш:</strong> Ваше обращение может быть автоматически передано в систему е-өтініш (e-otinish.kz) для официального рассмотрения государственными органами.
            </div>

            <div class="form-group" style="margin-bottom:24px;">
                <label>
                    <input type="checkbox" id="c-eotinish" checked>
                    Передать обращение через <strong>е-өтініш</strong>
                </label>
            </div>
            <div class="form-group" style="margin-bottom:24px;">
                <label>
                    <input type="checkbox" id="c-media">
                    Разрешаю использовать материалы для <strong>СМИ</strong> (если проблема не будет решена)
                </label>
            </div>

            <button type="submit" class="btn btn-accent btn-full">📤 Отправить обращение</button>
        </form>
    </section>

    <!-- ============ MEDIA ============ -->
    <section id="media" class="section">
        <h2 class="page-title">📰 Для СМИ и общественности</h2>
        <p class="page-subtitle">Нерешённые проблемы, требующие огласки. Доказательства, даты, фото.</p>

        <div class="tabs" id="media-tabs">
            <button class="tab-btn active" data-tab="unresolved">Нерешённые</button>
            <button class="tab-btn" data-tab="evidence">Доказательства</button>
            <button class="tab-btn" data-tab="petition">Петиции</button>
        </div>

        <div class="filters" id="media-filters">
            <select id="media-region">
                <option value="">Все регионы</option>
            </select>
            <select id="media-type">
                <option value="">Все типы</option>
                <option value="dam">Разрушение дамбы</option>
                <option value="floodplain">Застройка поймы</option>
                <option value="blockage">Засорение русла</option>
                <option value="erosion">Размыв берега</option>
            </select>
            <select id="media-sort">
                <option value="newest">Сначала новые</option>
                <option value="oldest">Сначала старые</option>
                <option value="urgent">Сначала срочные</option>
            </select>
        </div>

        <div id="media-content"></div>
    </section>

</main>

<footer class="footer">
    <p><strong>🛡️ Казпроект</strong> — Система мониторинга и оповещения о паводках © 2026</p>
    <p style="margin-top:8px;">Интеграция: <a href="https://e-otinish.kz" target="_blank">е-өтініш</a> | <a href="#">МЧС РК</a> | <a href="#">112</a></p>
</footer>

<script src="app.js"></script>
</body>
</html>\`;

const fs=require("fs");
const path=require("path");
const os=require("os");
const base=path.join(os.homedir(),"Desktop","казпроект");

function write(name,content){
  var full=path.join(base,name);
  fs.writeFileSync(full,content,"utf8");
  console.log("Created: "+name+" ("+Buffer.byteLength(content,"utf8")+" bytes)");
}

