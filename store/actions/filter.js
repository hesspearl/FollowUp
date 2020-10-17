export const DELETED_FILTER="DELETED_FILTER"
export const SELECTED_FILTER="SELECTED_FILTER"
export const SELECTED_MULTI_FILTER="SELECTED_MULTI_FILTER"
export const MONTHS="MONTHS"
export const DELETED_MONTHS="DELETED_MONTHS"
export const DELETED_ITEMS="DELETED_ITEMS"

export const filterByMonths=(months)=>{
   return{ type: MONTHS , value:months}
}

export const selectFilter =(filter, name)=>{
   return{type:SELECTED_FILTER , value:filter, name}
}


export const deleteFilter =()=>{
   return{type:DELETED_FILTER  }
}

export const deleteMonth =()=>{
   return{type:DELETED_MONTHS  }
}

export const deletedItem= (id)=>{
   return{type:DELETED_ITEMS , value:id}
}