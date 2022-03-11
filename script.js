var items = [];

document.querySelector('input[type="submit"]')
    .addEventListener('click', () => {
        // cadastrando os produtos e nomes

        let produtos = document.querySelector('input[name="nome"]');
        let preco = document.querySelector('input[name="preco"]');

        items.push({
            nome: produtos.value,
            valor: preco.value
        });


        /*
        elemento que será gerado
        <div class="listaProdutosSingle">
                <h3>RedBull</h3>
                <h3 class="priceProduto"><span>R$ 20,00</span></h3>
                
        </div> */

        let listaProdutos = document.querySelector('.listaProdutos');
        //resetando a lista para cada vez que adicionar algo ela esta vazia
        listaProdutos.innerHTML = "";
        let soma = 0;
        items.map(function (val) {
            soma+= Number(val.valor);
            listaProdutos.innerHTML += `
            <div class="listaProdutosSingle">
                <h3>`+ val.nome + `</h3>
                <h3 class="priceProduto"><span>R$ `+ val.valor + `</span></h3>
                
            </div>

            `
        })

        
        produtos.value = "";
        preco.value = "";

        //mudando a soma no total
        let elementoProduto = document.querySelector('.somaProduto h1');
        //adaptando pra duas casas decimais
        elementoProduto.innerHTML ='Total: R$' + soma.toFixed(2); 

        document.querySelector('button[name="limpar"]')
        .addEventListener('click', function(){
            items = [];

            document.querySelector('.listaProdutos').innerHTML = '';
            document.querySelector('.somaProduto h1').innerHTML = 'Total: R$ 0'

        })


    })