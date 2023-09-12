const nameElement = document.querySelector('#name');
        const usernameElement = document.querySelector('#username');
        const avatarElement = document.querySelector('#avatar');
        const reposElement = document.querySelector('#repos');
        const followersElement = document.querySelector('#followers');
        const followingElement = document.querySelector('#following');
        const linkElement = document.querySelector('#link');
        const usernameInput = document.querySelector('#username-input');
        const searchButton = document.querySelector('#search-button');

        // Esta função faz uma requisição AJAX para obter informações do usuário do GitHub e preenche os elementos HTML com os dados.
        function searchUser(username) {
            fetch(`https://api.github.com/users/${username}`)
                .then(function(res) {
                    return res.json();
                })
                .then(function(json){
                    nameElement.innerText = json.name;
                    usernameElement.innerText = json.login;
                    avatarElement.src = json.avatar_url;
                    followingElement.innerText = json.following;
                    followersElement.innerText = json.followers;
                    reposElement.innerText = json.public_repos;
                    linkElement.href = json.html_url;
                })
        }

        document.addEventListener('DOMContentLoaded', function(){
            searchButton.addEventListener('click', function() {
                const username = usernameInput.value;
                searchUser(username);
            })
        })