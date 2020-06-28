import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>DevRadar</h2>
          <p>Projeto Fullstack, com o objetivo de ser um radar de desenvolvedores</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner" style={{textAlign: 'justify'}}>
          <span className="image fit">
            <img src={pic6} alt="api" />
          </span>
          <h2 className="major">Finalidade</h2>
          <p>
            Criar uma aplicação completa (backend, web e mobile) com o objetivo de ser um radar de desenvolvedores, onde um desenvolvedor pode se cadastrar na aplicação, buscar e ser encontrado por outros desenvolvedores para troca de experiências.
          </p>
          <h2 className="major">Backend</h2>
          <p>
            No backend foi usado NodeJS, e bibliotecas como express (criação do servidor e rotas), cors (configuração do servidor), axios (uso com api), mongoose (conexão com BD), socketio (conexão com sockets e atualizações em tempo real).

            Além destes também foi usado o nodemon como dependência de desenvolvimento.

            O Banco de Dados utilizado foi o BD não-relacional MongoDB. Ele foi usado através da nuvem, sem necessidade de instalação local, com o serviço MongoDB Atlas.
          </p>
          <h2 className="major">Web</h2>
          <p>
            No frontend web a aplicação foi desenvolvida utilizando o ReactJS, aliado ao CSS3 e HTML da página juntamente com todas as dependências usadas através do "create react-app".

            Também foi usado o axios para contato com o backend através de uma API.
          </p>
          <h2 className="major">Mobile</h2>
          <p>
            A aplicação mobile foi criada utilizando React Native, através do expo, uma ferramente que abstrai a instalação do android SDK, tornando mais simples e rápida a entrega de uma aplicação mobile.

            No desenvolvimento dessa parte da aplicação foram usadas quase que totalmente bibliotecas nativas para o react native e para o próprio expo, como react-native-maps, react-native-webview, dentre outras.

            Também foi utilizado o axios para comunicação com API e o client do socketio para criar o socket para atualização em tempo real.
          </p>
   

          <p> Veja o código completo da aplicação no <a href="https://github.com/williamguilhermesouza/DevRadar" target="_blank">Github</a></p>

          <h3 className="major">Veja outro projetos</h3>
          <p>
            Abaixo outros projetos realizados:
          </p>

          <section className="features">
            <article>
              <a href="/bethehero" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Projeto Be The Hero</h3>
              <p>
                Projeto Fullstack completo, de uma aplicação que tinha por objetivo integrar possíveis doadores à instituições de caridade. Nesse projeto foi desenvolvido um backend em NodeJS, sobre o express, e conexão com banco de dados sqlite3, um frontend web, utilizando ReactJS, e ainda um aplicativo mobile utilizando React-Native.
              </p>
              <a href="/bethehero" className="special">
                Saiba mais
              </a>
            </article>
            <article>
              <a href="/enderecosalunosapi" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">API Endereços e Alunos</h3>
              <p>
                Uma API de backend criada para a interação com um banco de dados onde são guardadas informações de Alunos e seus Endereços. A aplicação foi construída utilizando Arquitetura REST e GraphQL, em conjunto com NestJS. Neste projeto foi utilizado o banco de dados PostgreSQL, integrado através da ORM TypeORM, padrão utilizado no Nest. Ainda, foram utilizados padrões de projeto de injeção de dependência, decorators, entre outros.
              </p>
              <a href="/enderecosalunosapi" className="special">
                Saiba mais
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
