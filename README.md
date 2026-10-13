# Site Tecvolt — código-fonte

Este projeto é um site estático em HTML, CSS e JavaScript. Não precisa instalar bibliotecas nem executar uma etapa de compilação.

## Arquivos principais

- `index.html`: página inicial e contatos.
- `sobre/index.html`: apresentação da empresa.
- `produtos/index.html`: linhas de produtos.
- `solucoes/index.html`: aplicações e soluções.
- `fornecedores/index.html`: relação de marcas.
- `orcamento/index.html`: pedido de orçamento.
- `assets/site.css`: aparência do site.
- `assets/site.js`: menu, seleção de produto e preparação do e-mail de orçamento.
- `assets/*.jpg` e `assets/logo.png`: imagens locais.

## Como abrir no Windows

1. Extraia este ZIP.
2. Abra a pasta `tecvolt-site` em seu editor de código.
3. Clique duas vezes em `iniciar_windows.bat` (é necessário ter Python instalado).
4. Acesse `http://localhost:8000` no navegador.

Também é possível abrir um terminal dentro de `tecvolt-site` e executar `py -m http.server 8000`. Se o comando `py` não existir, tente `python -m http.server 8000`.

O site usa caminhos que começam com `/`, então execute o servidor na pasta `tecvolt-site`; abrir o `index.html` com duplo clique pode deixar estilos, imagens e links sem funcionar. Para encerrar, feche a janela do servidor ou pressione Ctrl+C.

## Observações

- O formulário de orçamento prepara um e-mail para `comercial@tecvolt.ind.br`. O visitante precisa confirmar o envio no aplicativo de e-mail.
- As imagens de logotipos da página Fornecedores ainda são carregadas do site Grupo MLM; dependem de conexão com a internet e da disponibilidade desse endereço.
- O e-mail financeiro está escrito como confirmado: `financeiro@tecvol.ind.br`.
