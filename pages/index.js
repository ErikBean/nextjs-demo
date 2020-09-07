import Head from 'next/head';
import { useState } from 'react';
import { smallHole, bigHole } from '../src/blackHolePath';
export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgRequested, setImgRequested] = useState(false);
  return (
    <div className="container">
      <Head>
        <title>CSS Loaders</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <button
        onClick={() => {
          setImgRequested(!imgRequested);
          if (imgRequested) {
            document.getElementById('zoom-out-hole').beginElement();
            setImgLoaded(false);
          }
        }}
      >
        {imgRequested ? 'Reset' : 'Load Image'}
      </button>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="black-hole-clip">
          <path d={smallHole}>
            <animateTransform
              id="bh-spin"
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 400 413"
              to="360 400 413"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              id="zoom-in-hole"
              attributeName="d"
              dur="8s"
              begin="indefinite"
              fill="freeze"
              to={bigHole}
            />
            <animate
              id="zoom-out-hole"
              attributeName="d"
              dur="350ms"
              begin="indefinite"
              fill="freeze"
              to={smallHole}
            />
          </path>
        </clipPath>
      </svg>
      <main id="main">
        <div className="img-mask">
          <img
            onLoad={() => {
              document.getElementById('zoom-in-hole').beginElement();
              setImgLoaded(true);
            }}
            className={`space-img ${imgLoaded ? 'loaded' : ''}`}
            src={imgRequested ? '/space_big.jpg' : '#'}
          />
        </div>
        <footer id="footer">
          <a href="/resources">Resources</a>
        </footer>
      </main>

      <style jsx>{`
        #main {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
        }
        #footer {
          align-self: flex-start;
        }
        .space-img {
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: opacity 1s linear;
        }
        .space-img.loaded {
          opacity: 1;
        }
        .img-mask {
          height: 826px;
          width: 800px;
          background-color: ${imgLoaded ? 'transparent' : 'grey'};
          transition: background-color 1s linear;
          clip-path: url(#black-hole-clip);
        }
      `}</style>

      <style jsx global>{`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
      `}</style>
    </div>
  );
}
