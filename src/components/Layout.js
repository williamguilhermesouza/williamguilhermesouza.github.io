import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'portfolioSite', content: 'William Souza' },
                { name: 'portfolioSite', content: 'site, web' },
                { name: 'google-site-verification', content: 'Su-5Ef0wBRoOeu6N_bHt2S-hLKpZpXzcLV-BkM0vJno'},
                { name: 'description', content: 'Desenvolvedor Fullstack especializado no desenvolvimento de sistemas web'},
                { name: 'robots', content: 'index, follow'},
                { name: 'keywords', content: 'william, souza, william souza, william guilherme souza, dev, programador, desenvolvedor, fullstack, javascript, js, angular, react, react native, expo, mobile'},
              ]}
              script={[{ type: "text/javascript", src: "https://kit.fontawesome.com/de34cd2f4b.js", crossOrigin: "anonymous"}, {type: "text/javascript", src=`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5GX32KH');`}]}
            >
              <html lang="pt-br" />
            </Helmet>
            <div
              className={isPreloaded ? ' main-body  is-preload' : ' main-body'}
            >
              <div id="page-wrapper">
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GX32KH"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
