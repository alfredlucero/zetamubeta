angular.module('zmbApp').factory('brotherDataFactory', brotherDataFactory);

function brotherDataFactory($http) {
	return {
		brothersList: brothersList,
		brotherDisplay: brotherDisplay
		// hotelDisplay: hotelDisplay,
		// addBrother: postReview
	};

	function brothersList() {
		return $http.get('/api/brothers').then(complete).catch(failed);
	}

	function brotherDisplay(id) {
	 	return $http.get('/api/brothers/' + id).then(complete).catch(failed);
	}

	// function postReview(id, review) {
	// 	return $http.post('/api/hotels/' + id + '/reviews', review).then(complete).catch(failed);
	// }

	function complete(response) {
		return response.data;
	}

	function failed(error) {
		console.log(error.statusText);
	}
}