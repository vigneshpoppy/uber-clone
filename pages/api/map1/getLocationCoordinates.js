const getLocationCoordinates = async (req, res) => {
  const url="https://api.mapbox.com/geocoding/v5/mapbox.places";
  const token="pk.eyJ1IjoicG9wcHlzZWVkNjQ2NCIsImEiOiJja2poZWFhZ2sxMHE5MnVudmJ0ejQyZXRoIn0.QQ5olS8pxE7ECjKddT--eQ";
 // const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  const mapboxUrl = `${url}/${req.body.location}.json?access_token=${token}`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
