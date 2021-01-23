import React from 'react';

import Layout from '../components/Layout';
import pic10 from '../assets/images/pic10.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>App FisioRespiratoria</h2>
          <p>Aplicativo para realização de cálculos referentes a área de fisioterapia respiratória</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner" style={{textAlign: 'justify'}}>
          <span className="image fit">
            <img src={pic10} alt="api" />
          </span>
          <p>
              Esse aplicativo tem o objetivo de realizar cálculos referentes a área de fisioterapia respiratória, e mostrar as 
              condições do paciente baseadas nesses cálculos.          
          </p>

          <p>
            O aplicativo foi desenvolvido utilizando a tecnologia react-native, junto ao framework expo. Ele pode ser encontrado
            na loja de aplicativos google play através deste <a href="https://play.google.com/store/apps/details?id=com.spasaude.fisiorespiratoria">link</a>.
          </p>

          <p> Veja o código completo da aplicação no <a href="https://github.com/williamguilhermesouza/fisiorespiratoriaI" target="_blank">Github</a></p>

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