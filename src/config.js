const API_URL = 'http://localhost:1337/data' // useless

const home = {
    links: {
        mail: 'mailto:contact@aymericm.fr',
        resumee: 'https://drive.google.com/file/d/10fLTpHwRXXfCUU_aozdZTGNtFCnXNdrq/view?usp=sharing'
    },
    text: [
        'Hello !',
        'My name is [URL="https://www.linkedin.com/in/aymericmoehn/"]Aymeric Moehn[/URL].',
        'I’m a creative front-end developper and [URL="https://www.malt.fr/profile/aymericm"]freelance[/URL].',
        'I also do [URL="https://instagram.com/aym.jpg"]photography[/URL] for fun.',
        'Would you like to see my [URL="/projects"]work[/URL] ?'
    ],
    projects: [
        {
            "id": 1,
            "published_at": "2020-11-09T13:10:45.308Z",
            "created_at": "2020-11-09T13:10:35.495Z",
            "updated_at": "2020-11-09T13:10:45.338Z",
            "project": {
                "id": 1,
                "name": "Hello World",
                "description": "Test project just for testing",
                "content": "Oui le\n\n# markdown",
                "thumbnail": {
                    "id": 1,
                    "name": "853be71a76b13f983c096d060975a048.jpg",
                    "alternativeText": "",
                    "caption": "",
                    "width": 600,
                    "height": 1067,
                    "formats": {
                        "thumbnail": {
                            "name": "thumbnail_853be71a76b13f983c096d060975a048.jpg",
                            "hash": "thumbnail_853be71a76b13f983c096d060975a048_d33d0ff5e4",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 88,
                            "height": 156,
                            "size": 4.76,
                            "path": null,
                            "url": "/uploads/thumbnail_853be71a76b13f983c096d060975a048_d33d0ff5e4.jpg"
                        },
                        "large": {
                            "name": "large_853be71a76b13f983c096d060975a048.jpg",
                            "hash": "large_853be71a76b13f983c096d060975a048_d33d0ff5e4",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 562,
                            "height": 1000,
                            "size": 126.03,
                            "path": null,
                            "url": "/uploads/large_853be71a76b13f983c096d060975a048_d33d0ff5e4.jpg"
                        },
                        "medium": {
                            "name": "medium_853be71a76b13f983c096d060975a048.jpg",
                            "hash": "medium_853be71a76b13f983c096d060975a048_d33d0ff5e4",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 422,
                            "height": 750,
                            "size": 77.19,
                            "path": null,
                            "url": "/uploads/medium_853be71a76b13f983c096d060975a048_d33d0ff5e4.jpg"
                        },
                        "small": {
                            "name": "small_853be71a76b13f983c096d060975a048.jpg",
                            "hash": "small_853be71a76b13f983c096d060975a048_d33d0ff5e4",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 281,
                            "height": 500,
                            "size": 36.15,
                            "path": null,
                            "url": "/uploads/small_853be71a76b13f983c096d060975a048_d33d0ff5e4.jpg"
                        }
                    },
                    "hash": "853be71a76b13f983c096d060975a048_d33d0ff5e4",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "size": 142.93,
                    "url": "/uploads/853be71a76b13f983c096d060975a048_d33d0ff5e4.jpg",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "created_at": "2020-11-09T13:09:53.655Z",
                    "updated_at": "2020-11-09T13:09:53.668Z"
                }
            }
        }
    ]
}

export {
    API_URL,
    home
}