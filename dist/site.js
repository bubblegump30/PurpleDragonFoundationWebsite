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
 const mobile = matchMedia('(max-width:1150px)');
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
 const controls = document.querySelector('[data-catalog-controls]');
 if (controls) {
  const search = controls.elements.namedItem('q');
  const category = controls.elements.namedItem('category');
  const availability = controls.elements.namedItem('status');
  const items = [...document.querySelectorAll('[data-catalog-item]')];
  const count = document.querySelector('[data-catalog-count]');
  const empty = document.querySelector('[data-catalog-empty]');
  const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
  const indexed = items.map(item => ({item, text: normalize([...item.querySelectorAll('h2, p, .status-label')].map(node => node.textContent).join(' '))}));
  function readLocation() {
   const params = new URLSearchParams(location.search);
   search.value = (params.get('q') || '').slice(0, 100);
   for (const select of [category, availability]) {
    const value = params.get(select.name) || 'all';
    select.value = [...select.options].some(option => option.value === value) ? value : 'all';
   }
  }
  function filter(updateLocation = true) {
   const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
   let visible = 0;
   for (const {item, text} of indexed) {
    const matches = words.every(word => text.includes(word)) &&
     (category.value === 'all' || item.dataset.category === category.value) &&
     (availability.value === 'all' || item.dataset.status === availability.value);
    item.hidden = !matches;
    if (matches) visible++;
   }
   count.textContent = `${visible} of ${items.length} projects shown`;
   empty.hidden = visible !== 0;
   if (updateLocation) {
    const url = new URL(location.href);
    for (const input of [search, category, availability]) {
     const value = input.value.trim();
     if (value && value !== 'all') url.searchParams.set(input.name, value);
     else url.searchParams.delete(input.name);
    }
    try { history.replaceState(history.state, '', url); } catch {}
   }
  }
  controls.hidden = false;
  count.hidden = false;
  readLocation();
  filter(false);
  controls.addEventListener('submit', event => { event.preventDefault(); filter(); });
  search.addEventListener('input', () => filter());
  category.addEventListener('change', () => filter());
  availability.addEventListener('change', () => filter());
  controls.querySelector('[data-catalog-reset]').addEventListener('click', () => {
   search.value = ''; category.value = 'all'; availability.value = 'all';
   filter(); search.focus();
  });
  window.addEventListener('popstate', () => { readLocation(); filter(false); });
 }
});
