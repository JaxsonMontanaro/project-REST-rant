  function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <img src={photo-1513618364580-fe1596762e8e.avif} alt={place.name}/>
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