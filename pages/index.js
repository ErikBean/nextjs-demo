import Head from 'next/head';
import { useState, useEffect } from 'react';
import { smallHole, bigHole } from '../src/blackHolePath';

const requestImg = (setImgSrc) =>
  fetch('/api/space')
    .then((res) => res.text())
    .then((imgSrc) => setImgSrc(imgSrc));

export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(false);
  useEffect(() => {
    requestImg(setImgSrc);
  }, []);
  return (
    <div className="container">
      <Head>
        <title>CSS Loaders</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {imgLoaded ? (
        <button
          className="reset"
          onClick={() => {
            // document.getElementById('zoom-out-hole').beginElement();
            setImgLoaded(false);
            requestImg(setImgSrc);
          }}
        >
          Reset
        </button>
      ) : (
        <h2 className="img-loading">Loading from unsplash...</h2>
      )}
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="black-hole-clip">
          <path d={smallHole} className={`bh-path ${imgLoaded ? 'loaded' : ''}`}>
            {/* <animate
              id="zoom-in-hole"
              attributeName="d"
              dur="6s"
              begin="indefinite"
              fill="freeze"
              to={bigHole}
            />
            <animate
              id="zoom-out-hole"
              attributeName="d"
              dur="500ms"
              begin="indefinite"
              fill="freeze"
              to={smallHole}
            /> */}
          </path>
        </clipPath>
      </svg>
      <main id="main">
        <div className="img-mask" id="mask">
          <img
            onLoad={(evt) => {
              setImgLoaded(true);
              // document.getElementById('zoom-in-hole').beginElement();
            }}
            className={`space-img ${imgLoaded ? 'loaded' : ''}`}
            src={imgSrc || '#'}
          />
        </div>
        <footer id="footer">
          <a id="resources" href="/resources">
            Resources
          </a>
        </footer>
      </main>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 25%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes rotate3D {
          0% {
            transform: rotate3d(-1, 1, 0, 60deg) rotate(0deg);
          }
          100% {
            transform: rotate3d(-1, 1, 0, 60deg) rotate(360deg);
          }
        }
        @keyframes rotate3DZoom {
          0% {
            transform: rotate3d(-1, 1, 0, 60deg) rotate(0deg) scale(1);
            opacity: 1;
          }
          30%  {
            
          }
          100% {
            opacity: 0;
            transform: rotate3d(-1, 1, 0, 60deg) rotate(360deg) scale(100);
          }
        }
        #main {
          background-color: black;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
        }
        #footer {
          align-self: flex-start;
        }
        #resources {
          color: white;
          font-size: 16px;
        }
        .bh-path {
          transform-origin: 400px 413px;
          animation: rotate3D 2s linear infinite;
        }
        .bh-path.loaded {
          transform-origin: 400px 413px;
          animation: rotate3DZoom 5s linear;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }
        .reset,
        .img-loading {
          position: absolute;
          left: 50px;
          top: 50px;
        }
        .img-loading {
          color: white;
          font-size: 30px;
        }
        .space-img {
          height: 100%;
          transition: opacity 4s;
          opacity: 0;
        }
        .space-img.loaded {
          opacity: 1;
        }
        .img-mask {
          overflow: hidden;
          height: 826px;
          width: 800px;
          background-size: 800% 800%;
          background-image: repeating-linear-gradient(
            45deg,
            violet,
            indigo,
            blue,
            green,
            yellow,
            orange,
            red,
            orange,
            yellow,
            green,
            blue,
            indigo
          );
          animation: shimmer 8s ease infinite;
          clip-path: url(#black-hole-clip);
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background-color: black;
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
