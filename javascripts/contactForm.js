document.getElementById('contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Message Sent!';
            btn.classList.replace('gradient-bg', 'bg-emerald-500');
            lucide.createIcons();
            
            e.target.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.replace('bg-emerald-500', 'gradient-bg');
                lucide.createIcons();
            }, 3000);
        });