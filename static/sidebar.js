document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    // Get all target elements from nav links
    const targets = Array.from(navLinks)
        .map(link => document.getElementById(link.getAttribute('href').substring(1)))
        .filter(Boolean);

    const OFFSET = 100; // adjust to match your header / spacing

    window.addEventListener('scroll', () => {
        let current = '';
        let closestDistance = Number.POSITIVE_INFINITY;

        targets.forEach(target => {
            const rectTop = target.getBoundingClientRect().top - OFFSET;

            // We only consider elements that have crossed the offset line
            if (rectTop <= 10 && Math.abs(rectTop) < closestDistance) {
                closestDistance = Math.abs(rectTop);
                current = target.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                'active',
                link.getAttribute('href').substring(1) === current
            );
        });
    });

    // Mobile menu toggle functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebarToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
        });

        // Close sidebar when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebarToggle.classList.remove('active');
                sidebar.classList.remove('active');
            });
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebarToggle.classList.remove('active');
                sidebar.classList.remove('active');
            }
        });
    }
});
