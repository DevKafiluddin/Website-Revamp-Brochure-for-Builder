// Commercial Construction Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Filter Buttons Functionality (Case Studies & Testimonials)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterCards = document.querySelectorAll('.filterable-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      filterCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Case Study Details Modal
  const modalOverlay = document.getElementById('case-study-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  const caseStudyData = {
    'st-marys': {
      title: 'St Mary’s Primary Academy - 4-Classroom Extension & Science Hub',
      client: 'Diocese of West Midlands Education Trust',
      duration: '14 Weeks (Phase 1 during summer holiday)',
      value: '£680,000',
      accreditation: 'SafeContractor Approved & DBS Cleared Site Manager',
      description: 'Design and build of a timber-clad 4-classroom extension with specialized STEM laboratory facilities. Executed with strict safeguarding protocols and zero disruption to term-time schedules.',
      highlights: [
        'SafeContractor audit passed with 100% compliance score',
        '100% enhanced DBS cleared on-site staff & sub-contractors',
        'BREEAM "Very Good" energy efficiency rating with solar PV integration',
        'Delivered 3 days ahead of new school term start date'
      ],
      testimonial: '"Apex Construction delivered exceptional work while ensuring strict safeguarding protocols were maintained. Outstanding partner for educational developments." — Mark H., Estates Director'
    },
    'apex-tech-park': {
      title: 'Oakridge Business Park - Category A & B Office Refurbishment',
      client: 'Oakridge Commercial Estates Ltd',
      duration: '10 Weeks',
      value: '£420,000',
      accreditation: 'FMB Commercial Member & Which? Trusted Trader',
      description: 'Complete interior remodeling of 12,000 sq ft office space including acoustic partition walls, high-efficiency HVAC integration, and contemporary LED linear lighting layout.',
      highlights: [
        'Out-of-hours noisy works schedule to accommodate adjacent tenants',
        'Zero lost-time incidents across 4,200 site hours',
        'Reclaimed acoustic paneling reducing waste to landfill by 85%',
        'Fixed-price contract delivered within 0.5% of contingency budget'
      ],
      testimonial: '"The team transformed our outdated workspace into a high-end corporate facility without causing a single hour of business downtime." — Sarah V., Operations Director'
    },
    'heritage-community': {
      title: 'St Jude’s Community Hall & Nursery Renovation',
      client: 'Local Authority & Community Development Fund',
      duration: '8 Weeks',
      value: '£290,000',
      accreditation: 'FMB Heritage Registered',
      description: 'Structural reinforcement, full timber restoration, and modern accessibility upgrades for a Grade II listed community building.',
      highlights: [
        'Traditional lime mortar pointing and bespoke joinery matching original details',
        'Full DDA accessibility compliance with automated entrance systems',
        '5-Star feedback from local council inspectors'
      ],
      testimonial: '"Met every strict conservation guideline with craftsmanship that blew us away." — David P., Project Sponsor'
    }
  };

  document.querySelectorAll('.view-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = btn.getAttribute('data-case-id');
      const data = caseStudyData[caseId];

      if (data && modalOverlay && modalTitle && modalContent) {
        modalTitle.innerText = data.title;
        modalContent.innerHTML = `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 8px; border: 1px solid #e2e8f0;">
            <div><strong>Client:</strong> ${data.client}</div>
            <div><strong>Project Value:</strong> ${data.value}</div>
            <div><strong>Timeline:</strong> ${data.duration}</div>
            <div><strong>Accreditation:</strong> <span style="color: #0f172a; font-weight: 700;">${data.accreditation}</span></div>
          </div>
          <h4 style="margin-bottom: 0.5rem; color: #0f172a;">Executive Summary</h4>
          <p style="margin-bottom: 1.25rem;">${data.description}</p>
          <h4 style="margin-bottom: 0.5rem; color: #0f172a;">Key Project Outcomes</h4>
          <ul style="margin-bottom: 1.5rem; padding-left: 1.2rem; color: #334155;">
            ${data.highlights.map(h => `<li style="margin-bottom: 0.4rem;">${h}</li>`).join('')}
          </ul>
          <div style="background: #fffbeb; border-left: 4px solid #d97706; padding: 1rem; border-radius: 4px; font-style: italic; color: #78350f;">
            ${data.testimonial}
          </div>
        `;
        modalOverlay.style.display = 'flex';
      }
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  }
});
