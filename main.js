/* ==========================================================
   Настройки сайта: тема, язык, анимации, звуки
   Всё сохраняется в localStorage, чтобы выбор не сбрасывался.
   ========================================================== */
const root = document.documentElement;

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
};

/* ----------------------------------------------------------
   ТВОИ КОНТАКТЫ. Впиши сюда свои данные (в кавычках).
   Пустое значение: карточка на странице покажет «Скоро».
   telegram: без @, например 'srkim'
   github:   имя пользователя GitHub
   ---------------------------------------------------------- */
const CONTACTS = {
  telegram: '',
  email: 'Kirillmahinko2024@gmail.com',
  github: 'srkim2026'
};

/* Адрес для отправки формы (сейчас FormSubmit: письма приходят на твою почту). Можно оставить пустым:
   тогда форма откроет почтовую программу с готовым письмом на адрес CONTACTS.email */
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/kirillmahinko2024@gmail.com';   // адрес в нижнем регистре, как в подтверждённой форме

/* ---------- Переводы ---------- */
const TEXTS = {
  ru: {
    'nav.about': 'Обо мне',
    'nav.projects': 'Портфолио',
    'nav.contact': 'Связаться',
    'hero.art': 'Иллюстрация: парень смотрит в небо',
    'hero.eyebrow': 'Привет, я',
    'hero.title': 'Кир<span class="grad-text">илл</span>',
    'hero.text': 'Создаю современные и удобные веб-сайты с акцентом на дизайн, детали и пользовательский опыт.',
    'hero.btnAbout': 'Обо мне',
    'hero.btnWorks': 'Мои работы',
    'about.eyebrow': 'Обо мне',
    'about.title': 'Кто <span class="grad-text">я</span>?',
    'about.text': 'Я — веб-разработчик и дизайнер, который любит создавать современные и удобные веб-сайты. Мне нравится превращать идеи в красивые и функциональные проекты.',
    'about.img': 'Рабочий стол с ноутбуком и надписью Make it real',
    'about.skills': 'Мои навыки',
    'about.projects': 'Мои проекты',
    'about.note': 'Разрабатываю сайты, которые выглядят стильно и работают безупречно.',
    'about.link': 'Посмотреть все проекты',
    'pf.eyebrow': 'Мои работы',
    'pf.title': 'Порт<span class="grad-text">фолио</span>',
    'pf.lead': 'Подборка моих проектов: учебные работы и сайты, над которыми я работаю. Нажмите на карточку, чтобы открыть проект.',
    'pf.list': 'Проекты',
    'pf.card1': 'Шпаргалка HTML и CSS',
    'pf.card1.text': 'Учебный проект',
    'pf.card2': 'Проект 02',
    'pf.card3': 'Проект 03',
    'pf.card4': 'Проект 04',
    'pf.soon': 'Скоро здесь',
    'pf.about.eyebrow': 'Портфолио',
    'pf.about.title': 'Моё <span class="grad-text">портфолио</span>',
    'pf.about.text': 'Здесь собраны мои работы: сайты и учебные проекты, на которых я учусь и пробую новое.',
    'pf.status.title': 'Статус',
    'pf.status.note': 'Новые проекты в работе. Список будет пополняться.',
    'pf.back': 'Обо мне',
    'contact.eyebrow': 'На связи',
    'contact.title': 'Кон<span class="grad-text">такты</span>',
    'contact.lead': 'Выберите удобный способ связи или оставьте сообщение в форме ниже: расскажите о проекте, задаче или идее.',
    'contact.list': 'Мои контакты',
    'contact.email': 'Почта',
    'contact.soon': 'Скоро',
    'send.eyebrow': 'Написать',
    'send.title': 'Связаться <span class="grad-text">со мной</span>',
    'send.text': 'Расскажите коротко, что нужно сделать, и оставьте почту, чтобы я мог ответить.',
    'form.name': 'Имя',
    'form.name.ph': 'Как вас зовут',
    'form.email': 'Почта',
    'form.message': 'Сообщение',
    'form.message.ph': 'Расскажите о задаче или идее',
    'form.err.name': 'Введите имя (не короче 2 символов)',
    'form.err.email': 'Введите корректную почту',
    'form.err.message': 'Напишите хотя бы 10 символов',
    'form.send': 'Отправить',
    'form.sending': 'Отправляю…',
    'form.ok': 'Спасибо! Сообщение отправлено.',
    'form.mail': 'Открываю почтовую программу: останется нажать «Отправить» в письме.',
    'form.fail': 'Не получилось отправить. Попробуйте позже или напишите на почту.',
    'form.off': 'Форма пока не подключена. Напишите мне напрямую по контактам выше.',
    'form.subject': 'Сообщение с сайта',
    'footer.rights': 'Все права защищены.',
    'footer.built': 'Сделано на HTML, CSS и JavaScript.',
    'footer.top': 'Наверх',
    'footer.nav': 'Меню в подвале',
    'footer.social': 'Мои профили',
    'toast.copied': 'Почта скопирована',
    'toast.copyfail': 'Скопируйте адрес вручную',
    'form.activate': 'Почта получателя ещё не подтверждена. Подтвердите её по письму от FormSubmit и попробуйте снова.',
    'settings.open': 'Открыть настройки',
    'settings.close': 'Закрыть настройки',
    'settings.title': 'Настройки',
    'settings.theme': 'Тема',
    'settings.light': 'Светлая',
    'settings.dark': 'Тёмная',
    'settings.language': 'Язык',
    'settings.animations': 'Анимации',
    'settings.sounds': 'Звуки интерфейса',
    'menu.open': 'Открыть меню',
    'menu.close': 'Закрыть меню',
    'meta.title': 'Кирилл — веб-разработчик и дизайнер',
    'meta.description': 'Создаю современные и удобные веб-сайты с акцентом на дизайн, детали и пользовательский опыт.'
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.art': 'Illustration: a guy looking at the sky',
    'hero.eyebrow': "Hi, I'm",
    'hero.title': 'Kir<span class="grad-text">ill</span>',
    'hero.text': 'I build modern, easy-to-use websites with a focus on design, details and user experience.',
    'hero.btnAbout': 'About me',
    'hero.btnWorks': 'My work',
    'about.eyebrow': 'About me',
    'about.title': 'Who <span class="grad-text">am I</span>?',
    'about.text': 'I am a web developer and designer who loves creating modern, user-friendly websites. I enjoy turning ideas into beautiful, functional projects.',
    'about.img': 'Desk with a laptop and the words Make it real',
    'about.skills': 'My skills',
    'about.projects': 'My projects',
    'about.note': 'I build websites that look stylish and work flawlessly.',
    'about.link': 'View all projects',
    'pf.eyebrow': 'My work',
    'pf.title': 'Port<span class="grad-text">folio</span>',
    'pf.lead': 'A selection of my projects: learning work and sites I am building. Click a card to open the project.',
    'pf.list': 'Projects',
    'pf.card1': 'HTML & CSS cheat sheet',
    'pf.card1.text': 'Learning project',
    'pf.card2': 'Project 02',
    'pf.card3': 'Project 03',
    'pf.card4': 'Project 04',
    'pf.soon': 'Coming soon',
    'pf.about.eyebrow': 'Portfolio',
    'pf.about.title': 'My <span class="grad-text">portfolio</span>',
    'pf.about.text': 'This is where my work lives: websites and learning projects where I practice and try new things.',
    'pf.status.title': 'Status',
    'pf.status.note': 'New projects are in progress. The list will keep growing.',
    'pf.back': 'About me',
    'contact.eyebrow': 'Stay in touch',
    'contact.title': 'Con<span class="grad-text">tact</span>',
    'contact.lead': 'Pick the way that suits you or leave a message in the form below: tell me about a project, a task or an idea.',
    'contact.list': 'My contacts',
    'contact.email': 'Email',
    'contact.soon': 'Soon',
    'send.eyebrow': 'Write',
    'send.title': 'Get <span class="grad-text">in touch</span>',
    'send.text': 'Tell me briefly what you need and leave your email so I can reply.',
    'form.name': 'Name',
    'form.name.ph': 'What is your name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.message.ph': 'Tell me about your task or idea',
    'form.err.name': 'Enter your name (at least 2 characters)',
    'form.err.email': 'Enter a valid email',
    'form.err.message': 'Write at least 10 characters',
    'form.send': 'Send message',
    'form.sending': 'Sending…',
    'form.ok': 'Thank you! Your message has been sent.',
    'form.mail': 'Opening your mail app: just press Send in the email.',
    'form.fail': 'Could not send. Please try again later or email me.',
    'form.off': 'The form is not connected yet. Please use the contacts above.',
    'form.subject': 'Message from the website',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with HTML, CSS and JavaScript.',
    'footer.top': 'Back to top',
    'footer.nav': 'Footer menu',
    'footer.social': 'My profiles',
    'toast.copied': 'Email copied',
    'toast.copyfail': 'Please copy the address manually',
    'form.activate': 'The recipient email is not confirmed yet. Confirm it via the FormSubmit email and try again.',
    'settings.open': 'Open settings',
    'settings.close': 'Close settings',
    'settings.title': 'Settings',
    'settings.theme': 'Theme',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
    'settings.language': 'Language',
    'settings.animations': 'Animations',
    'settings.sounds': 'Interface sounds',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'meta.title': 'Kirill — web developer and designer',
    'meta.description': 'I build modern, easy-to-use websites with a focus on design, details and user experience.'
  }
};

/* ---------- Элементы ---------- */
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings');
const settingsClose = document.getElementById('settings-close');
const themeButtons = document.querySelectorAll('[data-theme-value]');
const langSelect = document.getElementById('lang-select');
const animSwitch = document.getElementById('switch-animations');
const soundSwitch = document.getElementById('switch-sounds');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

/* ---------- Состояние ---------- */
const state = {
  theme: root.dataset.theme,                    // уже выставлено скриптом в <head>
  lang: storage.get('lang') === 'en' ? 'en' : 'ru',
  animations: root.dataset.animations !== 'off',
  sounds: storage.get('sounds') === 'on'
};

const t = key => TEXTS[state.lang][key] || key;

/* ---------- Звуки (генерируются кодом, аудиофайлы не нужны) ----------
   Каждая нота: f - частота (Гц), to - до какой частоты скользит, d - длина (сек),
   at - через сколько секунд начать, v - громкость, type - тембр. */
const SOUNDS = {
  nav:        [{ f: 520, d: 0.07, v: 0.05 }],                                            // меню, логотип, ссылки
  btn:        [{ f: 440, d: 0.08, type: 'triangle' }, { f: 660, d: 0.12, at: 0.06, type: 'triangle' }],   // кнопки
  card:       [{ f: 300, to: 540, d: 0.15, type: 'triangle', v: 0.07 }],                 // карточки (проекты, контакты)
  tap:        [{ f: 600, d: 0.05, v: 0.04 }],                                            // всё остальное
  panelOpen:  [{ f: 380, to: 640, d: 0.16, v: 0.05 }],                                   // панель настроек
  panelClose: [{ f: 640, to: 380, d: 0.14, v: 0.05 }],
  on:         [{ f: 660, d: 0.08 }, { f: 880, d: 0.14, at: 0.07 }],                      // тумблер включён
  off:        [{ f: 660, d: 0.08 }, { f: 440, d: 0.14, at: 0.07 }],                      // тумблер выключен
  themeLight: [{ f: 523, d: 0.1 }, { f: 784, d: 0.2, at: 0.09 }],                        // светлая тема
  themeDark:  [{ f: 392, d: 0.1 }, { f: 262, d: 0.22, at: 0.09 }],                       // тёмная тема
  lang:       [{ f: 880, d: 0.05 }, { f: 1175, d: 0.08, at: 0.05 }],                     // смена языка
  field:      [{ f: 1100, d: 0.035, v: 0.03 }],                                          // фокус в поле формы
  error:      [{ f: 200, d: 0.14, type: 'square', v: 0.03 }, { f: 160, d: 0.2, at: 0.12, type: 'square', v: 0.03 }],
  success:    [{ f: 523, d: 0.12 }, { f: 659, d: 0.12, at: 0.1 }, { f: 784, d: 0.26, at: 0.2 }]
};

let audioCtx = null;

function playSound(name) {
  if (!state.sounds || !SOUNDS[name]) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const start = audioCtx.currentTime;

    SOUNDS[name].forEach(note => {
      const t0 = start + (note.at || 0);
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = note.type || 'sine';
      osc.frequency.setValueAtTime(note.f, t0);
      if (note.to) osc.frequency.exponentialRampToValueAtTime(note.to, t0 + note.d);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(note.v || 0.06, t0 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + note.d);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0 + note.d + 0.02);
    });
  } catch (e) { /* звук не критичен */ }
}

// какой звук играет на какие элементы (первое совпадение побеждает; null = у элемента свой звук)
const CLICK_SOUNDS = [
  ['.switch, .segmented__btn, #settings-btn, #settings-close, #cf-submit, .ccard.is-empty', null],
  ['.nav__link, .burger, .logo, .footer__link, .footer__up, .text-link', 'nav'],
  ['.pcard, .ccard, .social', 'card'],
  ['.btn', 'btn'],
  ['a, button', 'tap']
];

document.addEventListener('click', e => {
  for (const [selector, name] of CLICK_SOUNDS) {
    if (e.target.closest(selector)) { if (name) playSound(name); return; }
  }
});

/* ---------- Применение настроек ---------- */
function applyTheme(theme) {
  state.theme = theme;
  root.dataset.theme = theme;
  themeButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.themeValue === theme)));
  storage.set('theme', theme);
}

function applyAnimations(on) {
  state.animations = on;
  root.dataset.animations = on ? 'on' : 'off';
  animSwitch.setAttribute('aria-checked', String(on));
  storage.set('animations', on ? 'on' : 'off');
}

function applySounds(on) {
  state.sounds = on;
  soundSwitch.setAttribute('aria-checked', String(on));
  storage.set('sounds', on ? 'on' : 'off');
}

function applyLang(lang) {
  state.lang = lang;
  root.lang = lang;
  langSelect.value = lang;
  storage.set('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder)); });

  document.title = t('meta.title');
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t('meta.description'));

  updateBurgerLabel();
}

/* ---------- Панель настроек ---------- */
function setSettings(open, returnFocus) {
  if (settingsPanel.classList.contains('is-open') !== open) playSound(open ? 'panelOpen' : 'panelClose');
  settingsPanel.classList.toggle('is-open', open);
  settingsBtn.setAttribute('aria-expanded', String(open));
  if (open) {
    setMenu(false);
    settingsClose.focus({ preventScroll: true });
  } else if (returnFocus) {
    settingsBtn.focus({ preventScroll: true });
  }
}

settingsBtn.addEventListener('click', () => {
  setSettings(!settingsPanel.classList.contains('is-open'), true);
});
settingsClose.addEventListener('click', () => setSettings(false, true));

// клик мимо панели закрывает её
document.addEventListener('click', e => {
  if (!settingsPanel.classList.contains('is-open')) return;
  if (settingsPanel.contains(e.target) || settingsBtn.contains(e.target)) return;
  setSettings(false, false);
});

themeButtons.forEach(btn => btn.addEventListener('click', () => {
  applyTheme(btn.dataset.themeValue);
  playSound(state.theme === 'dark' ? 'themeDark' : 'themeLight');
}));
langSelect.addEventListener('change', () => { applyLang(langSelect.value); playSound('lang'); });
animSwitch.addEventListener('click', () => {
  applyAnimations(!state.animations);
  playSound(state.animations ? 'on' : 'off');
});

soundSwitch.addEventListener('click', () => {
  if (state.sounds) { playSound('off'); applySounds(false); }
  else { applySounds(true); playSound('on'); }
});

/* ---------- Мобильное меню ---------- */
function updateBurgerLabel() {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
}

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  updateBurgerLabel();
  if (open) setSettings(false, false);
}

burger.addEventListener('click', () => {
  setMenu(burger.getAttribute('aria-expanded') !== 'true');
});

// закрываем меню по клику на пункт
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

// Escape закрывает всё
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  setMenu(false);
  setSettings(false, true);
});

/* ---------- Страницы: «Обо мне» и «Портфолио» ---------- */
const views = {
  home: document.getElementById('view-home'),
  portfolio: document.getElementById('projects'),
  contact: document.getElementById('contact')
};
const navLinks = document.querySelectorAll('[data-nav]');
let currentView = null;

// какая страница нужна по адресу (#about -> главная, #projects -> портфолио, #contact -> контакты)
function viewFromHash() {
  const hash = location.hash;
  if (hash === '#projects') return 'portfolio';
  if (hash === '#contact') return 'contact';
  if (hash === '' || hash === '#top' || hash === '#about') return 'home';
  return null;   // неизвестный адрес: страницу не меняем
}

function showView(name) {
  if (!name || name === currentView) return false;

  Object.entries(views).forEach(([key, el]) => { el.hidden = key !== name; });

  // запускаем плавное появление заново
  const el = views[name];
  el.classList.remove('view--enter');
  void el.offsetWidth;
  el.classList.add('view--enter');

  // подчёркивание в меню переходит на нужный пункт
  navLinks.forEach(link => {
    const active = link.dataset.nav === name;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  currentView = name;
  return true;
}

function route() {
  const changed = showView(viewFromHash());
  if (!changed) return;   // страница та же: браузер сам прокрутит к якорю

  if (location.hash === '#about') {
    document.getElementById('about').scrollIntoView({ behavior: 'instant' });
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

window.addEventListener('hashchange', route);

/* ---------- Карточки портфолио: наклон, блик, волна ---------- */
const cards = document.querySelectorAll('.pcard');
const canMove = () => root.dataset.animations !== 'off';

cards.forEach(card => {
  // у заглушек ссылка ведёт на #projects: переход не нужен. Настоящие ссылки (https://...) работают как обычно
  card.addEventListener('click', e => {
    if (card.getAttribute('href').startsWith('#')) e.preventDefault();
  });

  card.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || !canMove()) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;    // 0..1
    const y = (e.clientY - r.top) / r.height;    // 0..1
    card.style.setProperty('--ry', ((x - 0.5) * 14).toFixed(2) + 'deg');
    card.style.setProperty('--rx', ((0.5 - y) * 14).toFixed(2) + 'deg');
    card.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
    card.style.setProperty('--my', (y * 100).toFixed(1) + '%');
  });

  card.addEventListener('pointerleave', () => {
    card.style.removeProperty('--rx');
    card.style.removeProperty('--ry');
  });

  // круговая волна от места нажатия
  card.addEventListener('pointerdown', e => {
    if (!canMove()) return;
    const fx = card.querySelector('.pcard__fx');
    const r = card.getBoundingClientRect();
    const wave = document.createElement('span');
    wave.className = 'pcard__ripple';
    wave.style.left = (e.clientX - r.left) + 'px';
    wave.style.top = (e.clientY - r.top) + 'px';
    fx.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove());
  });
});

/* ---------- Контакты: карточки ---------- */
const contactLinks = {
  telegram: v => ({ href: 'https://t.me/' + v.replace(/^@/, ''), text: '@' + v.replace(/^@/, ''), external: true }),
  email:    v => ({ href: 'mailto:' + v, text: v, external: false }),
  github:   v => ({ href: 'https://github.com/' + v, text: v, external: true })
};

function applyContacts() {
  document.querySelectorAll('[data-contact]').forEach(card => {
    const key = card.dataset.contact;
    const value = (CONTACTS[key] || '').trim();
    const valueEl = card.querySelector('.ccard__value');

    if (!value) {                       // данных нет: карточка неактивна
      card.classList.add('is-empty');
      card.removeAttribute('href');
      card.setAttribute('aria-disabled', 'true');
      return;
    }

    const info = contactLinks[key](value);
    card.classList.remove('is-empty');
    card.removeAttribute('aria-disabled');
    card.href = info.href;
    if (info.external) { card.target = '_blank'; card.rel = 'noopener noreferrer'; }
    valueEl.removeAttribute('data-i18n');   // текст теперь не переводится
    valueEl.textContent = info.text;
  });

  // значки в подвале: показываем только те, где есть данные
  document.querySelectorAll('[data-contact-link]').forEach(link => {
    const key = link.dataset.contactLink;
    const value = (CONTACTS[key] || '').trim();
    link.hidden = !value;
    if (!value) return;
    const info = contactLinks[key](value);
    link.href = info.href;
    if (info.external) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  });
}

/* ---------- Почта: копируем адрес вместо открытия почтовой программы ---------- */
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(key) {
  toast.dataset.i18n = key;
  toast.textContent = t(key);
  toast.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-show'), 2400);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    try {                                   // запасной способ для старых браузеров и file://
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e2) { return false; }
  }
}

document.addEventListener('click', async e => {
  const link = e.target.closest('[data-contact="email"], [data-contact-link="email"]');
  if (!link || link.classList.contains('is-empty') || !CONTACTS.email) return;
  e.preventDefault();
  const ok = await copyText(CONTACTS.email);
  showToast(ok ? 'toast.copied' : 'toast.copyfail');
  playSound(ok ? 'on' : 'error');
});

/* ---------- Подвал ---------- */
document.getElementById('footer-year').textContent = new Date().getFullYear();
document.getElementById('footer-up').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: state.animations ? 'smooth' : 'auto' });
});

/* ---------- Контакты: форма ---------- */
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('cf-status');
const submitBtn = document.getElementById('cf-submit');
const submitLabel = submitBtn.querySelector('[data-i18n]');

const rules = {
  name:    v => v.length >= 2,
  email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
  message: v => v.length >= 10
};

function validateField(input) {
  const ok = rules[input.name](input.value.trim());
  const err = document.getElementById(input.id + '-err');
  input.setAttribute('aria-invalid', String(!ok));
  err.hidden = ok;
  return ok;
}

// статус хранится как ключ перевода, поэтому меняет язык вместе со страницей
function setStatus(key, state) {
  statusEl.dataset.i18n = key || '';
  statusEl.dataset.state = state || '';
  statusEl.textContent = key ? t(key) : '';
}

function setSending(on) {
  submitBtn.disabled = on;
  submitLabel.dataset.i18n = on ? 'form.sending' : 'form.send';
  submitLabel.textContent = t(submitLabel.dataset.i18n);
}

form.querySelectorAll('.field__input').forEach(input => {
  input.addEventListener('blur', () => { if (input.value.trim() || input.getAttribute('aria-invalid')) validateField(input); });
  input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') validateField(input); });
});

// тихий «щелчок» при входе в поле
form.addEventListener('focusin', e => { if (e.target.matches('.field__input')) playSound('field'); });

form.addEventListener('submit', async e => {
  e.preventDefault();
  setStatus('');

  const fields = [...form.querySelectorAll('.field__input')];
  const results = fields.map(validateField);
  if (results.includes(false)) {
    playSound('error');
    fields[results.indexOf(false)].focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));
  if (data.website) { setStatus('form.ok', 'ok'); form.reset(); return; }   // сработала ловушка для ботов
  delete data.website;
  data._subject = t('form.subject') + ' SrKim';   // тема письма
  data._template = 'table';                     // аккуратное оформление письма

  if (FORM_ENDPOINT) {
    setSending(true);
    try {
      // обычная «формовая» отправка (как в демо FormSubmit): без лишних проверок браузера
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new URLSearchParams(data)
      });
      let result = {};
      try { result = await res.json(); } catch (e) { /* ответ не JSON */ }
      // сервис может ответить 200, но с success: "false" (например, почта не подтверждена)
      if (!res.ok || String(result.success) === 'false') {
        console.warn('FormSubmit ответил:', res.status, result);
        throw new Error(result.message || 'bad status');
      }
      setStatus('form.ok', 'ok');
      playSound('success');
      form.reset();
    } catch (err) {
      console.warn('Отправка формы не удалась:', err);
      setStatus(/activat/i.test(err.message || '') ? 'form.activate' : 'form.fail', 'error');
      playSound('error');
    }
    setSending(false);
  } else if (CONTACTS.email) {
    const body = data.message + '\n\n' + data.name + ' (' + data.email + ')';
    location.href = 'mailto:' + CONTACTS.email +
      '?subject=' + encodeURIComponent(t('form.subject')) +
      '&body=' + encodeURIComponent(body);
    setStatus('form.mail', 'ok');
    playSound('success');
  } else {
    setStatus('form.off', 'error');
    playSound('error');
  }
});

/* ---------- Старт ---------- */
applyTheme(state.theme);
applyAnimations(state.animations);
applySounds(state.sounds);
applyContacts();
applyLang(state.lang);
route();