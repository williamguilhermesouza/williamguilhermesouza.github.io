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
          <h2>API Endereços e Alunos</h2>
          <p>API para consulta a Banco de Dados PostgreSQL que armazena diversas informações de Alunos e seus Endereços</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner" style={{textAlign: 'justify'}}>
          <span className="image fit">
            <img src={pic4} alt="api" />
          </span>
          <p>
            Esta API tem como objetivo realizar as interações necessárias com
            um banco de dados PostgreSQL, sendo capaz de criar registros de 
            Alunos e de Endereços, estes últimos associados aos alunos. Nesse
            projeto foi utilizada a arquitetura no modelo REST, e ainda a 
            implementação do modelo GraphQL, mantendo o modelo REST, ou seja,
            sendo capaz de utilizar os dois modelos para interagir com o Banco.            
          </p>

          <p>
            Como framework para estrutura da API foi utilizado o <a href="https://docs.nestjs.com/">
            NestJS</a>, utilizado para construção de aplicações backend eficientes e escaláveis. 
            Como linguagem, foi utilizado o <a href="https://www.typescriptlang.org/">Typescript</a> aplicando
            elementos de programação funcional. Para implementação do projeto também foi criada
            uma image <a href="https://www.docker.com/">Docker</a> (imagem que empacota a aplicação) e também um arquivo do Docker Compose com o 
            qual se pode levantar a aplicação junto com seu banco de dados de uma só vez, de maneira prática.
          </p>

          <p> Veja o código completo da aplicação no <a href="https://github.com/williamguilhermesouza/enderecosAlunosAPI" target="_blank">Github</a></p>

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
