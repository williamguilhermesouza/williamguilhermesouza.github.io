import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic9 from '../assets/images/pic09.gif';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.jpg';


import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-laptop"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="profilePic" />
          </a>
          <div className="content">
            <h2 className="major">Quem sou</h2>
            <p style={{textAlign: 'justify'}}>
              Desenvolvedor Fullstack, apaixonado pela área de desenvolvimento e envolvido no estudo de tecnologia e área de TI desde 2003. Atualmente trabalhando na área de desenvolvimento, especializado na idealização, design, prototipagem e implementação de sistemas web, desde o frontend até o backend e infraestrutura envolvida. Atuo buscando prover todos os elementos necessários para as soluções de TI idealizadas pelos clientes, com o fim de atender todos os requisitos levantados e idealização da interface com maior fidelidade possivel. Abaixo estão as principais tecnologias que tenho experiência e serei capaz de contribuir para o seu empreendimento e para sua empresa:
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <div className="content">
            <h2 className="major">Habilidades</h2>
              <ul className="contact">
                <li className="fa-code"><b>Clean Code</b> - Utilizo o desenvolvimento com código limpo, legível e de fácil manutenção, obedecendo todas as determinações de documentação e Boas Práticas.</li>
                 <li className="fa-js-square"><b>Javascript ES 6</b> - Experiência com desenvolvimento JavaScript utilizando as últimas features da linguagem.</li>
                 <li className="fa-angular"><b>Typescript</b> - Utilização do superset/linguagem tipada Typescript (usado como padrão pelo framework Angular), buscando dar maior segurança e estabilidade as aplicações.</li>
                 <li className="fa-react"><b>React e React-Native</b> - Conhecimento das tecnologias React e React-Native, para sistemas frontend e desenvolvimento de aplicativos para smartphones.</li>
                 <li className="fa-connectdevelop"><b>GraphQL</b> - Experiência na utilização de GraphQL, facilitando a interação e principalmente a consulta das APIs de backend.</li>
                 <li className="fa-dharmachakra"><b>Rest API</b> - Conhecimento para criação de Rotas backend no modelo Rest API, trazendo maior velocidade as consulta ao Banco de Dados e a possibilidade de reutilização do backend da aplicação.</li>
                 <li className="fa-node-js"><b>NestJS</b> - Utilização do framework NestJS e aplicação de design patterns como Dependency Injection, trazendo uma maior organização a estrutura e arquitetura da aplicação.</li>

              </ul>
            </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <div className="content">
            <h2 className="major" style={{textAlign: 'justify'}}>Cursos e Certificações</h2>
              <ul className="contact" style={{textAlign: 'justify'}}>
                <li className="fa-university">
                    <p><b>CS50's Introduction to Computer Science</b></p>
                    Curso de Introdução a Ciência da Computação CS50 ministrado pela Universidade de Harvard, onde desenvolvi conhecimentos sobre estrutura de dados                     e algoritmos, implementados na prática em cada etapa do curso. Ao final do curso criei algumas aplicações para Android utilizando Java e ao                        final foi entregue um projeto completo de uma aplicação web usando react.
                </li>
                <li className="fa-python">
                    <p><b>PCAP Associate in Python Programming</b></p>
                    Possuo a certificação PCAP em programação Python, comprovando vasto conhecimento na área de programação, demonstrando capacidade de pensamento                       lógico e planejamento das soluções em sistemas.
                </li>
              </ul>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Portfolio</h2>
          <p>
            Confira abaixo alguns projetos realizados:
          </p>
          <section className="features">
            <article>
              <a href="/enderecosalunosapi" className="image" >
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
            <article>
              <a href="/spasaude" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Spa & Saude</h3>
              <p>
                Um aplicativo com objetivo de fornecer serviços de fisioterapia e massagem, a clientes em diversos locais, conectando o fisioterapeuta a seus clientes. O aplicativo foi desenvolvido utilizando React-Native, e recursos externos integrados ao Firebase.
              </p>
              <a href="/spasaude" className="special">
                Saiba mais
              </a>
            </article>
            <article>
              <a href="/weatherforecast" className="image">
                <img src={pic9} alt="" />
              </a>
              <h3 className="major">Sistema de Previsão</h3>
              <p>
              Projeto com o objetivo de mostrar a previsão do tempo com base em uma API Openweather.
              </p>
              <a href="/weatherforecast" className="special">
                Saiba mais
              </a>
            </article>
            <article>
              <a href="/fisiorespiratoria" className="image">
                <img src={pic10} alt="" />
              </a>
              <h3 className="major">App Fisiorespiratória</h3>
              <p>
                Esse aplicativo tem o objetivo de realizar cálculos referentes a área de fisioterapia respiratória, e mostrar as 
                condições do paciente baseadas nesses cálculos. 
              </p>
              <a href="/fisiorespiratoria" className="special">
                Saiba mais
              </a>
            </article>
          </section>
         </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
