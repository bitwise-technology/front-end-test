const INITIAL_STATE = {
    user: null,
    loading: false,
    page: "home"
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GETTING_USER":
            return { ...state, loading: true }
        case "FINISH_USER":
            return { ...state, loading: false, user: action.payload, page: "result" }
        default:
            return state;
    }
};
