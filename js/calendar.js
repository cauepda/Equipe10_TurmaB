document.addEventListener('DOMContentLoaded', function () {
    dias_sem_evento = document.querySelectorAll('.days a')
    extras = document.querySelector('.extras')
    info_extra = document.createElement('p')

    console.log(dias_sem_evento)
    i = 0
    dict = {}

    list_nada = []
        

    dias_sem_evento.forEach(function (link) {
        if (!link.classList.length) {
            link.addEventListener('click', function (event) {
                i += 1
                event.preventDefault();

                if (i % 2 != 0) {
                    info_extra.textContent = 'O aluno não possui extras nesse dia'
                    extras.appendChild(info_extra)
                    link.style.color = 'red'
                }

                else {
                    info_extra.textContent = ''
                    extras.appendChild(info_extra)
                    link.style.color = 'black'
                }

            });
        }
    })
})