const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = ''; // APP KEY HERE
const APP_SECRET = ''; // APP SECRET HERE
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

function loginUser() {
    $('#formLogin').on('submit', function () {
        let username = $('#formLogin input[name=username]').val();
        let password = $('#formLogin input[name=passwd]').val();
        $.post({
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            console.log(res);
            signInUser(res, 'Login successful')
        }).catch(handleAjaxError)
    });
    // POST -> BASE_URL + 'user/' + APP_KEY + '/login'
    // signInUser(res, 'Login successful.')
}

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister input[name=passwd]').val();
    $.post({
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        console.log(res);
        signInUser(res)
    }).catch(handleAjaxError)
    // POST -> BASE_URL + 'user/' + APP_KEY + '/'
    // signInUser(res, 'Registration successful.')
}

function listBooks() {
    // TODO
    // GET -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // displayPaginationAndBooks(res.reverse())
}


function createBook() {
    // TODO
    // POST -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // showInfo('Book created.')
}

function deleteBook(book) {
    // TODO
    // DELETE -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book deleted.')
}

function loadBookForEdit(book) {
    // TODO
}

function editBook() {
    // TODO
    // PUT -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book edited.')
}

function saveAuthInSession(userInfo) {
    // TODO
}

function logoutUser() {
    // TODO
    // showInfo('Logout successful.')
}

function signInUser(res, message) {
    saveAuthInSession(res);
    showInfo(message);
    showHideMenuLinks();
    showHomeView();
    $('#loggedInUser').text(`Hello ${res.username}!`)
}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo')
    if(pagination.data("twbs-pagination")){
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            // TODO remove old page books
            let startBook = (page - 1) * BOOKS_PER_PAGE
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length)
            $(`a:contains(${page})`).addClass('active')
            for (let i = startBook; i < endBook; i++) {
                // TODO add new page books
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}