function adicionar() {
    const tarefa = document.getElementById("tarefa").value;
    if (tarefa !== "") {
        const li = document.createElement("li");
        li.textContent = tarefa;
        li.onclick = function() { li.remove(); };
        document.getElementById("lista").appendChild(li);
        document.getElementById("tarefa").value = "";
    }
}
