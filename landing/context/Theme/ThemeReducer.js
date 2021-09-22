export default (state, action) => {
    const {style, button} = action;

    return {
        ...state,
        style: style,
        button: button
    }

}