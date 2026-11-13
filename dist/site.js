'use strict';
document.addEventListener('DOMContentLoaded', () => {
 const decor = document.getElementById('holiday-decor');
 const banner = document.getElementById('holiday-banner');
 const seasons = {christmas:{title:'Christmas · Warm wishes from Purple Dragon',icons:['❄️','🎄','🎁','❄️']},halloween:{title:'Halloween · Welcome to the spooky season',icons:['🦇','🎃','🎃','🦇']},patrick:{title:'St. Patrick’s Day · A little luck, a lot of creativity',icons:['☘️','🍀','☘️','🍀']},canada:{title:'Canada Day · Celebrating creativity from Canada',icons:['🍁','🇨🇦','🍁','🇨🇦']},newyear:{title:'New Year’s Eve · Here’s to the next chapter',icons:['✨','🎉','🥂','✨']}};
 function renderTheme(name) {
  const season = seasons[name];
  decor.replaceChildren();
  banner.textContent = season ? season.title : '';
  banner.classList.toggle('visible', Boolean(season));
  if (season) {
   document.documentElement.dataset.season = name;
   for (const icon of season.icons) {
    const span = document.createElement('span'); span.textContent = icon; decor.append(span);
   }
  } else delete document.documentElement.dataset.season;
 }
 renderTheme(document.documentElement.dataset.theme);
 document.addEventListener('purple-theme-change', () => renderTheme(document.documentElement.dataset.theme));
 const toggle = document.getElementById('nav-toggle');
 const nav = document.getElementById('site-nav');
 const mobile = matchMedia('(max-width:1000px)');
 function expanded(open) { nav.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); }
 toggle.classList.add('ready'); nav.dataset.collapsible = '';
 function sync() { expanded(!mobile.matches); }
 sync(); mobile.addEventListener('change', sync);
 toggle.addEventListener('click', () => expanded(nav.hidden));
 nav.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches) { expanded(false); toggle.focus(); }
 });
 nav.addEventListener('click', event => { if (mobile.matches && event.target.closest('a')) expanded(false); });
 const segment = location.pathname.split('/').pop() || 'index.html';
 const page = segment.includes('.') ? segment : segment + '.html';
 for (const link of nav.querySelectorAll('a')) {
  if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
 }
});
