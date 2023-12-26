const React = require("react");
const Def = require("../default");

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }

  return (
    <Def>
      <div className="row">
        <div className="col-sm-6">
          <img src={data.place.pic} alt={data.place.name} />
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <div className="col-sm-6">
          <h2>Description</h2>
          <h3>{data.place.showEstablished()}</h3>
          <h4>Serving {data.place.cuisines}</h4>
        </div>
      </div>
      <main>
        <h1>{data.place.name}</h1>
        <h1>{data.place.rating}</h1>
        <h1>{data.place.description}</h1>
        <h1>{data.place.comment}</h1>
      </main>
    </Def>
  );
}

<form method="POST" action={`/places/${data.id}?_method=DELETE`}>
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>;

module.exports = show;