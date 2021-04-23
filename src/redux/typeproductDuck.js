import axios from 'axios';
//constante
const dataInicial =  {
    array : [],
    offset: 0
}

const GET_TYPEPRODUCTS = 'GET_TYPEPRODUCTS'

//reducer
export default function typeproductReducer(state = dataInicial, action){
    switch(action.type){
        case GET_TYPEPRODUCTS:  
        // console.log('typeproductReducer')
        // console.log(action.payload.array)
            return {
                ...state, 
                array: action.payload.array
            }
        default:
            return state
    }
}

//actions
export const getTypeProducts = () => async (dispatch, getState)  => {
    try{
        const {offset} = getState().showstatus
        const response = await axios.get(`http://localhost:8000/api/typeproducts`)
        dispatch({
            type: GET_TYPEPRODUCTS,
            payload: {
                array: response.data,
                offset: offset
            }
        })  

    }catch(error){
        console.log(error)
    }
}
