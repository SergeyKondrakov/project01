import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {

    _state: {

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

            newMessageBody: "",
        },
    },

    _callSubscriber() {
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;