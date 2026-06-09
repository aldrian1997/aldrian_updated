const workItems = {
  origin: {
    title: 'Origin Code Technology',
    badge: 'WordPress Development',
    image: 'images/ORIGIN CODE TECHNOLOGY SOLUTIONS.png',
    intro: 'A WordPress development project focused on cleaner presentation, better page structure, easier site management, and a smoother client inquiry flow for business users.',
    details: ['WordPress page structure', 'UI and layout updates', 'Backend setup support', 'Form and onboarding flow improvements'],
    results: ['Cleaner website experience', 'More organized admin workflow', 'Better client intake process']
  },
  ipoppet: {
    title: 'Ipoppet Store',
    badge: 'WordPress eCommerce',
    image: 'images/IPOPPET.png',
    intro: 'A WordPress eCommerce and WooCommerce support project focused on product management, store updates, category cleanup, and easier customer support access.',
    details: ['WooCommerce product uploads', 'Product category cleanup', 'Live chat setup', 'Inventory and store content updates'],
    results: ['More organized product listings', 'Improved customer support access', 'Cleaner store management process']
  },
  artic: {
    title: 'Artic Flex',
    badge: 'WordPress Optimization',
    image: 'images/ARTICFLEX.png',
    intro: 'A WordPress optimization project focused on faster page experience, cleaner SEO structure, better content maintenance, and stronger technical site health.',
    details: ['Speed checks and cleanup', 'Image and asset optimization', 'SEO content updates', 'Broken link and crawl issue fixes'],
    results: ['Faster website experience', 'Cleaner SEO structure', 'Improved technical site health']
  }
};

function showWorkPage() {
  const page = document.body.getAttribute('data-work');
  const item = workItems[page];
  const app = document.getElementById('acl-work-page');

  if (!item || !app) return;

  document.title = `${item.title} | Aldrian Loyola`;

  app.innerHTML = `
    <canvas id="bg-canvas"></canvas>
    <main class="acl-project-page">
      <div class="acl-project-wrap">
        <nav class="acl-project-nav">
          <a href="index.html#projects" class="acl-brand-logo"><i class="fas fa-layer-group"></i> Aldrian.</a>
          <a href="index.html#projects" class="acl-project-back"><i class="fas fa-arrow-left"></i> Back to Works</a>
        </nav>
        <article class="acl-project-hero">
          <img src="${item.image}" alt="${item.title} ${item.badge} project by Aldrian Loyola" loading="lazy">
          <div class="acl-project-body">
            <span class="acl-work-badge">${item.badge}</span>
            <h1>${item.title}</h1>
            <p>${item.intro}</p>
            <div class="acl-project-grid">
              <section class="acl-project-panel">
                <h2>Project Scope</h2>
                <ul>${item.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
              </section>
              <section class="acl-project-panel">
                <h2>Project Outcome</h2>
                <ul>${item.results.map(result => `<li>${result}</li>`).join('')}</ul>
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  `;
}

showWorkPage();
