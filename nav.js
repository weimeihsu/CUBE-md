(function () {
  const links = [
    { href: 'index.html',         label: 'Overview' },
    { href: 'typography.html',    label: 'Typography' },
    { href: 'colors.html',        label: 'Colors' },
    { href: 'spacing-radius.html',label: 'Spacing &amp; Radius' },
    { href: 'icons.html',         label: 'Icons' },
    { href: 'buttons.html',       label: 'Buttons' },
  ];

  const filename = location.pathname.split('/').pop() || 'index.html';

  const linksHtml = links
    .map(({ href, label }) => {
      const state = href === filename
        ? 'text-white bg-green-500'
        : 'text-gray-400 hover:text-white hover:bg-white/8';
      return `<a href="${href}" class="no-underline text-13 px-2 py-1.5 rounded transition-colors duration-150 ${state}">${label}</a>`;
    })
    .join('');

  const nav = document.querySelector('nav');
  nav.className = 'fixed inset-x-0 top-0 h-14 bg-gray-900 flex items-center px-8 gap-6 z-100 shadow-nav';
  nav.innerHTML =
    `<a class="text-15 font-bold text-white no-underline tracking-xs whitespace-nowrap" href="index.html">點麥當勞D · Design System</a>` +
    `<div class="flex gap-1.5">${linksHtml}</div>`;
})();
