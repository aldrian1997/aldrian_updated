(() => {
  const app = document.getElementById('acl-app');
  if (app) {
    app.innerHTML = `
    <canvas id="bg-canvas"></canvas>
    
    <div id="progress-bar"></div>
    
    <button class="acl-burger-btn" onclick="toggleMobileMenu()">
        <i class="fas fa-bars"></i>
    </button>
    
    <div class="acl-mobile-nav-overlay" id="mobileMenu">
        <a href="#home" class="acl-mobile-menu-logo" onclick="toggleMobileMenu()"><i class="fas fa-layer-group"></i> Aldrian.</a>
        <div class="acl-mobile-links">
            <a href="#home" class="acl-mobile-link" onclick="toggleMobileMenu()">Home</a>
            <a href="#services" class="acl-mobile-link" onclick="toggleMobileMenu()">Services</a>
            <a href="#experience" class="acl-mobile-link" onclick="toggleMobileMenu()">Experience</a>
            <a href="#projects" class="acl-mobile-link" onclick="toggleMobileMenu()">Work</a>
            <a href="#testimonials" class="acl-mobile-link" onclick="toggleMobileMenu()">Reviews</a>
            <a href="#" class="acl-mobile-link" onclick="toggleMobileMenu(); togglePopup('contactPopup')">Contact</a>
        </div>
        <div class="acl-mobile-theme-wrapper">
            <button class="acl-mobile-theme-btn" id="mobileThemeToggle">
                <i class="fas fa-moon"></i> <span>Dark Mode</span>
            </button>
        </div>
    </div>

    <div class="acl-modal-overlay" id="contactPopup">
        <div class="acl-modal-box">
            <i class="fas fa-times acl-close-trigger" onclick="togglePopup('contactPopup')"></i>
            <div id="formContentContainer">
                <div style="width: 60px; height: 60px; background: rgba(66, 185, 131, 0.1); color: var(--acl-brand-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 1.5rem;">
                    <i class="fas fa-paper-plane"></i>
                </div>
                <h3 style="margin-bottom: 20px;">Let's Talk Business</h3>
                <form id="aclContactForm" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="6293cc47-0847-4d84-be3e-f07dc9a3430b">
                    <input type="hidden" name="subject" value="New Business Inquiry via Portfolio">
                    <input type="hidden" name="from_name" value="Aldrian's Portfolio Site">
                    
                    <div class="acl-form-group">
                        <label class="acl-form-label">Name</label>
                        <input type="text" name="Client_Name" class="acl-form-input" required placeholder="John Doe">
                    </div>
                    
                    <div class="acl-form-group">
                        <label class="acl-form-label">Email</label>
                        <input type="email" name="Client_Email" class="acl-form-input" required placeholder="john@example.com">
                    </div>
                    
                    <div class="acl-form-group">
                        <label class="acl-form-label">I'm interested in...</label>
                        <select name="Service_Requested" class="acl-form-select">
                            <option value="Executive VA">Executive VA Support</option>
                            <option value="eCommerce Ops">eCommerce Operations</option>
                            <option value="Front-End Dev">Front-End Development</option>
                            <option value="Other">Other Inquiry</option>
                        </select>
                    </div>

                    <div class="acl-form-group">
                        <label class="acl-form-label">Message</label>
                        <textarea name="Project_Brief" class="acl-form-textarea" rows="3" required placeholder="Tell me about your project..."></textarea>
                    </div>
                    
                    <p id="formStatus" style="display:none; color: var(--acl-brand-primary); font-weight:700; margin-bottom:10px;">Sending...</p>
                    <button type="submit" class="acl-submit-btn">Send Message <i class="fas fa-arrow-right"></i></button>
                </form>
            </div>
            
            <div id="successMessage" style="display: none; padding: 20px;">
                <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--acl-brand-primary); margin-bottom: 20px;"></i>
                <h2 style="margin-bottom: 10px;">Message Sent!</h2>
                <p style="color: var(--acl-text-muted); font-size: 1rem;">Thanks for reaching out. I'll get back to you shortly.</p>
                <button class="acl-submit-btn" style="margin-top: 20px;" onclick="togglePopup('contactPopup')">Close</button>
            </div>
        </div>
    </div>

    <div class="acl-modal-overlay" id="serviceModal">
        <div class="acl-modal-box">
            <i class="fas fa-times acl-close-trigger" onclick="togglePopup('serviceModal')"></i>
            <div id="serviceModalContent"></div>
        </div>
    </div>

    <div class="acl-modal-overlay" id="caseStudyModal">
        <div class="acl-modal-box acl-case-modal">
            <div id="caseStudyModalContent"></div>
        </div>
    </div>

    <div class="acl-layout-shell">
        <nav class="acl-sidebar">
            <a href="#" class="acl-brand-logo"><i class="fas fa-layer-group"></i> Aldrian.</a>
            <div class="acl-nav-group">
                <a href="#home" class="acl-nav-link active"><i class="fas fa-home"></i> <span>Home</span></a>
                <a href="#services" class="acl-nav-link"><i class="fas fa-briefcase"></i> <span>Services</span></a>
                <a href="#experience" class="acl-nav-link"><i class="fas fa-history"></i> <span>Experience</span></a>
                <a href="#projects" class="acl-nav-link"><i class="fas fa-laptop-code"></i> <span>Work</span></a>
                <a href="#testimonials" class="acl-nav-link"><i class="fas fa-star"></i> <span>Reviews</span></a>
                <a href="#" onclick="togglePopup('contactPopup')" class="acl-nav-link"><i class="fas fa-envelope"></i> <span>Contact</span></a>
            </div>
            <button class="acl-theme-trigger" id="themeToggle"><i class="fas fa-moon"></i></button>
        </nav>

        <div class="acl-main-stage">
            <section id="home" class="acl-hero">
                <div class="acl-hero-content">
                    <div class="acl-status-pill"><i class="fas fa-check-circle"></i> Available for Hire</div>
                    <h1><span class="holographic-text">Top Rated VA</span> &<br><span style="color: var(--acl-brand-primary);">Technical Specialist</span></h1>
                    <p>I provide technical virtual assistant support for Shopify stores, WordPress websites, WooCommerce tasks, and eCommerce operations. I help business owners organize daily work, update product content, improve website pages, and fix front-end issues without the hassle of hiring separate people.</p>
                    <div class="acl-quick-stats">
                        <div class="acl-stat-item">
                            <h3><span class="count" data-target="20">0</span><span class="symbol">+</span></h3>
                            <p>Stores Managed</p>
                        </div>
                        <div class="acl-stat-item">
                            <h3><span class="count" data-target="100">0</span><span class="symbol">%</span></h3>
                            <p>Job Success</p>
                        </div>
                        <div class="acl-stat-item">
                            <h3><span class="count" data-target="5">0</span><span class="symbol">+</span></h3>
                            <p>Years Exp.</p>
                        </div>
                    </div>
                </div>
                <div class="acl-hero-visual">
                    <div class="acl-greeting-badge">Hi, I'm Aldrian 👋</div>
                    <div class="acl-blob-shape"></div>
                </div>
            </section>

            <div class="acl-tech-carousel" aria-label="Technical stack">
                <div class="acl-tech-track">
                    <div class="acl-tech-pill" title="Shopify" aria-label="Shopify"><i class="fab fa-shopify"></i><span>Shopify</span></div>
                    <div class="acl-tech-pill" title="WordPress" aria-label="WordPress"><i class="fab fa-wordpress"></i><span>WordPress</span></div>
                    <div class="acl-tech-pill" title="WooCommerce" aria-label="WooCommerce"><i class="fas fa-store"></i><span>WooCommerce</span></div>
                    <div class="acl-tech-pill" title="HTML5" aria-label="HTML5"><i class="fab fa-html5"></i><span>HTML5</span></div>
                    <div class="acl-tech-pill" title="CSS3" aria-label="CSS3"><i class="fab fa-css3-alt"></i><span>CSS3</span></div>
                    <div class="acl-tech-pill" title="JavaScript" aria-label="JavaScript"><i class="fab fa-js"></i><span>JavaScript</span></div>
                    <div class="acl-tech-pill" title="PHP" aria-label="PHP"><i class="fab fa-php"></i><span>PHP</span></div>
                    <div class="acl-tech-pill" title="Trello" aria-label="Trello"><i class="fab fa-trello"></i><span>Trello</span></div>
                    <div class="acl-tech-pill" title="Slack" aria-label="Slack"><i class="fab fa-slack"></i><span>Slack</span></div>
                    <div class="acl-tech-pill" title="Klaviyo" aria-label="Klaviyo"><i class="fas fa-envelope-open-text"></i><span>Klaviyo</span></div>
                    <div class="acl-tech-pill" title="Google Workspace" aria-label="Google Workspace"><i class="fab fa-google"></i><span>Google Workspace</span></div>
                    <div class="acl-tech-pill" title="Shopify" aria-label="Shopify"><i class="fab fa-shopify"></i><span>Shopify</span></div>
                    <div class="acl-tech-pill" title="WordPress" aria-label="WordPress"><i class="fab fa-wordpress"></i><span>WordPress</span></div>
                    <div class="acl-tech-pill" title="WooCommerce" aria-label="WooCommerce"><i class="fas fa-store"></i><span>WooCommerce</span></div>
                    <div class="acl-tech-pill" title="HTML5" aria-label="HTML5"><i class="fab fa-html5"></i><span>HTML5</span></div>
                    <div class="acl-tech-pill" title="CSS3" aria-label="CSS3"><i class="fab fa-css3-alt"></i><span>CSS3</span></div>
                    <div class="acl-tech-pill" title="JavaScript" aria-label="JavaScript"><i class="fab fa-js"></i><span>JavaScript</span></div>
                    <div class="acl-tech-pill" title="PHP" aria-label="PHP"><i class="fab fa-php"></i><span>PHP</span></div>
                    <div class="acl-tech-pill" title="Trello" aria-label="Trello"><i class="fab fa-trello"></i><span>Trello</span></div>
                    <div class="acl-tech-pill" title="Slack" aria-label="Slack"><i class="fab fa-slack"></i><span>Slack</span></div>
                    <div class="acl-tech-pill" title="Klaviyo" aria-label="Klaviyo"><i class="fas fa-envelope-open-text"></i><span>Klaviyo</span></div>
                    <div class="acl-tech-pill" title="Google Workspace" aria-label="Google Workspace"><i class="fab fa-google"></i><span>Google Workspace</span></div>
                </div>
            </div>

            <section class="acl-section acl-help-section">
                <div class="acl-heading-wrapper"><h2>Who I Help</h2><p class="acl-section-intro">I work with store owners, founders, website teams, and small businesses that need reliable technical support for daily website and eCommerce tasks.</p></div>
                <div class="acl-folder-grid">
                    <div class="acl-folder-card"><span class="acl-folder-tab">Shopify</span><i class="fas fa-shopping-bag"></i><h3>Store Owners</h3><p>I help with product uploads, store updates, inventory tasks, and daily eCommerce support.</p></div>
                    <div class="acl-folder-card"><span class="acl-folder-tab">WordPress</span><i class="fab fa-wordpress"></i><h3>Website Teams</h3><p>I support WordPress updates, page edits, WooCommerce tasks, and front-end fixes.</p></div>
                    <div class="acl-folder-card"><span class="acl-folder-tab">Remote</span><i class="fas fa-headset"></i><h3>Busy Founders</h3><p>I organize admin work, inbox tasks, schedules, reports, and recurring operations.</p></div>
                    <div class="acl-folder-card"><span class="acl-folder-tab">Growth</span><i class="fas fa-chart-line"></i><h3>Small Teams</h3><p>I keep tasks moving with reliable support across tools, content, listings, and websites.</p></div>
                </div>
            </section>

            <section id="process" class="acl-section">
                <div class="acl-heading-wrapper"><h2>How I Work</h2></div>
                <div class="acl-process-grid">
                    <div class="acl-process-step">
                        <div class="acl-step-icon"><i class="fas fa-comments"></i></div>
                        <h3>1. Discovery</h3>
                        <p style="font-size: 0.9rem; color: var(--acl-text-muted);">I chat for 15 mins to align on goals and access requirements.</p>
                    </div>
                    <div class="acl-process-step">
                        <div class="acl-step-icon"><i class="fas fa-tools"></i></div>
                        <h3>2. Audit & Setup</h3>
                        <p style="font-size: 0.9rem; color: var(--acl-text-muted);">I audit your current setup, fix immediate bugs, and organize workflows.</p>
                    </div>
                    <div class="acl-process-step">
                        <div class="acl-step-icon"><i class="fas fa-rocket"></i></div>
                        <h3>3. Execution</h3>
                        <p style="font-size: 0.9rem; color: var(--acl-text-muted);">I get to work on deliverables. You receive clear weekly reports.</p>
                    </div>
                </div>
            </section>

            <section id="services" class="acl-section">
                <div class="acl-heading-wrapper"><h2>What I Do</h2><p class="acl-section-intro">I support online businesses with website updates, eCommerce operations, and remote admin work. My work combines virtual assistant support with hands-on Shopify, WordPress, WooCommerce, HTML, CSS, JavaScript, and PHP experience.</p></div>
                <div class="acl-grid-3">
                    <div class="acl-glass-card tilt-card">
                        <div class="acl-card-icon"><i class="fas fa-tasks"></i></div>
                        <h3>Executive VA</h3>
                        <p style="color: var(--acl-text-muted); font-size: 0.95rem; margin-top: 10px;">I handle the chaos so you don't have to. Inbox management, complex scheduling, and CRM organization.</p>
                        <button class="acl-link-btn" onclick="openServiceDetails('va')">Learn More <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="acl-glass-card tilt-card">
                        <div class="acl-card-icon"><i class="fas fa-store"></i></div>
                        <h3>eCommerce Ops</h3>
                        <p style="color: var(--acl-text-muted); font-size: 0.95rem; margin-top: 10px;">Shopify & WooCommerce specialist. I manage product listings, inventory updates, and order fulfillment.</p>
                        <button class="acl-link-btn" onclick="openServiceDetails('ecom')">Learn More <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="acl-glass-card tilt-card">
                        <div class="acl-card-icon"><i class="fas fa-code"></i></div>
                        <h3>Front-End Dev</h3>
                        <p style="color: var(--acl-text-muted); font-size: 0.95rem; margin-top: 10px;">Need a landing page tweaked? I use my coding background (HTML/CSS) to solve technical issues fast.</p>
                        <button class="acl-link-btn" onclick="openServiceDetails('dev')">Learn More <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </section>

            <section id="experience" class="acl-section">
                <div class="acl-heading-wrapper"><h2>My Journey</h2></div>
                <div class="acl-timeline-track">
                    <div class="acl-timeline-entry">
                        <div class="acl-timeline-marker"></div>
                        <span class="acl-date-tag">AUG 2024 - PRESENT</span>
                        <h3>eCommerce Virtual Assistant</h3>
                        <p style="color: var(--acl-text-muted); margin-top: 5px; font-weight: 600;">Freelance (Remote)</p>
                        <p style="color: var(--acl-text-muted); margin-top: 10px;">Managing end-to-end operations for multiple Shopify stores. Implemented a new inventory tracking system that reduced stockouts by 20%.</p>
                    </div>
                    <div class="acl-timeline-entry">
                        <div class="acl-timeline-marker"></div>
                        <span class="acl-date-tag">DEC 2023 - JULY 2024</span>
                        <h3>Senior Traffic Manager</h3>
                        <p style="color: var(--acl-text-muted); margin-top: 5px; font-weight: 600;">Labrador Information Transparency</p>
                        <p style="color: var(--acl-text-muted); margin-top: 10px;">Oversaw high-volume workflow for ESG reporting. My role required extreme attention to detail and zero-error tolerance.</p>
                    </div>
                    <div class="acl-timeline-entry">
                        <div class="acl-timeline-marker"></div>
                        <span class="acl-date-tag">JUN 2022 - AUG 2023</span>
                        <h3>Project Manager</h3>
                        <p style="color: var(--acl-text-muted); margin-top: 5px; font-weight: 600;">Toppan Merrill</p>
                        <p style="color: var(--acl-text-muted); margin-top: 10px;">Led cross-functional teams to deliver compliance documents for US clients on strict deadlines.</p>
                    </div>
                </div>
            </section>

            <section id="projects" class="acl-section">
                <div class="acl-heading-wrapper"><h2>Works</h2></div>
                <div class="acl-work-grid">
                    <article class="acl-work-card">
                        <div class="acl-work-card-top">
                            <span class="acl-work-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                            <span class="acl-work-floating-badge">WordPress Development</span>
                        </div>
                        <a href="work-origin-code.html" class="acl-work-preview" aria-label="View Origin Code Technology work">
                            <img src="images/ORIGIN CODE TECHNOLOGY SOLUTIONS.png" alt="Origin Code Technology WordPress development project by Aldrian Loyola" loading="lazy">
                        </a>
                        <div class="acl-work-content">
                            <h3>Origin Code Technology</h3>
                            <a href="work-origin-code.html" class="acl-work-link" aria-label="View Origin Code Technology work">View Work</a>
                        </div>
                    </article>
                    <article class="acl-work-card">
                        <div class="acl-work-card-top">
                            <span class="acl-work-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                            <span class="acl-work-floating-badge">WordPress eCommerce</span>
                        </div>
                        <a href="work-ipoppet-store.html" class="acl-work-preview" aria-label="View Ipoppet Store work">
                            <img src="images/IPOPPET.png" alt="Ipoppet Store WooCommerce support project by Aldrian Loyola" loading="lazy">
                        </a>
                        <div class="acl-work-content">
                            <h3>Ipoppet Store</h3>
                            <a href="work-ipoppet-store.html" class="acl-work-link" aria-label="View Ipoppet Store work">View Work</a>
                        </div>
                    </article>
                    <article class="acl-work-card">
                        <div class="acl-work-card-top">
                            <span class="acl-work-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                            <span class="acl-work-floating-badge">WordPress Optimization</span>
                        </div>
                        <a href="work-artic-flex.html" class="acl-work-preview" aria-label="View Artic Flex work">
                            <img src="images/ARTICFLEX.png" alt="Artic Flex WordPress optimization project by Aldrian Loyola" loading="lazy">
                        </a>
                        <div class="acl-work-content">
                            <h3>Artic Flex</h3>
                            <a href="work-artic-flex.html" class="acl-work-link" aria-label="View Artic Flex work">View Work</a>
                        </div>
                    </article>
                </div>
            </section>

            <section id="testimonials" class="acl-section">
                <div class="acl-heading-wrapper"><h2>Upwork Reviews</h2></div>
                <div class="acl-masonry-grid">
                    <div class="acl-masonry-item">
                        <div class="acl-glass-card tilt-card">
                            <div class="acl-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p style="font-style: italic; font-size: 0.95rem;">"Nice work and good turn around. Will use again."</p>
                            <span class="acl-tag"><i class="fas fa-tag"></i> Property Management Blog</span>
                        </div>
                    </div>
                    <div class="acl-masonry-item">
                        <div class="acl-glass-card tilt-card">
                            <div class="acl-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p style="font-style: italic; font-size: 0.95rem;">"You can't go wrong with Aldrian! He's an excellent writer and the quality of his work is second to none."</p>
                            <span class="acl-tag"><i class="fas fa-tag"></i> Blog Content Writer</span>
                        </div>
                    </div>
                    <div class="acl-masonry-item">
                        <div class="acl-glass-card tilt-card">
                            <div class="acl-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p style="font-style: italic; font-size: 0.95rem;">"Aldrian continues to excel in everything that he does. He has completed several tasks for my website... graphics and so much more."</p>
                            <span class="acl-tag"><i class="fas fa-tag"></i> Web & Graphics Support</span>
                        </div>
                    </div>
                    <div class="acl-masonry-item">
                        <div class="acl-glass-card tilt-card">
                            <div class="acl-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p style="font-style: italic; font-size: 0.95rem;">"Aldrian is a great team player... He has a good sense of business and understands the marketing aspects required."</p>
                            <span class="acl-tag"><i class="fas fa-tag"></i> WordPress & WooCommerce VA</span>
                        </div>
                    </div>
                    <div class="acl-masonry-item">
                        <div class="acl-glass-card tilt-card">
                            <div class="acl-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p style="font-style: italic; font-size: 0.95rem;">"Aldrian was a pleasure to work with on these small but important and time-sensitive WooCommerce tasks... communicated well."</p>
                            <span class="acl-tag"><i class="fas fa-tag"></i> WooCommerce Fixes</span>
                        </div>
                    </div>
                    <div class="acl-masonry-item">
                        <div class="acl-glass-card tilt-card">
                            <div class="acl-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p style="font-style: italic; font-size: 0.95rem;">"Really enjoyed working with Aldrian. Takes care of all details, very accurate... make sure that we're on the same page before starting."</p>
                            <span class="acl-tag"><i class="fas fa-tag"></i> eCommerce VA</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="acl-footer">
                <p>&copy; <span id="copyright-year"></span> Aldrian Loyola. Technical VA, Shopify, WordPress, and eCommerce Support.</p>
            </footer>
            <div class="acl-mobile-sticky-cta">
                <button onclick="togglePopup('contactPopup')"><i class="fas fa-paper-plane"></i> Hire Me</button>
            </div>
        </div>
    </div>
`;
  }
})();
