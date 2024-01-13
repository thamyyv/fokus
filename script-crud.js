//entrar o botão adicionar tarefa

const btAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tarefa = []

btAdicionarTarefa.addEventListener('click', () =>{
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    const tarefa ={
        descricao:textArea.value
    }
    tarefa.push(tarefa)
    localStorage.setItem('tarefa', tarefa)
})