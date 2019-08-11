requests.put(
	'http://localhost:8081/Helpers',
	json={"Amount":1,"Method":"addEvent","IdEvent":"2"},
	headers={'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInVubSI6Ik1hcmNpbyBBbnRcdTAwZjRuaW8iLCJuY2siOiJtYXJjaW9hY21hdXJpY2lvIiwiZ3JwIjpbXSwiaWF0IjoxNTY1NTU0ODYyLCJleHAiOjE1NjU1NTg0NjIsImp0aSI6MTN9.kLWpVQYhwSUSpjpoYiugr24REgrB9BDhPKwpMJ-qvEk'}
)