document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interatividade dos botões principais (Message/Subscribe)
    // Simula o efeito de "afundar" ao clicar
    const actionButtons = document.querySelectorAll('.btn-action');

    actionButtons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.classList.remove('neu-raised');
            btn.classList.add('neu-pressed');
        });

        // Retorna ao estado original quando solta o clique ou o mouse sai
        const releaseBtn = () => {
            btn.classList.remove('neu-pressed');
            btn.classList.add('neu-raised');
        };

        btn.addEventListener('mouseup', releaseBtn);
        btn.addEventListener('mouseleave', releaseBtn);
    });


    // 2. Interatividade dos botões sociais e de cabeçalho (que já estão "pressed")
    // Eles podem ter um efeito de clique mais sutil ou animação
    const pressedButtons = document.querySelectorAll('.btn-icon, .btn-social');
    
    pressedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Exemplo de animação de escala sutil
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 100);
        });
    });


    // 3. Log de ações (opcional, para testar os cliques)
    document.getElementById('btnMessage').addEventListener('click', () => {
        console.log('Botão Message clicado!');
    });

    document.getElementById('btnSubscribe').addEventListener('click', () => {
        console.log('Botão Subscribe clicado!');
    });

    const socials = document.querySelectorAll('.btn-social');
    socials.forEach(s => {
        s.addEventListener('click', (e) => {
            console.log(`Abrindo ${e.currentTarget.title}...`);
        });
    });
});
