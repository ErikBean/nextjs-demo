import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="stage">
        <div className="box bounce-7">
          <div>NO LUNCH</div>
          <div>FOR BRANDON HUNT</div>
        </div>
      </div>
      <main>
        <h1 className="title"></h1>
        <h1 className="icons">
          <span className="eyes">🍲</span>
          <span className="eyes">👀</span>
        </h1>
      </main>

      <style jsx>{`
        @keyframes bounce-7 {
          0% {
            transform: scale(1, 1) translateY(0);
          }
          10% {
            transform: scale(1.1, 0.9) translateY(0);
          }
          30% {
            transform: scale(0.9, 1.1) translateY(-100px);
          }
          50% {
            transform: scale(1.05, 0.95) translateY(0);
          }
          57% {
            transform: scale(1, 1) translateY(-7px);
          }
          64% {
            transform: scale(1, 1) translateY(0);
          }
          100% {
            transform: scale(1, 1) translateY(0);
          }
        }
        .stage {
          display: flex;
          height: 330px;
          width: 100%;
        }
        .box {
          text-align: center;
          align-self: flex-end;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          background-color: #f44336;
          height: 200px;
          margin: 0 auto 0 auto;
          transform-origin: bottom;
          width: 200px;
        }
        .bounce-7 {
          font-size: 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation-name: bounce-7;
          animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
        }

        .title {
          font-family: Open Sans, Helvetica, sans-serif;
          display: online-block;
        }
        .icons {
          line-height: 0;
          transform: translateY(-150px);
          font-size: 500px;
        }
        .eyes {
          transform: scaleX(-1);
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
