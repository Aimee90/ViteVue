// function useFilterReset<T>(dataModel: any):<T>{
//   return dataModel
// }
function handleDataInit<T>(value: number | string | boolean ): T{
  switch(typeof value){
    case 'string':
      return null
    case 'boolean':
      return false
    case 'number': 
      return null
  }
}
function useDataReset<T>(dataModel: T): T {
  if(typeof dataModel !== 'object'){
    return handleDataInit(dataModel)
  }
  return dataModel;
}

export default {
  useDataReset
}