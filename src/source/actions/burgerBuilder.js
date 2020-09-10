import * as actionTypes from './actionTypes';

export const addIngredient = (name) =>{
    //normal redux
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) =>{
    //normal redux
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return{
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = (ingredients) => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }; 
};

// export const initIngredients = () => {
//     //Because of thunk
//     return dispatch => {
//         axios.get('https://react-project-576ef.firebaseio.com/ingredients.json')
//         .then(response => {
//             dispatch(setIngredients(response.data));
//         })
//         .catch(error => {
//             dispatch(fetchIngredientsFailed());
//         })
//     };
// };

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    };
};
