const links = [
  {
    name: 'Base64.Guru',
    descrip: 'Convert SVG to base64',
    href: 'https://base64.guru/converter/encode/image/svg',
  },
  {
    name: 'Photopea',
    descrip: 'Editor good for vectorizing bitmap',
    href: 'https://www.photopea.com/',
  },
  {
    name: 'Online-Convert',
    descrip: 'Convert Bitmaps to SVG',
    href: 'https://image.online-convert.com/convert-to-svg',
  },
  {
    name: 'Pixlr E',
    descrip: 'Bitmap Image editor',
    href: 'https://pixlr.com/e/',
  },
  {
    name: 'Shape Shifter (Beta)',
    descrip: 'SVG editor, supports morphs',
    href: 'https://beta.shapeshifter.design/',
  },
  {
    name: 'Method Draw SVG Editor',
    descrip: 'Edit canvas size, paths',
    href: 'https://editor.method.ac/',
  },
  /*
  {
    name: '',
    descrip: '',
    href: '',
  },
  {
    name: '',
    descrip: '',
    href: '',
  },
*/
];

export default function Resources() {
  return (
    <>
      <header>
        <a href="/">Back</a>
      </header>
      <main>
        <h1>Resources</h1>
        <ul>
          {links.map(({ name, descrip, href }) => (
            <li className="item">
              <a href={href}>{name}</a>
              <div className="descrip">{descrip}</div>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .item {
            margin: 20px 0;
          }
          .descrip {
            padding-left: 20px;
          }
        `}</style>
      </main>
    </>
  );
}
