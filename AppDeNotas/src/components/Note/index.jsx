export const Note = ({ notes }) => {
  const { title, text, image } = notes[0];
  return (
    <article className="note-article">
      <header className="note-header"><h2>{title}</h2></header>
      <section className="note-section">
       {image && <img src={`http://localhost:8000/image`} />}
        {text&&<p className="note-p">
         {text}
        </p>}
      </section>
    </article>
  );
};
