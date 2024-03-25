// Função para salvar as informações no armazenamento local
function salvarInformacao() {
    let informacao = document.getElementById("campo").value;
    localStorage.setItem("informacaoSalva", informacao);
    alert("Informação salva com sucesso!");
}

// Verificar se há informações salvas e preencher o campo se existir
window.onload = function() {
    let informacaoSalva = localStorage.getItem("informacaoSalva");
    if (informacaoSalva !== null) {
        document.getElementById("campo").value = informacaoSalva;
    }
};
