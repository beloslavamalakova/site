let xml = new XMLHttpRequest()
xml.open(
  'GET',
  'https://random-data-api.com/api/address/random_address?size=30'
)
document.getElementById('xmlhttp').innerHTML = result
xml.send()
xml.onload = () => {
  console.log(xml.response)
}
