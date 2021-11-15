import Note from "./Note";

const Content = ({data, fetchError, fetchData}) => {


  return (
    <>
      <section className="">
        <h3 className="text-success leads mt-4 mb-3">Use Emojies to rate these jokes</h3>

        <div className="container mb-3">
          <div className="row g-4">

              <Note
              data={data}
              fetchError={fetchError}
              fetchData={fetchData}
              />

          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
