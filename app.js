/* ──────────────────────────────────────────
   Travel Gallery — app.js
────────────────────────────────────────── */

const app        = document.getElementById('app');
const breadcrumb = document.getElementById('breadcrumb');
const siteTitle  = document.getElementById('site-title');
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lb-img');
const lbCaption  = document.getElementById('lb-caption');
const lbCounter  = document.getElementById('lb-counter');
const lbClose    = document.getElementById('lb-close');
const lbPrev     = document.getElementById('lb-prev');
const lbNext     = document.getElementById('lb-next');
const tooltip    = document.getElementById('map-tooltip');

let currentPhotos   = [];
let currentPhotoIdx = 0;

// ── Continent metadata ─────────────────────────────────────────────

const continentData = [
  { id: "north-america", name: "North America", emoji: "🌎", color: "#e8829a" },
  { id: "south-america", name: "South America", emoji: "🌎", color: "#f0c060" },
  { id: "europe",        name: "Europe",        emoji: "🌍", color: "#6baad4" },
  { id: "africa",        name: "Africa",        emoji: "🌍", color: "#8cbd8c" },
  { id: "asia",          name: "Asia",          emoji: "🌏", color: "#e8944a" },
  { id: "oceania",       name: "Oceania",       emoji: "🌏", color: "#b890d4" },
  { id: "antarctica",    name: "Antarctica",    emoji: "❄️",  color: "#c8dce8" },
];

// ── ISO numeric → continent id ─────────────────────────────────────

const isoToContinentId = {
  "124":"north-america","484":"north-america","840":"north-america","188":"north-america",
  "192":"north-america","214":"north-america","222":"north-america","320":"north-america",
  "332":"north-america","340":"north-america","388":"north-america","558":"north-america",
  "591":"north-america","780":"north-america","28":"north-america","44":"north-america",
  "52":"north-america","84":"north-america","308":"north-america","659":"north-america",
  "662":"north-america","670":"north-america","136":"north-america","212":"north-america",
  "474":"north-america","500":"north-america","534":"north-america","630":"north-america",
  "32":"south-america","68":"south-america","76":"south-america","152":"south-america",
  "170":"south-america","218":"south-america","328":"south-america","600":"south-america",
  "604":"south-america","740":"south-america","858":"south-america","862":"south-america",
  "238":"south-america","254":"south-america",
  "8":"europe","20":"europe","40":"europe","56":"europe","70":"europe","100":"europe",
  "112":"europe","191":"europe","203":"europe","208":"europe","233":"europe","246":"europe",
  "250":"europe","276":"europe","300":"europe","348":"europe","352":"europe","372":"europe",
  "380":"europe","428":"europe","438":"europe","440":"europe","442":"europe","470":"europe",
  "492":"europe","498":"europe","499":"europe","528":"europe","578":"europe","616":"europe",
  "620":"europe","642":"europe","643":"europe","674":"europe","688":"europe","703":"europe",
  "705":"europe","724":"europe","752":"europe","756":"europe","804":"europe","807":"europe",
  "826":"europe","336":"europe","196":"europe",
  "12":"africa","24":"africa","204":"africa","72":"africa","854":"africa","108":"africa",
  "120":"africa","132":"africa","140":"africa","148":"africa","174":"africa","178":"africa",
  "180":"africa","226":"africa","231":"africa","232":"africa","262":"africa","266":"africa",
  "270":"africa","288":"africa","324":"africa","384":"africa","404":"africa","426":"africa",
  "430":"africa","434":"africa","450":"africa","454":"africa","466":"africa","478":"africa",
  "480":"africa","504":"africa","508":"africa","516":"africa","562":"africa","566":"africa",
  "624":"africa","646":"africa","678":"africa","686":"africa","694":"africa","706":"africa",
  "710":"africa","716":"africa","728":"africa","729":"africa","748":"africa","768":"africa",
  "788":"africa","800":"africa","818":"africa","834":"africa","894":"africa",
  "4":"asia","31":"asia","48":"asia","50":"asia","51":"asia","64":"asia","96":"asia",
  "104":"asia","116":"asia","144":"asia","156":"asia","268":"asia","275":"asia","356":"asia",
  "360":"asia","364":"asia","368":"asia","376":"asia","392":"asia","398":"asia","400":"asia",
  "408":"asia","410":"asia","414":"asia","417":"asia","418":"asia","422":"asia","458":"asia",
  "462":"asia","496":"asia","512":"asia","524":"asia","586":"asia","608":"asia","634":"asia",
  "682":"asia","702":"asia","760":"asia","762":"asia","764":"asia","784":"asia","792":"asia",
  "795":"asia","860":"asia","887":"asia","704":"asia","626":"asia",
  "36":"oceania","242":"oceania","296":"oceania","520":"oceania","554":"oceania","583":"oceania",
  "584":"oceania","585":"oceania","598":"oceania","776":"oceania","798":"oceania","882":"oceania",
  "90":"oceania","548":"oceania",
  "10":"antarctica",
};

// ISO numeric → travelData country id (only for countries we've visited)
const isoToCountryId = {
  "484": "mexico",
  "840": "united-states",
  "250": "france",
  "724": "spain",
  "392": "japan",
};

function visitedContinentIds() {
  return new Set(travelData.map(c => c.continentId));
}

// Returns visited countries for a given continent id
function visitedCountriesIn(continentId) {
  return travelData.filter(c => c.continentId === continentId);
}

// ── State ──────────────────────────────────────────────────────────
// Views: world → continent (only if >1 country) → country (full gallery)

let state = { view: 'world', continentId: null, countryId: null };

function navigate(newState) {
  state = { ...state, ...newState };
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Render dispatcher ──────────────────────────────────────────────

function render() {
  updateBreadcrumb();
  if      (state.view === 'world')     renderWorld();
  else if (state.view === 'continent') renderContinent();
  else if (state.view === 'country')   renderCountry();
}

// ── Breadcrumb ─────────────────────────────────────────────────────

function updateBreadcrumb() {
  const parts = [];

  const addCrumb = (label, view, extra = {}, current = false) => {
    if (current) {
      parts.push(`<span class="crumb current">${label}</span>`);
    } else {
      const attrs = Object.entries(extra).map(([k,v]) => `data-${k}="${v}"`).join(' ');
      parts.push(`<span class="crumb" data-view="${view}" ${attrs}>${label}</span>`);
    }
  };

  if (state.view !== 'world') {
    addCrumb('World', 'world');
  }

  const cont    = continentData.find(c => c.id === state.continentId);
  const country = travelData.find(c => c.id === state.countryId);

  // Only show continent in breadcrumb if it has more than 1 visited country
  const showContinent = cont && visitedCountriesIn(state.continentId).length > 1;

  if (showContinent && ['continent', 'country'].includes(state.view)) {
    parts.push(`<span class="sep">›</span>`);
    addCrumb(cont.name, 'continent', { continent: cont.id }, state.view === 'continent');
  }

  if (country && state.view === 'country') {
    parts.push(`<span class="sep">›</span>`);
    addCrumb(`${country.flag} ${country.name}`, 'country', { country: country.id }, true);
  }

  breadcrumb.innerHTML = parts.join('');

  breadcrumb.querySelectorAll('.crumb[data-view]').forEach(el => {
    el.addEventListener('click', () => {
      const targetView = el.dataset.view;
      navigate({
        view:        targetView,
        continentId: el.dataset.continent || state.continentId,
        countryId:   (targetView === 'world' || targetView === 'continent') ? null : state.countryId,
      });
    });
  });
}

// ── World view (continent map) ─────────────────────────────────────

function renderWorld() {
  const visited = visitedContinentIds();

  const pills = continentData
    .filter(c => c.id !== 'antarctica')
    .map(c => {
      const isVisited = visited.has(c.id);
      return `
        <div class="continent-pill ${isVisited ? 'visited' : 'unvisited'}"
             style="background:${c.color};"
             data-continent="${c.id}"
             role="button" tabindex="${isVisited ? 0 : -1}"
             aria-label="${c.name}">
          <span>${c.emoji}</span><span>${c.name}</span>
        </div>`;
    }).join('');

  app.innerHTML = `
    <div class="view">
      <div class="section-header">
        <h2>Where I've Been</h2>
        <p>Click a country to explore its gallery.</p>
      </div>
      <div id="world-map-container"></div>
      <div class="continent-legend">${pills}</div>
    </div>`;

  app.querySelectorAll('.continent-pill.visited').forEach(el => {
    const activate = () => navigateToContinent(el.dataset.continent);
    el.addEventListener('click', activate);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
  });

  renderWorldMap();
}

// Navigate to continent — auto-skip if only 1 country
function navigateToContinent(continentId) {
  const countries = visitedCountriesIn(continentId);
  if (countries.length === 1) {
    navigate({ view: 'country', continentId, countryId: countries[0].id });
  } else {
    navigate({ view: 'continent', continentId });
  }
}

async function renderWorldMap() {
  const container = document.getElementById('world-map-container');
  if (!container) return;

  const visited = visitedContinentIds();
  const W = container.clientWidth || 960;
  const H = Math.round(W * 0.5);

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${W} ${H}`)
    .attr('width', '100%');

  svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#d4e8f4');

  const projection = d3.geoNaturalEarth1()
    .scale(W / 6.3)
    .translate([W / 2, H / 2]);

  const path = d3.geoPath().projection(projection);

  try {
    const world = await d3.json('https://unpkg.com/world-atlas@2/countries-110m.json');
    const countries = topojson.feature(world, world.objects.countries);

    function getFill(isoId) {
      const contId = isoToContinentId[String(isoId)];
      if (!contId) return '#ddd8d0';
      const cont = continentData.find(c => c.id === contId);
      return (cont && visited.has(contId)) ? cont.color : '#ddd8d0';
    }

    svg.selectAll('path.country-path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', d => {
        const isOurs = Boolean(isoToCountryId[String(d.id)]);
        return `country-path ${isOurs ? 'visited' : 'unvisited'}`;
      })
      .attr('fill', d => getFill(d.id))
      .attr('d', path)
      .on('mouseenter', function(event, d) {
        const countryId = isoToCountryId[String(d.id)];
        if (!countryId || !tooltip) return;
        const country = travelData.find(c => c.id === countryId);
        if (country) { tooltip.textContent = `${country.flag}  ${country.name}`; tooltip.style.display = 'block'; }
      })
      .on('mousemove', function(event) {
        if (tooltip) { tooltip.style.left = (event.clientX + 14) + 'px'; tooltip.style.top = (event.clientY - 36) + 'px'; }
      })
      .on('mouseleave', function() { if (tooltip) tooltip.style.display = 'none'; })
      .on('click', function(event, d) {
        const countryId = isoToCountryId[String(d.id)];
        if (countryId) {
          const country = travelData.find(c => c.id === countryId);
          if (country) navigate({ view: 'country', continentId: country.continentId, countryId });
        }
      });

    svg.append('path')
      .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
      .attr('fill', 'none').attr('stroke', 'rgba(255,255,255,0.45)').attr('stroke-width', 0.3)
      .attr('d', path);

  } catch (err) {
    container.innerHTML = `<div class="map-error">Could not load map — check your internet connection.</div>`;
  }
}

// ── Continent view (countries) — only shown when >1 country ────────

function renderContinent() {
  const cont = continentData.find(c => c.id === state.continentId);
  if (!cont) { navigate({ view: 'world' }); return; }

  const countries = visitedCountriesIn(state.continentId);

  // Auto-skip if somehow we land here with only 1 country
  if (countries.length === 1) {
    navigate({ view: 'country', continentId: state.continentId, countryId: countries[0].id });
    return;
  }

  const cards = countries.map(country => {
    const totalPhotos = country.regions.reduce((sum, r) => sum + r.locations.reduce((s, l) => s + l.photos.length, 0), 0);
    const imgHtml = country.coverPhoto
      ? `<img src="${country.coverPhoto}" alt="${country.name}" loading="lazy" onerror="this.outerHTML='<div class=card-placeholder>${country.flag}</div>'">`
      : `<div class="card-placeholder">${country.flag}</div>`;
    return `
      <article class="country-card" role="button" tabindex="0" data-country="${country.id}" aria-label="${country.name}">
        ${imgHtml}
        <div class="card-overlay">
          <div class="flag">${country.flag}</div>
          <div class="country-name">${country.name}</div>
          <div class="location-count">${totalPhotos} photo${totalPhotos !== 1 ? 's' : ''}</div>
        </div>
      </article>`;
  }).join('');

  app.innerHTML = `
    <div class="view">
      <button class="back-btn" id="back-btn">&#8592; World Map</button>
      <div class="section-header">
        <h2>${cont.emoji} ${cont.name}</h2>
        <p>Select a country to explore.</p>
      </div>
      <div class="country-grid">${cards}</div>
    </div>`;

  document.getElementById('back-btn').addEventListener('click', () => navigate({ view: 'world' }));
  app.querySelectorAll('.country-card').forEach(card => {
    const activate = () => navigate({ view: 'country', countryId: card.dataset.country });
    card.addEventListener('click', activate);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
  });
}

// ── Country view (full gallery: regions → cities → photos) ─────────

function renderCountry() {
  const country = travelData.find(c => c.id === state.countryId);
  if (!country) { navigate({ view: 'world' }); return; }
  const cont = continentData.find(c => c.id === country.continentId);

  // Back goes to continent only if it has multiple countries, else world
  const multiCountry = visitedCountriesIn(country.continentId).length > 1;
  const backView  = multiCountry ? 'continent' : 'world';
  const backLabel = multiCountry ? (cont ? `${cont.emoji} ${cont.name}` : 'Back') : 'World Map';

  // Flatten all photos for the lightbox
  currentPhotos = country.regions.flatMap(region =>
    region.locations.flatMap(loc => loc.photos)
  );

  let photoIndex = 0;
  const regionSections = country.regions.map(region => {
    const citySections = region.locations.map(loc => {
      if (loc.photos.length === 0) return '';

      const items = loc.photos.map((photo, i) => {
        const globalIdx = photoIndex + i;
        return `
          <div class="gallery-item" role="button" tabindex="0"
               data-index="${globalIdx}" aria-label="${photo.caption || loc.name + ' photo ' + (i + 1)}">
            <img src="${photo.src}" alt="${photo.caption || ''}" loading="lazy">
            ${photo.caption ? `<div class="photo-caption">${photo.caption}</div>` : ''}
          </div>`;
      }).join('');

      photoIndex += loc.photos.length;

      return `
        <div class="city-section">
          <div class="city-section-header">
            <h3>${loc.name}</h3>
            <span class="city-count">${loc.photos.length} photo${loc.photos.length !== 1 ? 's' : ''}</span>
          </div>
          ${loc.description ? `<p style="color:var(--muted);font-size:0.9rem;margin-bottom:1rem">${loc.description}</p>` : ''}
          <div class="gallery-grid">${items}</div>
        </div>`;
    }).join('');

    const regionPhotoCount = region.locations.reduce((sum, loc) => sum + loc.photos.length, 0);
    if (regionPhotoCount === 0) return '';

    const hasMultipleLocations = region.locations.filter(l => l.photos.length > 0).length > 1;
    return `
      <div class="region-section">
        ${hasMultipleLocations ? `
        <div class="region-section-header">
          <h2>${region.name}</h2>
          ${region.subtitle ? `<span class="region-subtitle">${region.subtitle}</span>` : ''}
        </div>` : ''}
        ${citySections}
      </div>`;
  }).join('');

  const totalPhotos = currentPhotos.length;
  const regionCount = country.regions.filter(r =>
    r.locations.some(l => l.photos.length > 0)
  ).length;

  app.innerHTML = `
    <div class="view">
      <button class="back-btn" id="back-btn">&#8592; ${backLabel}</button>
      <div class="section-header">
        <h2>${country.flag} ${country.name}</h2>
        <p>${totalPhotos} photo${totalPhotos !== 1 ? 's' : ''} across ${regionCount} region${regionCount !== 1 ? 's' : ''}</p>
      </div>
      ${totalPhotos === 0
        ? emptyState('🖼️', 'No photos yet', 'Add photos to explore this country.')
        : regionSections}
    </div>`;

  document.getElementById('back-btn').addEventListener('click', () => navigate({ view: backView }));

  app.querySelectorAll('.gallery-item').forEach(item => {
    const activate = () => openLightbox(parseInt(item.dataset.index));
    item.addEventListener('click', activate);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
  });
}

// ── Empty state ────────────────────────────────────────────────────

function emptyState(icon, title, msg) {
  return `<div class="empty-state"><div class="empty-icon">${icon}</div><h3>${title}</h3><p>${msg}</p></div>`;
}

// ── Lightbox ───────────────────────────────────────────────────────

function openLightbox(index) {
  currentPhotoIdx = index;
  showPhoto(index);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showPhoto(index) {
  const photo = currentPhotos[index];
  lbImg.src             = photo.src;
  lbImg.alt             = photo.caption || '';
  lbCaption.textContent = photo.caption || '';
  lbCounter.textContent = `${index + 1} / ${currentPhotos.length}`;
}

function prevPhoto() {
  currentPhotoIdx = (currentPhotoIdx - 1 + currentPhotos.length) % currentPhotos.length;
  showPhoto(currentPhotoIdx);
}

function nextPhoto() {
  currentPhotoIdx = (currentPhotoIdx + 1) % currentPhotos.length;
  showPhoto(currentPhotoIdx);
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prevPhoto);
lbNext.addEventListener('click', nextPhoto);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
});

siteTitle.addEventListener('click', () => navigate({ view: 'world', continentId: null, countryId: null }));

render();
