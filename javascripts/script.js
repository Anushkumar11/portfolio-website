lucide.createIcons();

        function showPage(pageId) {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            const targetPage = document.getElementById(pageId);
            if (targetPage) targetPage.classList.add('active');

            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('onclick').includes(`'${pageId}'`)) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            document.getElementById('mobile-menu').classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });