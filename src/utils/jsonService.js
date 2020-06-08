import axios from 'axios';

export const jsonService = {
    getPostsByUser,
    getPhotoByUserID,
    getAlbumsByUserId,
    submitPost,
    getFirstTen
};

class jsonplaceholder {
    static MainURL = "https://jsonplaceholder.typicode.com";
}

async function getPhotoByUserID(userId) {
    try {
        const albums = await getAlbumsByUserId(userId);
        const { data } = await axios({
            method: 'get',
            url: `${jsonplaceholder.MainURL}/albums/${albums.id}/photos`
        })

        return data[0];
    } catch (error) {
        return Promise.reject(error);
    }
}

async function getAlbumsByUserId(userId) {
    try {
        const { data } = await axios({
            method: 'get',
            url: `${jsonplaceholder.MainURL}/albums?userId=${userId}`
        });

        return data[0];
    } catch (error) {
        return Promise.reject(error);
    }
}

async function getUsers() {
    try {
        const { data } = await axios({
            method: 'get',
            url: `${jsonplaceholder.MainURL}/users`
        });
        return data.slice(0, 9);
    } catch (error) {
        return Promise.reject(error);
    }
}

async function getFirstTen() {
    try {
        const users = await getUsers();
        const usersEnhanced = await users.map(async (user) => {
            const post = await getPostsByUser(user.id)
            const photo = `https://i.picsum.photos/id/${user.id}/300/300.jpg`
            // Albums endpoint is given error           
            // const photo = await getPhotoByUserID(user.id)
            return { user, post, photo }
        })

        const finalResult = await Promise.all(usersEnhanced)

        return finalResult.flat(1);
    } catch (error) {
        console.log(error)

        return Promise.reject(error);
    }
}

async function getPostsByUser(userId) {
    try {
        const { data } = await axios({
            method: 'get',
            url: `${jsonplaceholder.MainURL}/posts?userId=${userId}`
        });

        return data[0];
    } catch (error) {
        return Promise.reject(error);
    }
}

async function submitPost(post) {
    try {
        const { data } = await axios({
            method: 'post',
            url: `${jsonplaceholder.MainURL}/posts`,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            data: post
        });
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}