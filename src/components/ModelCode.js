const ModelCode = ({ data, show, setShow }) => {
  return (
    <div className="col-12 col-lg-1">
      <div
        className="nav nav-pills d-flex align-items-start "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {data.map((car, id) => {
          return (
            <button
              key={car.id}
              className="border-0 px-2 m-2 fs-4 fw-bold text-secondary activeBtn"
              id="v-pills-home-tab"
              type="button"
              role="tab"
              onClick={() => setShow(id)}
            >
              {car.code}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ModelCode;
