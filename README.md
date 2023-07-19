# api_hamburgueria
Neste projeto utilizei tecnologias  Node,  Insomnia, express, uuid, midllewares.

Esté projeto foi muito importante para me agregar conhecimento, com ele pude aprender como 
trabalhar front-end  com back-end, pude ver o quanto as bibliotecas nos ajudam utilizando no 
projeto express, uuid, para criamos a identificação de cada pedido, e poder manipula-lós e encontrar cada pedido.
Neste projeto utilizamos também diferentes formas de requisições, por request.body,
request.params e request.url.
Utilizamos o middleware para interceptar as rotas quando nescessário, fazer verificação de ID,
isso nos ecomiza muito codigo deixando a nossa aplicação mais enxuta e performática.

Deixo aqui abaixo as rotas utilizadas no projeto e um resumo da aplicação que cada uma,

<h1><style>color:red</style>POST</h1>

Utilizando rotas do tipo POST criamos no body do Insomnia os pedidos com os dados
do Pedido, nome do cliente, valor a ser pago, e status de pedido se em preparação
ou pronto.

<h1>GET</h1>

Na rota do tipo GET pegamos todos os dados enviados da rota POST e verificamos através 
do body do Insomnia simulando a aplicação que seria mostrada no front-end.

<h1>PUT</h1>
Com a rota do tipo PUT conseguimos alterar dados do pedido, como acresentar itens modificar 
os dados que foram enviados anteriormente.

<h4>DELETE</h4>
A rota do tipo DELETE conseguimos deletar pedidos, para casos de cancelamento.

<h1>PATCH</h1>

Com a rota PATCH, no projeto estamos enviando uma mensagem de pedido pronto, para o ID referenciado e criado 
na rota do tipo POST.
