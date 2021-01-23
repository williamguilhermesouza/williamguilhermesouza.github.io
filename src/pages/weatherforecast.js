import React from 'react';

import Layout from '../components/Layout';
import pic9 from '../assets/images/pic09.gif';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Sistema de Previsão do Tempo</h2>
          <p>Projeto com o objetivo de mostrar a previsão do tempo com base em uma API Openweather.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner" style={{textAlign: 'justify'}}>
          <span className="image fit">
            <img src={pic9} alt="api" />
          </span>
          <p>
            Este projeto é parte do teste técnico proposto pela ADDE sistemas, 
            no qual o objetivo era desenvolver um sistema contendo frontend e backend capaz 
            de mostrar o clima atual e a previsão do tempo a partir do input de um cidade e/ou localização do usuário.           
          </p>

          <p>
            No backend foi utilizada a tecnologia Python, na versão 3.9 com o framework Flask para:

            - Comunicação com a api externa OpenWeatherMap para pegar os dados de clima filtrado por cidade/região.
            - Persistência dos dados recuperados da API por 15 minutos através de cache
            - Filtragem dos dados moldando o objeto desejado a ser fornecido para o frontend
            - Uso de uma rota exclusiva para recuperar os dados usando localização (latitude e longitude)
            - Uso de rota exclusiva para recuperar os dados de previsão de 7 dias, utilizando o nome da Cidade desejada e Região.
          </p>

          <p>
              No Frontend foi utilizado Typescript junto ao framework Angular 11, com o objetivo de capturar entrada do usuário através de um input, e exibir dados recuperados do backend com base nessa entrada. Por padrão a previsão utilizada a localização atual do usuário, fornecida pelo navegador.

                - Foi criado um serviço weather que consome as informações do backend e é usado na aplicação para entregar a informação
                - Foi utilizada a tipagem de dados do typescript, onde é recebido um objeto do tipo Weather do backend, que devve estar em conformidade com os atributos esperados
                - Após a consulta pelo backend é exibido para o usuário os dados através da temperatura atual, cidade, clima, e de um indicativo visual.

          </p>

          <p> Veja o código completo da aplicação no <a href="https://github.com/williamguilhermesouza/WeatherForecast" target="_blank">Github</a></p>

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