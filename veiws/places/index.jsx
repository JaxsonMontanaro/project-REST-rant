  function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href={`/places/${place.id}`}>
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })    
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
              <img src={premium_photo-1664189121690-fd870956d9f4.avif} alt={place.name}/>
              </div>
          </main>
      </Def>
    )
  }