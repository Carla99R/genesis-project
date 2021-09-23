export default (state, action) => {
    const {mode, button} = action;

    return {
        ...state,
        mode: mode,
        button: button
    }

}