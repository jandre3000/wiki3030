import Navigo from 'navigo';
import store from './store.js';

const DEFAULT_PAGE = "Main_Page";
const DEFAULT_LANG = "en";

var root = '';
var useHash = true; // Defaults to: false
var hash = '!#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router.on( () => {
	router.navigate(`/${DEFAULT_LANG}/${DEFAULT_PAGE}`);
} ).resolve();

// Main page
router.on( /(\w+)\/(Wikipedia:)(.*)/, ( lang, namespace, title ) => {
	updateTemplateContent( namespace + decodeURIComponent( title ), lang, namespace );
} ).resolve();

// for the life of me I can't make this equivalent with regex with multi-language support.
router.on( '/:lang/', ( params ) => {
	updateTemplateContent( DEFAULT_PAGE, params.lang, 'main_page' )
} ).resolve();


// for the life of me I can't make this equivalent with regex with multi-language support.
router.on( '/:lang/:title', ( params ) => {
	const namespace = params.title === 'Main_Page' ? 'main_page' : 'article' ;
	updateTemplateContent( params.title, params.lang, namespace )
} ).resolve();

/**
 * Wikipedia content gateway
 * @param {string} title
 */
function fetchContent( title, lang = "en" ) {
	const apiData = {
		"action": "parse",
		"format": "json",
		"page": title,
		"prop": "text|headhtml",
		"utf8": 1,
		"formatversion": "latest",
		"redirects": "true",
		"origin": "*"
	},
	serializedQueryString =  serializeParams( apiData );

	return fetch( `https://${lang}.wikipedia.org/w/api.php?` + serializedQueryString );
}

/**
* https://stackoverflow.com/questions/6566456/how-to-serialize-an-object-into-a-list-of-url-query-parameters
**/
function serializeParams( obj ) {
	let str = "";
	for (let key in obj) {
		if (str != "") {
			str += "&";
		}
		str += key + "=" + encodeURIComponent(obj[key]);
	}
	return str;
}

function updateTemplateContent( title, lang, namespace ) {
	return fetchContent( title, lang )
		.then( resp => resp.json() )
		.then( pageText => {
			store.commit( 'setLang', lang );
			store.commit( 'setTitle', pageText.parse.title );
			store.commit( 'setContent', pageText.parse.text );
		})
}

export default router;
