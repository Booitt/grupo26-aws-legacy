<!--
*** Thanks for checking out my README file. Created from
*** Booitt/grupo26-aws
-->


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Booitt/grupo26-aws">
    <img src="https://www.pngitem.com/pimgs/m/218-2184842_amazon-web-services-academy-hd-png-download.png" alt="Logo" width="860" height="256">
  </a>

  <h3 align="center">Repositório Hiring Coders 2021  - Grupo 26 - AWS</h3>

  <p align="center">
    O que você procura?
    <br />
    <a href="https://github.com/Booitt/grupo26-aws"><strong>Documentação »</strong></a>
    <br />
    <br />
    <a href="https://hiringcoders202126.myvtex.com/">Visite o Projeto</a>
    ·
    <a href="https://github.com/Booitt/grupo26-aws/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/Booitt/grupo26-aws/issues">Fazer Solicitações</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a>
      <ul>
        <li><a href="#built-with">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Começando</a>
      <ul>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Como contribuir</a></li>
    <li><a href="#license">Licença</a></li>
    <li><a href="#contact">Equipe</a></li>
    <li><a href="#acknowledgements">Agradecimentos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://hiringcoders202126.myvtex.com/)

Este repositório foi criado com o objetivo de testar a tecnologia VTEX.IO + AWS API Gateway + AWS Lambda.

VTEX.IO é um ambiente criado pela plataforma VTEX projetado para permitir a criação de componentes, gerando autonomia e uma configuração mais simples dos processos atuais. Os pontos positivos são evitar a duplicação de código, poder ter autonomia no desenvolvimento e sair da loja com um desempenho significativo.

Amazon API Gateway é um serviço totalmente gerenciado que torna mais fácil para os desenvolvedores criar, publicar, manter, monitorar e proteger APIs em qualquer escala.

O AWS Lambda é um serviço de computação sem servidor que permite executar código sem provisionar ou gerenciar servidores, criando lógica de escalonamento de cluster com reconhecimento de carga de trabalho, mantendo integrações de eventos ou gerenciando tempos de execução.


Recursos:

* Permite capturar leads a partir da página inicial
* Permite salvar os dados dos leads informados na página principal para o DynamoDB
* Um hook foi definido para enviar notificações sobre novos pedidos para um middleware 
* Esse middleware conta um serviço para que obtem o OrderId enviado pelo Hook
* Com o OrderId o serviço consulta a API de pedidos para pegar os detalhes do pedido
* Esse mesmo serviço com os dados do pedido, localiza o e-mail real do comprador consultando a entidade CL do VTEX MasterData
* Após a captura do e-mail real, um novo lambda consulta se o e-mail existe no AWS DynamoDB e caso exista marca como comprador e a data da compra.

Uma lista de recursos comumente usados que considero úteis está listada nos <a href="#acknowledgements">Agradecimentos</a>.

### Construído com

Conheça as principais tecnologias utilizadas na construção deste projeto. 

* [VTEX.IO](https://vtex.io/)
* [Tachyons](https://tachyons.io/)
* [GraphQL](https://graphql.org/)
* [ReactJS](https://reactjs.org/)
* [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)
* [AWS Labda](https://aws.amazon.com/pt/api-gateway/)
* [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/)




<!-- GETTING STARTED -->
## Começando

Estas são as instruções sobre como configurar seu projeto localmente.
Para obter uma cópia local instalada e funcionando, siga estas etapas simples.

### Pré-requisitos

* Install Git;
  ```sh
  brew install git
  ```
  
* Install Node.js;
  ```sh
  npm install npm@latest -g
  ```
  
* Install Yarn;
  ```sh
  npm install --global yarn
  ```
  

* Install VTEX Client
  ```sh
  npm global add vtex
  ```



### Instalação

1. Clone este repositório e acesse a pasta que foi criada
   ```sh
   git clone https://github.com/Booitt/grupo26-aws.git
   cd grupo26-aws
   ```
2. Faça o login no ambiente VTEX
   ```sh
   vtex login hiringcoders202126
   ```
3. Crie um novo Workspace para começar a trabalhar
   ```sh
   vtex using {{your-workspace-name}}
   ```


<!-- ROADMAP -->
## Roadmap

Consulte [open issues](https://github.com/Booitt/grupo26-aws/issues) para obter uma lista de recursos propostos (e problemas conhecidos).



<!-- CONTRIBUTING -->
## Como contribuir

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer serão **muito apreciadas**.


1. Crie um Fork do projeto
2. Crie cada nova feature para o projeto em uma nova branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Envie a nova feature para o github (`git push origin feature/AmazingFeature`)
5. Acesse o Github e abra um Pull Request



<!-- LICENSE -->
## License

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.


<!-- CONTACT -->
## Equipe

Project Link: [https://github.com/Booitt/grupo26-aws](https://github.com/Booitt/grupo26-aws)




<!-- ACKNOWLEDGEMENTS -->
## Agradecimentos
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Booitt/grupo26-aws.svg?style=for-the-badge
[contributors-url]: https://github.com/Booitt/grupo26-aws/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Booitt/grupo26-aws.svg?style=for-the-badge
[forks-url]: https://github.com/Booitt/grupo26-aws/network/members
[stars-shield]: https://img.shields.io/github/stars/Booitt/grupo26-aws.svg?style=for-the-badge
[stars-url]: https://github.com/Booitt/grupo26-aws/stargazers
[issues-shield]: https://img.shields.io/github/issues/Booitt/grupo26-aws.svg?style=for-the-badge
[issues-url]: https://github.com/Booitt/grupo26-aws.svg/issues
[license-shield]: https://img.shields.io/github/license/Booitt/grupo26-aws.svg?style=for-the-badge
[license-url]: https://github.com/Booitt/grupo26-aws/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
