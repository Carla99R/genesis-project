export default (state, action) => {
    const {background, font, text, button} = action;

    return {
        ...state,
        background: background,
        font: font,
        text: text,
        button: button
    }

}