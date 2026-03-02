/**
 * College Prep — School Renderer & Filter Logic
 * CA student perspective | SRHS ArtQuest
 */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────────────

  let activeFilter = 'all';
  let activeSort   = 'rank';

  // ── Type helpers ──────────────────────────────────────────────────────────

  function typeLabel(type) {
    switch (type) {
      case 'private-ca': return { text: 'CA Private',  cls: 'badge-private' };
      case 'uc':         return { text: 'UC System',   cls: 'badge-uc'      };
      case 'csu':        return { text: 'CSU System',  cls: 'badge-csu'     };
      case 'private':    return { text: 'Private',     cls: 'badge-private' };
      case 'public-oos': return { text: 'Public OOS',  cls: 'badge-public'  };
      default:           return { text: type,          cls: 'badge-info'    };
    }
  }

  function isCaSchool(school) {
    return school.state === 'CA';
  }

  function rankFor(school, cat) {
    return cat === 'digital_arts' ? school.digitalArtsRank : school.visualFineArtsRank;
  }

  // ── Cost display (CA perspective) ─────────────────────────────────────────

  function costDisplay(school) {
    if (school.type === 'uc' || school.type === 'csu') {
      return {
        primary: `$${school.tuition.toLocaleString()}/yr in-state`,
        note: `$${school.tuitionOOS ? school.tuitionOOS.toLocaleString() : '—'}/yr out-of-state`,
        highlight: true,
      };
    }
    return {
      primary: `$${school.tuition.toLocaleString()}/yr tuition`,
      note: `~$${school.totalCOA.toLocaleString()} total COA`,
      highlight: false,
    };
  }

  // ── Card HTML ──────────────────────────────────────────────────────────────

  function renderCard(school, category) {
    const rank     = rankFor(school, category);
    const typeLbl  = typeLabel(school.type);
    const cost     = costDisplay(school);
    const programs = category === 'digital_arts'
      ? school.digitalArtsPrograms
      : school.visualFineArtsPrograms;
    const isCA = isCaSchool(school);

    const highlightHtml = school.highlights.slice(0, 3)
      .map(h => `<li>${h}</li>`)
      .join('');

    const mangaHtml = school.manga
      ? `<div class="card-manga-note">🎌 ${school.mangaNote}</div>`
      : '';

    const rankHtml = rank
      ? `<div class="card-rank">#${rank}</div>`
      : '';

    return `
<div class="school-card${isCA ? ' ca-school' : ''}"
     data-type="${school.type}"
     data-manga="${school.manga}"
     data-state="${school.state}"
     data-rank="${rank || 999}"
     data-cost="${school.tuition}"
     data-name="${school.name}">

  <div class="card-header">
    <div class="card-title">
      <div class="card-name"><a href="${school.website}" target="_blank" rel="noopener">${school.name}</a></div>
      <div class="card-location">${school.location}</div>
    </div>
    ${rankHtml}
  </div>

  <div class="card-badges">
    <span class="badge ${typeLbl.cls}">${typeLbl.text}</span>
    ${isCA ? '<span class="badge badge-ca">CA In-State</span>' : ''}
    ${school.manga ? '<span class="badge badge-manga">Manga / Sequential Art</span>' : ''}
    ${school.testOptional ? '<span class="badge badge-info">Test Optional</span>' : ''}
  </div>

  <div class="card-programs">
    <strong>Key Programs</strong>
    ${programs}
  </div>

  <div class="card-stats">
    <div class="stat">
      <span class="stat-label">Annual Cost (CA Student)</span>
      <span class="stat-value ${cost.highlight ? 'cost-highlight' : ''}">${cost.primary}</span>
    </div>
    <div class="stat">
      <span class="stat-label">Total COA Est.</span>
      <span class="stat-value">${cost.note}</span>
    </div>
    <div class="stat">
      <span class="stat-label">Acceptance Rate</span>
      <span class="stat-value">${school.acceptanceRate}</span>
    </div>
    <div class="stat">
      <span class="stat-label">Portfolio</span>
      <span class="stat-value">${school.portfolioRequired ? 'Required' : 'Not Required'}</span>
    </div>
  </div>

  <div class="card-aid-note">
    Sticker price is rarely what you pay. <a href="prep-guide.html#financial-aid">Financial Aid Primer →</a>
  </div>

  ${mangaHtml}

  <div class="card-highlights">
    <ul>${highlightHtml}</ul>
  </div>

  <div class="card-footer">
    <span class="card-deadline">${school.applicationDeadlines}</span>
    <div class="card-footer-links">
      ${school.social && school.social.instagram
        ? `<a href="${school.social.instagram}" target="_blank" rel="noopener" class="btn-social" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Instagram
        </a>`
        : ''}
      <a href="${school.website}" target="_blank" rel="noopener" class="btn-outline">Visit School ↗</a>
    </div>
  </div>
</div>`;
  }

  // ── Filter & Sort ──────────────────────────────────────────────────────────

  function getFilteredSchools(schools, category) {
    let filtered = schools.filter(s => s.categories.includes(category));

    switch (activeFilter) {
      case 'ca':
        filtered = filtered.filter(s => s.state === 'CA');
        break;
      case 'manga':
        filtered = filtered.filter(s => s.manga);
        break;
      case 'under50k':
        filtered = filtered.filter(s => s.tuition < 50000);
        break;
      case 'portfolio':
        filtered = filtered.filter(s => s.portfolioRequired);
        break;
    }

    return sortSchools(filtered, category);
  }

  function sortSchools(schools, category) {
    return [...schools].sort((a, b) => {
      switch (activeSort) {
        case 'rank': {
          const rA = rankFor(a, category) ?? 999;
          const rB = rankFor(b, category) ?? 999;
          return rA - rB;
        }
        case 'cost':
          return a.tuition - b.tuition;
        case 'name':
          return (a.shortName || a.name).localeCompare(b.shortName || b.name);
        case 'accept': {
          const pA = parseFloat(a.acceptanceRate) || 100;
          const pB = parseFloat(b.acceptanceRate) || 100;
          return pA - pB;
        }
        default:
          return 0;
      }
    });
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  function renderSchools(category) {
    const grid    = document.getElementById('schools-grid');
    const countEl = document.getElementById('results-count');
    if (!grid) return;

    const filtered = getFilteredSchools(SCHOOLS, category);
    grid.innerHTML = filtered.map(s => renderCard(s, category)).join('');

    if (countEl) {
      countEl.textContent = `${filtered.length} school${filtered.length !== 1 ? 's' : ''}`;
    }
  }

  // ── Init ───────────────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById('schools-grid');
    if (!grid) return;

    const category = grid.dataset.category;

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderSchools(category);
      });
    });

    // Sort select
    const sortSel = document.getElementById('sort-select');
    if (sortSel) {
      sortSel.addEventListener('change', e => {
        activeSort = e.target.value;
        renderSchools(category);
      });
    }

    // Initial render
    renderSchools(category);
  }

  document.addEventListener('DOMContentLoaded', init);

})();
