const INITIAL_STATE = {
    user: null,
    loading: false,
    page: "home"
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GETTING_USER":
            return { ...state, loading: true }
        case "FINISH_WITH_USER":
            return { ...state, loading: false, user: action.payload, page: "result" }
        case "FINISH_WITHOUT_USER":
            return {...state, loading: false, user: null, page: "home"}
        default:
            return state;
    }
};
