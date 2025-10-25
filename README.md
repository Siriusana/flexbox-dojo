⭐️ Flexbox Dojo 

É um aplicação interativa criada a partir da necessidade de aprender, relembrar e visualizar as propriedades do CSS Flexbox.

- Nesta aplicação é possível alterar propriedades, adicionar ou remover itens e testar a dinamicidade entre infinitas possibilidades do Flexbox.

⭐️ Recursos

Propriedades que podem ser alteradas (geral):

    justify-content: Alinhar os itens no eixo principal.

    align-items: Alinhar os itens no eixo transversal.

    align-content: Distribuir as linhas do contêiner (quando há quebra de linha).

    flex-direction: Mudar a direção do eixo principal (row, column, etc.).

    gap: Ajustar o espaçamento entre os itens.

⭐️ Propriedades dos Itens:

    align-self (individual): Clique em um item específico para selecioná-lo e aplicar uma propriedade align-self individualmente.

    Quantidade de Itens: Adicione ou remova itens do contêiner para ver o funcionamento do flex-wrap.

⭐️ Visualização de Código:

    O código CSS corresponde às seleções, atualizado em tempo real.

    É possível ocultar ou mostrar o bloco de código.

    Resetar: Um botão "Reset" para voltar todas as propriedades aos seus valores padrão.

⭐️ Tecnologias 

    React: Biblioteca principal para construir a interface do usuário.

    React Hooks (useState): Usado para gerenciar o estado de todas as propriedades do flexbox.

    Lucide React: Para os ícones (Sparkles, RotateCcw, Plus, Minus).

    CSS-in-JS (Estilos Inline): Usado para aplicar dinamicamente os estilos que mudam com base no estado.

    Google Fonts: Utiliza as fontes "Lobster Two" e "Quicksand".

⭐️ Como Executar

Este projeto é um único componente React (App.jsx). Para executá-lo, é necessário um ambiente React configurado (como Create React App ou Vite).

Crie um novo projeto React:

# Usando Vite 
No terminal (exemplo VScode):
    npm create vite@latest flexbox-dojo -- --template react
    cd flexbox-dojo
    npm install


Instale as dependências:
    npm install lucide-react
    npm install framer-motion


Substitua o App.jsx:
    Copie o conteúdo do arquivo app.jsx deste projeto e cole-o dentro do arquivo src/App.jsx do seu novo projeto.

Limpe o index.css (Opcional):
Como o projeto usa estilos inline e uma tag <style> interna, você pode querer limpar o arquivo src/index.css ou src/App.css para evitar conflitos de estilo.

Inicie o servidor de desenvolvimento:

npm run dev


O site deverá abrir automaticamente em http://localhost:5173 (ou similar).


