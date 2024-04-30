
document.addEventListener('DOMContentLoaded', function() {
    buscaArte();
    buscar();
    function buscaArte() { 
        document.getElementById('botaoBusca').addEventListener('click', function() {
            var botao = document.getElementById('botaoBusca');
            var caixaBusca = document.getElementById('caixaBusca');
            botao.classList.add('shake');
            caixaBusca.classList.add('shake');
        });
        
        document.getElementById('botaoBusca').addEventListener('animationend', function() {
            this.classList.remove('shake');
        });
        
        document.getElementById('caixaBusca').addEventListener('animationend', function() {
            this.classList.remove('shake');
        });
    
        var busca = document.querySelector('.caixaBusca').value;
        if(busca != '') {
            caixabusca.class
        }
    } 
    function buscar() {
      
        document.querySelector('canvas').addEventListener('click', function() {
        });
    }
}