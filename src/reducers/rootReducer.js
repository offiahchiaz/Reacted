const initState = {
    posts: [
        { id: 1, title: 'Get some rest', body: 'Itis very good for your body'},
        { id: 2, title: 'Eat good food', body: 'Eating balanced meals helps te body function properly'},
        { id: 3, title: 'Dress smart', body: 'You are mostly likely addressed the way you dress'}
    ]
}
const rootReducer = (state = initState, action) => {
    return state; 
}

export default rootReducer;