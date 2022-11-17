import React, { useContext } from "react"

export const initialState = {
    carrito: []
}

export const ActionTypes = {
    AgregarCarrito: "AGREGAR_CARRITO",
    EliminarCarrito: "ELIMINAR_CARRITO",
}

export const reducer = (state = {}, action) => {
    switch (action.type){
        case ActionTypes.AgregarCarrito:
            return {
                ...state,
                carrito: [...state.carrito, action.value],
            };
        case ActionTypes.EliminarCarrito:
            let newCarrito = state.carrito.filter(carrito => carrito?.id!=action.value?.id)
            return {
                ...state,
                carrito: newCarrito
            };
        default:
            return state;
    }
}

export const initialContext = {
    contextState:initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => useContext(Cont)