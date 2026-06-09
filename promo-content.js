(() => {
  const app = document.getElementById('acl-promo-app');
  if (app) {
    app.innerHTML = `

    <div id="lightbox" class="acl-lightbox" onclick="closeLightbox()">
        <span class="acl-lb-close" onclick="closeLightbox()">&times;</span>
        <div class="acl-lb-control acl-lb-prev" onclick="changeSlide(-1); event.stopPropagation();"><i class="fas fa-chevron-left"></i></div>
        <div class="acl-lb-control acl-lb-next" onclick="changeSlide(1); event.stopPropagation();"><i class="fas fa-chevron-right"></i></div>
        <img id="lightbox-img" src="" onclick="event.stopPropagation()">
    </div>

    <div class="acl-urgency-bar">
        <span class="acl-pulse-dot"></span> High Demand: <span style="text-decoration: underline;">Limited Slots</span> Available for <span id="current-offer-month"></span>.
    </div>

    <div class="acl-container">
        
        <nav class="acl-logo-nav">
            <a href="index.html" class="acl-brand-logo"><i class="fas fa-layer-group"></i> Aldrian.</a>
            <div>
                <a href="#demos" style="margin-right: 20px; text-decoration: none; color: var(--acl-text-main); font-weight: 600;">Demos</a>
                <a href="#contact" class="acl-cta-btn" style="width: auto; padding: 12px 30px; font-size: 0.9rem;">Start Project</a>
            </div>
        </nav>

        <section class="acl-promo-hero">
            <div class="acl-price-badge">$100 USD / YEAR ALL-IN</div>
            <h1>Pure Code. High Speed.<br><span style="color: var(--acl-brand-primary);">Low Maintenance.</span></h1>
            <p class="acl-subtext">I build custom static websites with clean code, fast loading, and lower maintenance needs. Domain and hosting are included for the first year.</p>
            
            <div class="acl-tech-row">
                <div class="acl-tech-badge"><i class="fab fa-html5"></i> HTML5</div>
                <div class="acl-tech-badge"><i class="fab fa-css3-alt"></i> CSS3</div>
                <div class="acl-tech-badge"><i class="fab fa-js"></i> JavaScript</div>
                <div class="acl-tech-badge"><i class="fas fa-mobile-alt"></i> Responsive</div>
            </div>

            <a href="#contact" class="acl-cta-btn" style="display:inline-block; width:auto; padding: 18px 50px; text-decoration:none;">
                Secure Your Spot <i class="fas fa-arrow-down"></i>
            </a>
        </section>

        <section id="demos" class="acl-demo-section">
            <h2 class="acl-section-title">Visual <span>Precision</span></h2>
            <p style="color: var(--acl-text-muted); margin-bottom: 30px;">Clean layouts designed for conversion.</p>
            
            <div class="acl-gallery-container">
                <div class="acl-gallery-item" onclick="openLightbox(0)">
                    <img src="images/demo/interior-design-website-template.jpg" alt="Interior Design">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Interior Design</h4>
                    </div>
                </div>
                <div class="acl-gallery-item" onclick="openLightbox(1)">
                    <img src="images/demo/architecture-html-template.jpg" alt="Architecture">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Architecture</h4>
                    </div>
                </div>
                <div class="acl-gallery-item" onclick="openLightbox(2)">
                    <img src="images/demo/home-repair-website-template.jpg" alt="Home Repair">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Home Repair</h4>
                    </div>
                </div>
                <div class="acl-gallery-item" onclick="openLightbox(3)">
                    <img src="images/demo/building-construction-website-template.jpg" alt="Construction">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Construction</h4>
                    </div>
                </div>
                <div class="acl-gallery-item" onclick="openLightbox(4)">
                    <img src="images/demo/real-estate-html-template.jpg" alt="Real Estate">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Real Estate</h4>
                    </div>
                </div>
                <div class="acl-gallery-item" onclick="openLightbox(5)">
                    <img src="images/demo/online-shop-website-template.jpg" alt="Online Shop">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Online Shop</h4>
                    </div>
                </div>
                <div class="acl-gallery-item" onclick="openLightbox(6)">
                    <img src="images/demo/bootstrap-ecommerce-template.jpg" alt="Fashion Store">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Fashion Store</h4>
                    </div>
                </div>
                <div class="acl-gallery-item" onclick="openLightbox(7)">
                    <img src="images/demo/ecommerce-html-template.jpg" alt="Modern Ecommerce">
                    <div class="acl-gallery-overlay">
                        <div class="acl-overlay-circle"><i class="fas fa-eye"></i></div>
                        <h4>Modern Ecommerce</h4>
                    </div>
                </div>
            </div>
        </section>

        <section class="acl-stack-container">
            
            <div class="acl-plain-panel acl-panel-green">
                <h3 style="margin-bottom: 25px; font-size: 1.8rem;">
                    <i class="fas fa-rocket" style="color: var(--acl-brand-primary); margin-right: 10px;"></i> 
                    The "No-Bloat" Advantage
                </h3>
                <p style="margin-bottom: 25px; font-size: 0.95rem; line-height: 1.6; color: var(--acl-text-muted);">
                    WordPress sites are heavy and require constant updates. My code is featherlight, secure, and maintenance-free.
                </p>
                <ul class="acl-check-list">
                    <li>
                        <i class="fas fa-check"></i> 
                        <div class="acl-list-text"><strong>Fast Loading:</strong> Optimized for speed and cleaner page delivery.</div>
                    </li>
                    <li>
                        <i class="fas fa-check"></i> 
                        <div class="acl-list-text"><strong>Lower Security Risk:</strong> No database or plugin stack means fewer common attack points.</div>
                    </li>
                    <li>
                        <i class="fas fa-check"></i> 
                        <div class="acl-list-text">
                            <strong>Free Domain:</strong>
                            <i class="fas fa-info-circle acl-tooltip-icon" data-tip="Free 1st year. Renewal rates apply after."></i>
                            <br><span>.com or .net included.</span>
                        </div>
                    </li>
                    <li>
                        <i class="fas fa-check"></i> 
                        <div class="acl-list-text"><strong>4 Core Pages:</strong> Home, About, Services, Contact.</div>
                    </li>
                    <li>
                        <i class="fas fa-sync-alt"></i> 
                        <div class="acl-list-text"><strong>3 Free Revisions:</strong> 3 rounds of changes included during build.</div>
                    </li>
                </ul>
            </div>

            <div class="acl-plain-panel acl-panel-red">
                <h3 style="margin-bottom: 25px; font-size: 1.8rem;">
                    <i class="fas fa-exclamation-triangle" style="color: var(--acl-accent); margin-right: 10px;"></i> 
                    The Deal Breakers
                </h3>
                <p style="margin-bottom: 25px; font-size: 0.95rem; line-height: 1.6; color: var(--acl-text-muted);">
                    To maintain this exceptional quality at the $100 price point, we adhere to a strict scope:
                </p>
                <ul class="acl-check-list">
                    <li class="limit">
                        <i class="fas fa-times"></i> 
                        <div class="acl-list-text"><strong>No CMS Logins:</strong> I handle the code so you don't break it.</div>
                    </li>
                    <li class="limit">
                        <i class="fas fa-times"></i> 
                        <div class="acl-list-text"><strong>No E-Commerce:</strong> No shopping carts or payments.</div>
                    </li>
                    <li class="limit">
                        <i class="fas fa-times"></i> 
                        <div class="acl-list-text"><strong>Content Ready:</strong> You must have text/images ready.</div>
                    </li>
                    <li class="limit">
                        <i class="fas fa-dollar-sign"></i> 
                        <div class="acl-list-text"><strong>Updates Cost $10:</strong> Content updates after launch are $10/request.</div>
                    </li>
                    <li class="limit">
                        <i class="fas fa-times"></i> 
                        <div class="acl-list-text"><strong>No Custom Functions:</strong> Standard informational layout only.</div>
                    </li>
                </ul>
            </div>

        </section>

        <section class="acl-compare-section">
            <h2 class="acl-section-title">Why <span>$100 Custom</span> Wins</h2>
            <p id="mobile-hint" style="text-align:center; color: var(--acl-text-muted); margin-bottom: 10px; font-size: 0.85rem; display: none;">
                <i class="fas fa-arrows-alt-h"></i> Swipe to compare
            </p>
            <table class="acl-compare-table">
                <thead>
                    <tr>
                        <th style="text-align: left;">Feature</th>
                        <th style="color: var(--acl-brand-primary);">My Custom Code</th>
                        <th>Wix / Squarespace</th>
                        <th>Cheap WordPress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: left; font-weight: 600;">Pricing Model</td>
                        <td style="font-weight: 800; color: var(--acl-brand-primary);">One-Time Setup + Yearly Renewal</td>
                        <td>Expensive Monthly Subscription</td>
                        <td>Monthly + Plugin Fees</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; font-weight: 600;">Load Speed</td>
                        <td><i class="fas fa-bolt acl-compare-check"></i> Fast-loading static pages</td>
                        <td><i class="fas fa-times acl-compare-x"></i> Slow Bloat</td>
                        <td><i class="fas fa-times acl-compare-x"></i> Slow Plugins</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; font-weight: 600;">Maintenance</td>
                        <td><i class="fas fa-shield-alt acl-compare-check"></i> Low-maintenance setup</td>
                        <td>You Design It</td>
                        <td>You Update Plugins</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2 class="acl-section-title">Direct Developer <span>Support</span></h2>
            <div class="acl-why-grid">
                <div class="acl-why-card">
                    <div class="acl-why-icon"><i class="fas fa-user-shield"></i></div>
                    <h3>No Middlemen</h3>
                    <p style="color: var(--acl-text-muted); margin-top: 10px;">You talk directly to me, Aldrian. Not a chatbot or a call center agent.</p>
                </div>
                <div class="acl-why-card">
                    <div class="acl-why-icon"><i class="fas fa-envelope-open-text"></i></div>
                    <h3>Fair Updates</h3>
                    <p style="color: var(--acl-text-muted); margin-top: 10px;">3 revisions included. Future content updates are just $10 flat.</p>
                </div>
                <div class="acl-why-card">
                    <div class="acl-why-icon"><i class="fas fa-server"></i></div>
                    <h3>Reliable Uptime</h3>
                    <p style="color: var(--acl-text-muted); margin-top: 10px;">Your site is hosted on reliable static hosting/CDN infrastructure designed for strong uptime and fast delivery.</p>
                </div>
            </div>
        </section>

        <div class="acl-upsell-banner">
            <div class="acl-upsell-text">
                <h4><i class="fas fa-plus-circle" style="color: gold; margin-right: 10px;"></i> Need More Pages?</h4>
                <p>The standard pack includes 4 pages. Need more? Add them for just <strong>$25 USD per page</strong>.</p>
            </div>
            <a href="#contact" class="acl-upsell-btn">Add to Quote</a>
        </div>


        <section class="acl-terms-section">
            <h2 class="acl-section-title">What Is <span>Included</span></h2>
            <div class="acl-terms-grid">
                <div class="acl-terms-card">
                    <h3><i class="fas fa-check-circle"></i> Included</h3>
                    <ul class="acl-check-list">
                        <li><i class="fas fa-check"></i><div class="acl-list-text">Up to 4 static website pages</div></li>
                        <li><i class="fas fa-check"></i><div class="acl-list-text">First-year domain and hosting setup</div></li>
                        <li><i class="fas fa-check"></i><div class="acl-list-text">Mobile responsive layout</div></li>
                        <li><i class="fas fa-check"></i><div class="acl-list-text">Basic SEO setup and contact form</div></li>
                        <li><i class="fas fa-check"></i><div class="acl-list-text">3 revision rounds during the build</div></li>
                    </ul>
                </div>
                <div class="acl-terms-card">
                    <h3><i class="fas fa-info-circle"></i> Not Included</h3>
                    <ul class="acl-check-list">
                        <li><i class="fas fa-times"></i><div class="acl-list-text">eCommerce checkout, booking systems, or member logins</div></li>
                        <li><i class="fas fa-times"></i><div class="acl-list-text">Email hosting or business inbox setup</div></li>
                        <li><i class="fas fa-times"></i><div class="acl-list-text">Custom apps, dashboards, or database features</div></li>
                        <li><i class="fas fa-times"></i><div class="acl-list-text">Ongoing content writing or unlimited edits</div></li>
                        <li><i class="fas fa-times"></i><div class="acl-list-text">Renewal costs may vary after the first year depending on domain pricing</div></li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2 class="acl-section-title">How It <span>Works</span></h2>
            <div class="acl-timeline">
                <div class="acl-step">
                    <div class="acl-step-num">1</div>
                    <div>
                        <h4>Submit Form</h4>
                        <p style="font-size: 0.9rem; color: var(--acl-text-muted);">Fill out the request below. Have your content ready.</p>
                    </div>
                </div>
                <div class="acl-step">
                    <div class="acl-step-num">2</div>
                    <div>
                        <h4>I Write Code</h4>
                        <p style="font-size: 0.9rem; color: var(--acl-text-muted);">I build your site in 5-7 days. 3 free revision rounds included.</p>
                    </div>
                </div>
                <div class="acl-step">
                    <div class="acl-step-num">3</div>
                    <div>
                        <h4>Launch!</h4>
                        <p style="font-size: 0.9rem; color: var(--acl-text-muted);">Your site goes live. Hosting is covered for a full year.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" style="max-width: 550px; margin: 0 auto; text-align: center;">
            <h2 style="margin-bottom: 10px;">Check Availability</h2>
            <p style="color: var(--acl-text-muted); margin-bottom: 30px;">Due to high demand, I limit projects to ensure quality.</p>
            
            <div class="acl-glass-card-form">
                <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(transparent, rgba(255,255,255,0.3), transparent); transform: rotate(45deg); pointer-events: none;"></div>

                <form id="promoForm" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="6293cc47-0847-4d84-be3e-f07dc9a3430b">
                    <input type="hidden" name="subject" value="$100 Clean Code Website Request">
                    <input type="hidden" name="from_name" value="Aldrian's Promo Page">

                    <label style="font-weight: 700; font-size: 0.9rem; margin-bottom: 5px; display:block; color: var(--acl-text-muted);">Your Name</label>
                    <input type="text" name="Client_Name" class="acl-form-input" required placeholder="John Doe">

                    <label style="font-weight: 700; font-size: 0.9rem; margin-bottom: 5px; display:block; color: var(--acl-text-muted);">Your Email</label>
                    <input type="email" name="Client_Email" class="acl-form-input" required placeholder="best@email.com">

                    <label style="font-weight: 700; font-size: 0.9rem; margin-bottom: 5px; display:block; color: var(--acl-text-muted);">Desired Domain / Business Name</label>
                    <input type="text" name="Business_Info" class="acl-form-input" required placeholder="e.g. MyAwesomeShop.com">

                    <label style="font-weight: 700; font-size: 0.9rem; margin-bottom: 5px; display:block; color: var(--acl-text-muted);">Timeline</label>
                    <select name="Timeline" class="acl-form-select" required>
                        <option value="" disabled selected>Select a timeframe...</option>
                        <option value="Standard (5-7 Days)">Standard (5-7 Business Days)</option>
                        <option value="2 Weeks">In 2 Weeks</option>
                        <option value="Next Month">Next Month</option>
                    </select>
                    
                    <label style="font-weight: 700; font-size: 0.9rem; margin-bottom: 5px; display:block; color: var(--acl-text-muted);">Additional Pages?</label>
                    <textarea name="Project_Details" class="acl-form-textarea" rows="2" placeholder="Standard 4 pages included. Need extra pages? List them here ($25/page)..."></textarea>

                    <p style="font-size: 0.8rem; color: var(--acl-accent); margin-top: 0px; margin-bottom: 8px; font-weight: 700;">*Standard pack includes 4 pages & 3 revisions.</p>
                    <p class="acl-privacy-note"><i class="fas fa-lock"></i> Your name and email are only used to reply to your website request.</p>

                    <input type="hidden" name="Agreement" value="Client understands static code nature.">

                    <p id="promoStatus" style="display:none; color: var(--acl-brand-primary); font-weight: 700; margin-bottom: 15px;">Sending...</p>

                    <button type="submit" class="acl-cta-btn">Lock In $100 Rate</button>
                </form>
                
                <div id="promoSuccess" style="display: none; text-align: center; padding: 40px 20px;">
                    <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--acl-brand-primary); margin-bottom: 20px;"></i>
                    <h3>Request Received!</h3>
                    <p>I will review your request and confirm slot availability within 24 hours.</p>
                </div>
            </div>
        </section>

        <section class="acl-faq-section" style="margin-top: 80px;">
            <h2 class="acl-section-title">Common <span>Questions</span></h2>
            
            <details class="acl-faq-item">
                <summary>Can I edit the text myself?</summary>
                <div class="acl-faq-content">
                    No, to keep the site secure, I handle the code. You get 3 free revision rounds during the build. After that, updates are just $10/request.
                </div>
            </details>

            <details class="acl-faq-item">
                <summary>What happens after the first year?</summary>
                <div class="acl-faq-content">
                    The $100 fee is annual. It covers your hosting, domain renewal, and technical maintenance. You can cancel anytime, but the site hosting will stop.
                </div>
            </details>

            <details class="acl-faq-item">
                <summary>Can I add more pages later?</summary>
                <div class="acl-faq-content">
                    Absolutely! The base package includes 4 pages. We can add additional pages at any time for a one-time fee of $25 per page.
                </div>
            </details>
        </section>

        <footer style="text-align: center; margin-top: 80px; color: var(--acl-text-muted); font-size: 0.9rem; padding-bottom: 40px;">
            <p>&copy; <span id="year">2026</span> Aldrian Loyola. <a href="index.html" style="color: var(--acl-brand-primary); text-decoration: none; font-weight: 700;">Return to Main Portfolio</a></p>
        </footer>

    </div>`;
  }
})();
