## JavaScript

~~~javascript
var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = paciente.querySelector(".info-peso")
var peso = tdpeso.textContent;
~~~
O comando <code>document.querySelector("")</code> busca dados na classe,id ou objeto especificado dentro das aspas.

O comando tdpeso busca dentro das tags já buscadas em paciente.

Por fim o variável.textcontent remove as tags do texto exibindo apenas o conteúdo.

~~~javascript
    variavel.toFixed(numero de casas decimais);
~~~
A Função <code>toFixed()</code> limita a quantidade de casas decimais que serão exibidas.

~~~javascript
    variavel.addEventListener("click", função);
    //chama uma função já declarada no evento de click
    variavel.addEventListener("click", função(){
    //cria a função para este evento de click
    });
~~~
A Função <code>addEventListener</code> "ouve" o evento do usuário na página.

~~~javascript
    event.preventDefault();
~~~
A função <code>event.preventDefault()</code> previne o comportamento padrão da página.

~~~javascript
    variavelPai.appendChild(variavelFilho);
~~~
A função <code>appendChild</code> permite colocar um elemento 'filho'  dentro de outro elemento 'pai', como um <code>td</code> dentro de uma <code>tr</code>

~~~javascript
    this.remove
~~~
A função <code>this</code> se refere ao dono do evento.

~~~javascript
   var expressao = new RegExp(this.value,"i");
~~~
O construtor <code>RegExp</code> cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão, seguindo parametros pré-definidos, no exemplo, "i" ignora maiúsculas e minúsculas

~~~javascript
 if (expressao.test(nome)){
            paciente.classList.remove("invisivel");
        }
        else{
            paciente.classList.add("invisivel");
        }
~~~
O método <code>test()</code> executa uma busca por uma correspondência entre  uma *expressão regular* e uma *string*. Retornando true ou false.