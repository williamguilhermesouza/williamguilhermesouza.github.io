import React from 'react';

import Layout from '../components/Layout';
import pic7 from '../assets/images/pic07.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Spa & Saude</h2>
          <p>Um aplicativo com objetivo de fornecer serviços de fisioterapia e massagem</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner" style={{textAlign: 'justify'}}>
          <span className="image fit">
            <img src={pic7} alt="api" />
          </span>
          <p>
            Este projeto está atualmente sob desenvolvimento, ao final entregará um aplicativo com o objetivo de integrar uma empresa de fisioterapia e massagem (Spa & Saude) aos seus clientes, para que possa realizar o agendamento de seus atendimentos via aplicativo. O aplicativo está sendo desenvolvido utilizando as tecnologias React-Native e Firebase.
          </p>

          <p> Veja o código completo da aplicação no <a href="https://github.com/williamguilhermesouza/SpaSaude" target="_blank">Github</a></p>

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
