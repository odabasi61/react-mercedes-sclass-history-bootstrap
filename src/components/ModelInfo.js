const ModelInfo = ({ data }) => {
  const { model, description, tags, code, image } = data;
  return (
    <div className="col-12 col-lg-9 text-center">
      <div>
        <h3>{model}</h3>
        <div className="image">
          <img src={image} alt={code} />
        </div>
        <div className="py-2">
          <span>{description}</span>
        </div>
      </div>
      <article className="d-flex align-items-center justify-content-center">
        {tags.map((tag, i) => (
          <div className="d-flex flex-wrap" key={i}>
            <span className="text-danger py-1 px-2 rounded-3 bg-secondary">
              {tag}
            </span>
          </div>
        ))}
      </article>
    </div>
  );
};

export default ModelInfo;
