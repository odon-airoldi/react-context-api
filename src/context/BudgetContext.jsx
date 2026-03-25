

// importo funzione createContext da libreria react
import { createContext, useContext, useState } from 'react'

// creo il mio context BudgetContext
const BudgetContext = createContext()



function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false)
    const [initialProducts, setInitialProducts] = useState(null)
    const [products, setProducts] = useState(null)

    function clickBudgetMode() {
        if (budgetMode === false) {
            setBudgetMode(true)
            const filterProduct = products.filter(product => product.price <= 30)
            setProducts(filterProduct)
        } else {
            setBudgetMode(false)
            setProducts(initialProducts)
        }

    }

    return (
        <BudgetContext.Provider
            value={{
                budgetMode,
                setBudgetMode,
                products,
                setProducts,
                setInitialProducts,
                clickBudgetMode
            }}
        >
            {children}
        </BudgetContext.Provider>
    )

}

function useBudget() {

    const context = useContext(BudgetContext)
    return context

}


// esporto il mio provider e il mio hook con il mio context
export { BudgetProvider, useBudget }