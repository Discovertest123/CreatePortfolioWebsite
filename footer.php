</main>
<footer style="background-color:#0A0A0A;padding:48px 0;border-top:1px solid rgba(255,255,255,0.06)"><div class="container"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;margin-bottom:32px"><div><div class="footer-logo-lockup" style="font-size:18px;font-weight:700;color:#fff;margin-bottom:6px"><img src="assets/site-logo.svg" alt="Sarfaraj Khan"/></div><div style="font-size:13px;color:#6B7280;font-weight:500">Web Designer &amp; WordPress Developer</div></div><nav style="display:flex;gap:28px;flex-wrap:wrap"><a href="<?= $navPrefix ?>#home" style="font-size:13px;font-weight:500;color:#6B7280;text-decoration:none;transition:color 0.2s">Home</a><a href="<?= $navPrefix ?>#about" style="font-size:13px;font-weight:500;color:#6B7280;text-decoration:none;transition:color 0.2s">About</a><a href="<?= $navPrefix ?>#services" style="font-size:13px;font-weight:500;color:#6B7280;text-decoration:none;transition:color 0.2s">Services</a><a href="<?= $navPrefix ?>#work" style="font-size:13px;font-weight:500;color:#6B7280;text-decoration:none;transition:color 0.2s">Work</a><a href="<?= $navPrefix ?>#skills" style="font-size:13px;font-weight:500;color:#6B7280;text-decoration:none;transition:color 0.2s">Skills</a><a href="<?= $navPrefix ?>#experience" style="font-size:13px;font-weight:500;color:#6B7280;text-decoration:none;transition:color 0.2s">Experience</a><a href="<?= $navPrefix ?>#contact" style="font-size:13px;font-weight:500;color:#6B7280;text-decoration:none;transition:color 0.2s">Contact</a></nav></div><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px"><span style="font-size:12px;font-weight:500;color:#4B5563;padding:4px 12px;background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:4px">WordPress</span><span style="font-size:12px;font-weight:500;color:#4B5563;padding:4px 12px;background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:4px">UI/UX</span><span style="font-size:12px;font-weight:500;color:#4B5563;padding:4px 12px;background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:4px">Figma</span><span style="font-size:12px;font-weight:500;color:#4B5563;padding:4px 12px;background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:4px">WooCommerce</span><span style="font-size:12px;font-weight:500;color:#4B5563;padding:4px 12px;background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:4px">Analytics</span></div><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06)"><span style="font-size:13px;color:#4B5563">© <?= date('Y') ?> Sarfaraj Khan. All Rights Reserved.</span><div style="display:flex;gap:20px"><a href="https://sarfarajxl.com" style="font-size:13px;color:#6B7280;text-decoration:none;transition:color 0.2s">sarfarajxl.com</a><a href="https://linkedin.com/in/sarfarajxl" style="font-size:13px;color:#6B7280;text-decoration:none;transition:color 0.2s">LinkedIn</a></div></div></div></footer>
<style>
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 900px) {
          section > .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          section > .container > div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          section > .container > div[style*="grid-template-columns: repeat(5, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          section > .container > div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      </style>
<script src="assets/script.js" defer></script>
</div>
</body>
</html>
