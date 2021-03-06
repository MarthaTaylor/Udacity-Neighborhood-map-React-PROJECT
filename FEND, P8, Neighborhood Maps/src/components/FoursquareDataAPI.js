
//error handler
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

//gets a responce froFoursquare containing restaurants around Greenwich
export const getAllPlaces = () =>
  fetch(`https://api.foursquare.com/v2/venues/search?ll=51.48257659999999,-0.0076589&radius=800&intent=browse&query=pub,bar&client_id=2EIUKRSH1HE350VDDFQC122U51WVYKGN3VHHAMKQ4X4LI0KB&client_secret=TVM0XXYWKQYSB5UUV1GEUHGHETIDUU1DYPG4ITSQHOST5PGU&v=20180820`)
    .then(handleErrors)
    .then(res => res.json())
//gets array of venues 
    .then(data => data.response.venues)


