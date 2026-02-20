  function toggleFaq(element) {
            const isActive = element.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            if (!isActive) {
                element.classList.add('active');
            }
        }