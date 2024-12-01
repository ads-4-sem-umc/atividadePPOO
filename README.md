# Atividade PPOO

Ruan Cristhyan Dias - 11231103574
Grabiel Santos Nascimento - 11222100915

# Sobre o projeto

Projeto para barbearias que desejam um sistema para anotar seu agendamentos de maneira sistemática.

# Sobre as tecnologias

## Back-end

Foi desenvolvido utilizando o framework (https://pt.quarkus.io/)[Quarkus] com o Java na versão 17, utilizamos a integração do framwork com as bibliotecas Panache e Hibernate para gerenciar o banco de dados, então, o nosso banco de dados é criado automaticamente baseados nas entidades encontradas na pasta `/outbound/table/`. E sobre a organização de pastas e design pattern, o escolhido foi a Arquitetura limpa, devido a fácil manutenção e auto nivel de desacoplamento.

## Front-end

Foi desenvolvido utilizando o framework (https://nextjs.org/)[Next.js], com Typescript,  a escolha dele foi devido a ser um framework muito moderno, e sempre antenado a novas tecnologias. Sobre a organização de pastas e design pattern, o escolhido foi o design atômico, por motivos muito parecidos a escolha do back-end, mas além dessas, o alto nível de reusabilidade de componentes e a fácil manutenção são pontos que fizeram o design atômico ser o escolhido.