export const Note = ({ note }) => {
  const { title, text, image } = note;
  return (
    <article className="note-article">
      <header className="note-header"><h2>{title}</h2></header>
      <section className="note-section">
       {image && <img src={image} />}
        <p className="note-p">
         {text}
        </p>
      </section>
    </article>
  );
};
