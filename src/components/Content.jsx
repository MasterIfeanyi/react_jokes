import Note from "./Note";

const Content = ({data, fetchError, fetchData}) => {


  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center lead mt-4 mb-3">Use Emojies to rate these jokes</h3>
          </div>
        </div>
      

      
        <div className="row g-4 mb-3">
          <Note
            data={data}
            fetchError={fetchError}
            fetchData={fetchData}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
