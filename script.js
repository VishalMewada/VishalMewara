document.addEventListener('DOMContentLoaded', () => {
  const experienceData = [
    {
      role: 'Assistant Manager',
      company: 'IBM India PVT LTD',
      location: 'Mumbai',
      duration: 'Apr 2024 – Present',
      description: 'AI integration, Agile L&D practices, WalkMe and multimedia development'
    },
    {
      role: 'Lead Instructional Designer',
      company: 'GXO GOSC India PVT LTD',
      location: 'Mumbai',
      duration: 'Jan 2023 – Apr 2024',
      description: 'End-to-end WalkMe simulations and onboarding content delivery'
    },
    {
      role: 'Instructional Designer',
      company: 'GXO GOSC India PVT LTD',
      location: 'Mumbai',
      duration: 'Oct 2019 – Dec 2022',
      description: 'eLearning solutions, Storyline templates, WalkMe simulations'
    },
    {
      role: 'Course Managing Editor',
      company: 'Packt Publishing',
      location: 'Mumbai',
      duration: 'Aug 2015 – Jun 2019',
      description: 'ILT prototypes, editorial processes, content reviews'
    }
  ];

  const timeline = document.getElementById('experienceTimeline');
  experienceData.forEach(item => {
    const block = document.createElement('div');
    block.className = 'timeline-item';
    block.innerHTML = `
      <h3>${item.role} – ${item.company}</h3>
      <p><strong>${item.duration}</strong> | ${item.location}</p>
      <p>${item.description}</p>
    `;
    timeline.appendChild(block);
  });
});
