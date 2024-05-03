const reducer = (state, action) => {
    switch (action.type) {
        case 'setApi':
            return { ...state, suppliers: action.api }
        case "SortByNameAtoZ": {
            let arr = [...state.suppliers].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            return { ...state, suppliers: arr };
        }
        case "SortByNameZtoA": {
            let arr = [...state.suppliers].sort((a, b) =>
                b.title.localeCompare(a.title)
            );
            return { ...state, suppliers: arr };
        }
        case "SortByPrice": {
            let arr = [...state.suppliers].sort((a, b) =>
                a.price - b.price
            );
            return { ...state, suppliers: arr };
        }
        case "SortByRate": {
            let arr = [...state.suppliers].sort((a, b) => {
                return a.rating.rate - b.rating.rate
            });
            return { ...state, suppliers: arr };
        }
        case "SortByCount": {
            let arr = [...state.suppliers].sort((a, b) => {
                return a.rating.count - b.rating.count
            }
            );
            return { ...state, suppliers: arr };
        }

        default:
            return state
    }
}

export default reducer