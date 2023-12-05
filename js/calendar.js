document.addEventListener('DOMContentLoaded', function () {
    dias_sem_evento = document.querySelectorAll('.days a')
    extras = document.getElementById('extra')
    
    info_extra = document.createElement('p')
    info_extra1 = document.createElement('p')
    info_extra2 = document.createElement('p')
    info_extra3 = document.createElement('p')

    texto_extra = document.createElement('p')
    calendar = document.querySelector('.calendar')

    dias_sem_evento.forEach(function (link) {

        link.addEventListener('click', function (event) {

            event.preventDefault()
            dias_sem_evento.forEach(function (d) {
                d.style.color = 'black'
                d.style.borderColor = 'black'
            })

            link.style.color = 'red'
            link.style.borderColor = 'red'

            if (!link.classList.length) {
                if (extras.querySelectorAll('p')){
                    extra = extras.querySelectorAll('p')
    
                    extra.forEach(function(cada_extra){
                        extras.removeChild(cada_extra)
                    })
                    extras.classList.remove('extras')
                }
                
                dia = link.querySelector('p')
                dia_num = dia.textContent

                texto_extra.textContent = 'EXTRAS DIA ' + dia_num + ':'
                info_extra.textContent = 'Nenhum evento.'

                extras.appendChild(texto_extra)
                extras.appendChild(info_extra)
                extras.classList.add('extras')
            }

            else if (link.classList.contains('green-day')) {
                if (extras.querySelectorAll('p')){
                    extra = extras.querySelectorAll('p')
    
                    extra.forEach(function(cada_extra){
                        extras.removeChild(cada_extra)
                    })
                    extras.classList.remove('extras')
                }

                dia = link.querySelector('p')
                dia_num = dia.textContent
                
                texto_extra.textContent = 'EXTRAS DIA ' + dia_num + ':'
                info_extra1.textContent = 'Prova de matemática.'
                info_extra2.textContent = 'Prova de quimica.'
                info_extra3.textContent = 'Prova de física.'
                
                extras.appendChild(texto_extra)
                extras.appendChild(info_extra1)
                extras.appendChild(info_extra2)
                extras.appendChild(info_extra3)
                extras.classList.add('extras')
            }

            else if (link.classList.contains('red-day')) {
                if (extras.querySelectorAll('p')){
                    extra = extras.querySelectorAll('p')
    
                    extra.forEach(function(cada_extra){
                        extras.removeChild(cada_extra)
                    })
                    extras.classList.remove('extras')
                }
                
                dia = link.querySelector('p')
                dia_num = dia.textContent

                texto_extra.textContent = 'EXTRAS DIA ' + dia_num + ':'
                info_extra.textContent = 'Reunião mensal.'

                extras.appendChild(texto_extra)
                extras.appendChild(info_extra)
                extras.classList.add('extras')
            }
        })
    })

    document.body.addEventListener('click', function(event){
        if (!calendar.contains(event.target)) {
            if (extras.querySelectorAll('p')){
                extra = extras.querySelectorAll('p')

                extra.forEach(function(cada_extra){
                    extras.removeChild(cada_extra)
                })
                extras.classList.remove('extras')
            }

            dias_sem_evento.forEach(function (link) {
                link.style.color = 'black'
                link.style.borderColor = 'black'
            })
        }
    })
})