(() => {
  const whatsapp = new URL('https://wa.me/94766641296');
  whatsapp.searchParams.set('text', 'Hello Invitations Online! I’d love a custom invitation for my celebration. Can we talk about the LKR 10,000 package?');
  document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsapp.href; });
  document.querySelector('#year').textContent = new Date().getFullYear();

  const guest = document.querySelector('#demo-guest');
  const updateGuest = () => {
    const names = guest.value.replace(/\s+/g, ' ').trim();
    document.querySelector('#demo-salutation').textContent = names ? `Dear ${names},` : 'Dear our favourite people,';
    const params = new URLSearchParams();
    if (names) params.set('guest', names);
    document.querySelector('#demo-url').textContent = `yourstory.invitations.online/${names ? '?' + params : ''}`;
  };
  guest.addEventListener('input', updateGuest);
  updateGuest();

  const dialog = document.querySelector('#sample-dialog');
  document.querySelectorAll('[data-open-demo]').forEach(button => button.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('modal-open');
  }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });

  // Content remains visible if JavaScript or observation is unavailable.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }), { threshold: .08 });
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    document.documentElement.classList.add('js');
  }
})();
