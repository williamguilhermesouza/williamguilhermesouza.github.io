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
          <h2>Be The Hero</h2>
          <p>Projeto Fullstack completo, de uma aplicação que tinha por objetivo integrar possíveis doadores à instituições de caridade.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner" style={{textAlign: 'justify'}}>
          <span className="image fit">
            <img src={pic5} alt="api" />
          </span>
          <h2 className="major">Finalidade</h2>
          <p>
            Criar uma aplicação completa (backend, web e mobile) com o objetivo de ser uma aplicação para auxílio e caridade para instituições, onde um doador é capaz de encontrar uma ONG e dar suporte a um caso específico de necessidade da ONG.
          </p>
        
          <h2 className="major">Backend</h2>

          <p>
            No backend foi usado NodeJS, e bibliotecas como express (criação do servidor e rotas), cors (configuração do servidor), axios (uso com api), knex e sqlite3 (conexão com BD). Além destes também foi usado o nodemon como dependência de desenvolvimento.

            O Banco de Dados utilizado foi o BD relacional Sqlite3 através do Knex, podendo facilmente ser escalado para um banco mais complexo como o postgreSQL. Ele foi usado localmente, utilizado em conjunto com migrations da biblioteca knex.

            As validações para acesso fora feitas utilizando o celebrate, um middleware para a biblioteca express.

            Os testes foram realizados utilizando o Jest.
          </p>

          <h2 className="major">Web</h2>
          <p>
            No frontend web a aplicação foi desenvolvida utilizando o ReactJS, aliado ao CSS3 e HTML da página juntamente com todas as dependências usadas através do "create react-app".

Também foi usado o axios para contato com o backend através de uma API.
          </p>
          <h2 className="major">Mobile</h2>
          <p>
            

            A aplicação mobile foi criada utilizando React Native, através do expo, uma ferramente que abstrai a instalação do android SDK, tornando mais simples e rápida a entrega de uma aplicação mobile.

            No desenvolvimento dessa parte da aplicação foram usadas bibliotecas nativas para o react native e para o próprio expo, como também a funcionalidade Intl, capaz de formatar campos dependendo das unidades utilizadas.

            Além disso, foi implementado um sistema simples de paginação, e funções que levam a aplicação a aplicações externas para contato por E-mail e por WhatsApp.

            Também foi utilizado o axios para comunicação com API.
          </p>

          <p> Veja o código completo da aplicação no <a href="https://github.com/williamguilhermesouza/BeTheHero" target="_blank">Github</a></p>

          <h3 className="major">Veja outro projetos</h3>
          <p>
            Abaixo outros projetos realizados:
          </p>

          <section className="features">
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
            <article>
              <a href="/devradar" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">DevRadar</h3>
              <p>
                Mais um projeto Fullstack, com o objetivo de ser um radar de desenvolvedores, onde um desenvolvedor pode se cadastrar na aplicação, buscar e ser encontrado por outros desenvolvedores para troca de experiências. Nesta aplicação foi utilizado um backend feito em NodeJS e express, banco de dados não relacional MongoDB, frontend web em React e mobile em React-Native. Ainda, foi utilizada a biblioteca socket.io para atualizações de interface em tempo real.
              </p>
              <a href="/devradar" className="special">
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
