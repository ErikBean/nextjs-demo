import Head from 'next/head';
import { useState } from 'react';
import blackHolePath from '../src/blackHolePath';
export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgRequested, setImgRequested] = useState(false);
  return (
    <div className="container">
      <Head>
        <title>CSS Loaders</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <button onClick={() => setImgRequested(!imgRequested)}>
        {imgRequested ? 'Reset' : 'Load Image'}
      </button>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="black-hole-clip">
          <path d={blackHolePath}>
            {!imgLoaded && (
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
            )}

            <animateTransform
              id="bh-scale"
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1; 3"
              dur="4s"
              repeatCount="1"
              begin="indefinite"
            />
          </path>
        </clipPath>
      </svg>
      <main id="main">
        <img
          onClick={(evt) => {
            console.log(evt.pageX, evt.pageY);
          }}
          onLoad={() => {
            document.getElementById('bh-scale').beginElement();
            setImgLoaded(true);
          }}
          className={`space-img ${imgLoaded ? 'loaded' : ''}`}
          src={imgRequested ? '/space_big.jpg' : '#'}
        />
        <footer id="footer">
          <a href="/resources">Resources</a>
        </footer>
      </main>

      <style jsx>{`
        #main {
          display: flex;
          justify-content: space-between;
           {
            /* flex-direction: column; */
          }
          align-items: center;
        }
        #footer {
          align-self: flex-start;
        }
        .space-img {
          background: grey;
          height: 826px;
          width: 800px;
          clip-path: url(#black-hole-clip);
        }
        .space-img.loaded {
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
