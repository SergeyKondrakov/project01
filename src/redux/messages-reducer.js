const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({ id: 4, message: body });
            state.newMessageBody = "";
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default messagesReducer;