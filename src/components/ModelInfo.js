const ModelInfo = ({ data }) => {
  const { model, description, tags, code, image } = data;
  return (
    <div className="col-12 col-lg-9 text-center">
      <div>
        <h3 className="pb-3">{model}</h3>
        <div className="image">
          <img src={image} alt={code} />
        </div>
        <div className="py-2">
          <span>{description}</span>
        </div>
      </div>
      <article className="d-flex align-items-center justify-content-center flex-wrap gap-2">
        {tags.map((tag, i) => (
          <div key={i}>
            <span className="py-1 px-2 rounded-3 bg-secondary text">{tag}</span>
          </div>
        ))}
      </article>
    </div>
  );
};

export default ModelInfo;
