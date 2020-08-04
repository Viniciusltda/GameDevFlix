const url = window.location.hostname.includes('localhost')
	? 'http://localhost:8080'
	: 'https://gamedevflix.herokuapp.com';

export default {
	url,
};
