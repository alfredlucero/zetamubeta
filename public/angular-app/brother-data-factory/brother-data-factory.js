angular.module('zmbApp').factory('brotherDataFactory', brotherDataFactory);

function brotherDataFactory($http) {
	return {
		brothersList: brothersList,
		brotherDisplay: brotherDisplay,
		postBrother: postBrother
	};

	function brothersList() {
		return $http.get('/api/brothers').then(complete).catch(failed);
	}

	function brotherDisplay(id) {
	 	return $http.get('/api/brothers/' + id).then(complete).catch(failed);
	}

	function postBrother(brother) {
		return $http.post('/api/brothers', brother).then(complete).catch(failed);
	}

	function complete(response) {
		return response.data;
	}

	function failed(error) {
		console.log(error.statusText);
	}
}