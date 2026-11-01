<?php
$pageTitle = 'Natdoctor Healthcare Website | Sarfaraj Khan';
$pageDescription = 'Natdoctor healthcare website design and front-end development case study by Sarfaraj Khan.';

$goals = [
    'Present healthcare services in a clear, professional format.',
    'Build trust through practitioner information and educational content.',
    'Improve navigation across treatments and clinical focus areas.',
    'Encourage visitors to take the wellness quiz and book discovery calls.',
    'Make health information accessible through blogs and FAQs.',
];

$features = [
    ['Service Pages', 'Dedicated sections for naturopathic care, acupuncture, nutrition, and other wellness treatments.'],
    ['User-Friendly Navigation', 'Organized clinical focus areas and service categories that help visitors find relevant care.'],
    ['Consultation Booking', 'Clear calls to action for booking a free discovery call with the practitioner.'],
    ['Wellness Quiz', 'An approachable way for visitors to explore and understand their health priorities.'],
    ['Educational Blog', 'Health and wellness articles that inform visitors and support professional credibility.'],
    ['FAQ Section', 'Accessible answers to common questions about naturopathic medicine and care.'],
    ['Responsive Experience', 'Services and educational content remain accessible across desktop, tablet, and mobile.'],
];

require __DIR__ . '/header.php';
?>
<section class="case-study-hero" style="padding-top:148px">
  <div class="container">
    <div class="case-study-breadcrumb">Selected Work <span>/</span> Healthcare &amp; Wellness</div>
    <div class="case-study-hero-grid">
      <div>
        <div class="case-study-eyebrow">Web Design &amp; Front-End Development</div>
        <h1>Natdoctor — Healthcare Website Design &amp; Development</h1>
      </div>
      <p>A professional healthcare experience for Dr. Natalie Cheng, helping patients understand personalized wellness services and confidently take the next step toward consultation.</p>
    </div>
    <div class="case-study-cover">
      <img src="assets/natdoctor-project.jpg" alt="Natdoctor healthcare website shown on a laptop mockup">
    </div>
    <div class="case-study-meta">
      <div><span>Industry</span><strong>Healthcare &amp; Wellness</strong></div>
      <div><span>Project Type</span><strong>Website Design, UI/UX &amp; Development</strong></div>
      <div><span>Tool / Platform</span><strong>Custom HTML, Bootstrap</strong></div>
      <div><span>Service</span><strong>Web Design &amp; Front-End Development</strong></div>
    </div>
  </div>
</section>

<section class="case-study-section">
  <div class="container case-study-two-column">
    <div>
      <div class="case-study-section-label">Project Overview</div>
      <h2>Making personalized healthcare easier to understand.</h2>
    </div>
    <div class="case-study-body-copy">
      <p>Natdoctor showcases naturopathic medicine, acupuncture, nutrition counselling, hypnotherapy, and other personalized wellness services in one clear digital experience.</p>
      <p>The website guides patients from learning about available treatments to exploring resources, taking a wellness quiz, and booking a discovery call.</p>
    </div>
  </div>
</section>

<section class="case-study-section case-study-soft-section">
  <div class="container">
    <div class="case-study-section-heading">
      <div class="case-study-section-label">Project Goals</div>
      <h2>A clear path from discovery to consultation.</h2>
    </div>
    <div class="case-study-goal-grid">
      <?php foreach ($goals as $index => $goal): ?>
        <div class="case-study-goal-card glass-card">
          <span><?= str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT) ?></span>
          <p><?= htmlspecialchars($goal, ENT_QUOTES, 'UTF-8') ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="case-study-section">
  <div class="container case-study-role-panel">
    <div>
      <div class="case-study-section-label">My Role as a Web Designer</div>
      <h2>Visual direction, information architecture, and conversion-focused UI.</h2>
    </div>
    <p>I shaped the website's visual presentation, content hierarchy, responsive experience, and calls to action. The project focused on presenting complex healthcare information with clarity while creating a warm, trustworthy patient journey.</p>
  </div>
</section>

<section class="case-study-section case-study-dark-section">
  <div class="container">
    <div class="case-study-section-heading">
      <div class="case-study-section-label">Key Website Features</div>
      <h2>Everything patients need in one accessible experience.</h2>
    </div>
    <div class="case-study-feature-grid">
      <?php foreach ($features as [$title, $description]): ?>
        <article class="case-study-feature-card">
          <div class="case-study-feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.2 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <h3><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></h3>
          <p><?= htmlspecialchars($description, ENT_QUOTES, 'UTF-8') ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="case-study-section">
  <div class="container case-study-story-grid">
    <div class="case-study-story-card glass-card">
      <div class="case-study-section-label">Design Approach</div>
      <h2>Credibility, service discovery, and patient education.</h2>
      <p>The content structure balances practitioner information, treatment descriptions, educational resources, and booking calls to action. The result is a straightforward journey that keeps healthcare information approachable without reducing its professional value.</p>
    </div>
    <div class="case-study-story-card glass-card">
      <div class="case-study-section-label">Outcome</div>
      <h2>One connected wellness experience.</h2>
      <p>The completed website brings together wellness services, learning resources, and consultation pathways. Visitors can explore treatment options, understand Dr. Cheng's approach, and find a relevant next step.</p>
    </div>
  </div>
</section>

<section class="case-study-takeaway">
  <div class="container">
    <div class="case-study-takeaway-card">
      <span>Project Takeaway</span>
      <p>Creating a healthcare website requires more than an attractive layout. Clear information architecture, trustworthy presentation, and accessible calls to action are essential to a useful patient experience.</p>
    </div>
  </div>
</section>

<section class="case-study-cta">
  <div class="container">
    <div>
      <span>Have a similar project?</span>
      <h2>Let's create a clear, trustworthy digital experience.</h2>
    </div>
    <a href="mailto:ksarfaraj23@gmail.com">Start a Project <span aria-hidden="true">→</span></a>
  </div>
</section>
<?php require __DIR__ . '/footer.php'; ?>
