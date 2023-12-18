const React = require('react')
const Def = require('../default') 

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h1>{ data.place.rating }</h1>
            <h1>{ data.place.description }</h1>
            <h1>{ data.place.comment }</h1>
          </main>
        </Def>
    )
}

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 

module.exports = show