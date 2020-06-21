import Head from 'next/head';
import React from 'react';

const Layout = (
  {
    children,
    title = 'Tally'
  }: {
    children: React.ReactNode;
    title?: string;
  }
): JSX.Element => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">Dukaat</a>
          </div>
        </nav>
      </header>

      {children}

      {/* <footer className="footer"></footer> */}
    </>
  );
};

export default Layout;