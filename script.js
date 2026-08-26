/* ============================================================
   RU-SERVICES — Rendering-Logik
   Liest die Daten aus data/projects.js bzw. data/about.js
   und baut daraus die Seiteninhalte. Muss normalerweise
   NICHT angepasst werden — Inhalte gehören in die data/-Dateien.
   ============================================================ */

(function () {
  // ---------- Mobile-Nav ----------
  const toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // ---------- Projekte (index.html) ----------
  const projectList = document.getElementById("projectList");
  if (projectList) {
    const projects = typeof PROJECTS !== "undefined" ? PROJECTS : [];
    const countEl = document.getElementById("projectCount");

    if (countEl) {
      countEl.textContent = String(projects.length).padStart(2, "0") + " Einträge";
    }

    if (!projects.length) {
      projectList.innerHTML =
        '<p class="empty-note">Noch keine Programme eingetragen. Ergänze sie in data/projects.js.</p>';
    } else {
      projectList.innerHTML = projects
        .map((p) => {
          const statusClass = "status-" + String(p.status || "").replace(/\s+/g, "-");
          const stack = (p.stack || [])
            .map((s) => `<li>${escapeHTML(s)}</li>`)
            .join("");
          const linkParts = [];
          if (p.link) {
            linkParts.push(
              `<a class="project-link" href="${escapeAttr(p.link)}" target="_blank" rel="noopener">Repository ansehen →</a>`
            );
          }
          if (p.download) {
            linkParts.push(
              `<a class="project-link" href="${escapeAttr(p.download)}" download>Programm herunterladen →</a>`
            );
          }
          const link = linkParts.length
            ? linkParts.join("")
            : `<span class="project-link project-link-locked">Nicht frei zugänglich</span>`;
          return `
            <article class="project-card">
              <div class="project-head">
                <span class="project-name">${escapeHTML(p.name || "")}</span>
                <span class="status-pill ${statusClass}">${escapeHTML(p.status || "")}</span>
                ${link}
              </div>
              <div class="project-body">
                <p>${escapeHTML(p.beschreibung || "")}</p>
                <ul class="stack-list">${stack}</ul>
              </div>
            </article>
          `;
        })
        .join("");
    }
  }

  // ---------- Über den Entwickler (about.html) ----------
  const aboutGrid = document.getElementById("aboutGrid");
  if (aboutGrid) {
    const a = typeof ABOUT !== "undefined" ? ABOUT : null;

    if (!a) {
      aboutGrid.innerHTML =
        '<p class="empty-note">Noch keine Angaben hinterlegt. Ergänze sie in data/about.js.</p>';
    } else {
      const initials = (a.name || "?")
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      const photoInner = a.foto
        ? `<img src="${escapeAttr(a.foto)}" alt="Foto von ${escapeAttr(a.name || "")}">`
        : escapeHTML(initials);

      const eduItems = (a.ausbildung || [])
        .map((e) => `<li>${escapeHTML(e.titel)} <span>${escapeHTML(e.info || "")}</span></li>`)
        .join("");

      const interessen = (a.interessen || [])
        .map((i) => `<li>${escapeHTML(i)}</li>`)
        .join("");

      const bio = (a.bio || []).map((p) => `<p>${escapeHTML(p)}</p>`).join("");

      const kontakt = a.kontakt || {};
      const contactFields = [
        kontakt.email
          ? `<div class="id-field"><b>E-Mail</b><a href="mailto:${escapeAttr(kontakt.email)}">${escapeHTML(kontakt.email)}</a></div>`
          : "",
        kontakt.github
          ? `<div class="id-field"><b>GitHub</b><a href="${escapeAttr(kontakt.github)}" target="_blank" rel="noopener">${escapeHTML(kontakt.github.replace(/^https?:\/\//, ""))}</a></div>`
          : "",
        kontakt.telefon
          ? `<div class="id-field"><b>Telefon</b><a href="tel:${escapeAttr(kontakt.telefon.replace(/\s+/g, ""))}">${escapeHTML(kontakt.telefon)}</a></div>`
          : "",
        a.standort ? `<div class="id-field"><b>Standort</b>${escapeHTML(a.standort)}</div>` : "",
      ].join("");

      aboutGrid.innerHTML = `
        <aside class="id-card">
          <div class="id-photo">${photoInner}</div>
          <h2>${escapeHTML(a.name || "")}</h2>
          <p class="id-role">${escapeHTML(a.rolle || "")}</p>
          ${contactFields}
        </aside>
        <div>
          <div class="bio">${bio}</div>

          ${eduItems ? `
          <div class="tag-block">
            <h3>Ausbildung</h3>
            <ul class="edu-list">${eduItems}</ul>
          </div>` : ""}

          ${interessen ? `
          <div class="tag-block">
            <h3>Interessen</h3>
            <ul class="chip-list">${interessen}</ul>
          </div>` : ""}
        </div>
      `;
    }
  }

  // ---------- Helpers ----------
  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function escapeAttr(str) {
    return escapeHTML(str).replace(/"/g, "&quot;");
  }
})();
