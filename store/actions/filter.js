export const DELETED_FILTER="DELETED_FILTER"
export const SELECTED_FILTER="SELECTED_FILTER"
export const MONTHS="MONTHS"

export const filterByMonths=(months)=>{
   return{ type: MONTHS , value:months}
}

export const selectFilter =(filter)=>{
   return{type:SELECTED_FILTER , value:filter }
}

export const deleteFilter =()=>{
   return{type:DELETED_FILTER  }
}