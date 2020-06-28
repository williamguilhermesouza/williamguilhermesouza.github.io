import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contato</h2>
        <p>
            Escreva sua mensagem, entre em contato!!!
        </p>
        <form method="post" action="mailto:williamguilhermesouza@gmail.com" encType="text/plain">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar Mensagem" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-phone">{config.phone}</li>

          <li className="fa-home">{config.address}</li>

          <li className="fa-envelope-o"><a href={`mailto:${config.mail}`}>{config.mail}</a></li>


          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; William Souza. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
