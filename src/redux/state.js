let renderEntireTree = () => {
}

let state = {

    profilePage: {

        postsData: [
            { id: 1, message: "Hi, how are you?" },
            { id: 2, message: "It's my first post" },
        ],

        newPostText: "",
    },

    messagesPage: {

        dialogsData: [
            { id: 1, name: "Xavier Dumoulie" },
            { id: 2, name: "Анастасия Вишникина" },
            { id: 3, name: "Олег Блохин" },
            { id: 4, name: "Анастасия Клименкова" },
        ],

        messagesData: [
            { id: 1, message: "Быть или не быть - вот в чем вопрос." },
            { id: 2, message: "Мой дядя самых честных правил, когда не в шутку занемог..." },
            { id: 3, message: "Всё смешалось в доме Облонских" },
        ],
    },
};

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;