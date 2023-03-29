/**CustomerAddon列表新增*/
const AIRSERVICE_ADD_CUSTOMERADDON = '/Airservice/addCustomerAddon';
/**请求model*/
export interface AirserviceAddCustomerAddonRequestModel {
/** 主键 */
 customerAddonId:number;
 /** 客户id */
 cid:number;
 /** 资源包名称 */
 addonName:String 
 /** 资源包类型： 1.im语音通话, 2.stream单兵推流, 3.storage云存储4.device数 */
 addonType:number;
 /** 资源包容量 */
 addonCapacity:BigDecimal 
 /** 资源包来源 1套餐默认资源包 2附加的资源包 */
 fromType:number;
 /** 是否有效 1有效 0无效 -1长期 */
 valid:Short 
 /** 到期时间;1 自定义 -1 永久 */
 expireDate:Date 
 /** 组织资源表id(风筝线) */
 orgAddonId:String 
 /** 创建人id */
 creatorUid:number;
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceAddCustomerAddonResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

const AirserviceAddCustomerAddonFetch = (params:AirserviceAddCustomerAddonResponseModel) => 
	fetchRequest<AirserviceAddCustomerAddonResponseModel>(AIRSERVICE_ADD_CUSTOMERADDON,{method: 'POST', body: params});

/**CustomerAddon列表删除*/
export const AIRSERVICE_DELETE_CUSTOMERADDON = '/Airservice/deleteCustomerAddon';

/**请求model*/
export interface AirserviceDeleteCustomerAddonRequestModel {
/** 主键 */
 customerAddonId:number
 /** 客户id */
 cid:number
 /** 资源包名称 */
 addonName:String 
 /** 资源包类型： 1.im语音通话, 2.stream单兵推流, 3.storage云存储4.device数 */
 addonType:number
 /** 资源包容量 */
 addonCapacity:BigDecimal 
 /** 资源包来源 1套餐默认资源包 2附加的资源包 */
 fromType:number
 /** 是否有效 1有效 0无效 -1长期 */
 valid:Short 
 /** 到期时间;1 自定义 -1 永久 */
 expireDate:Date 
 /** 组织资源表id(风筝线) */
 orgAddonId:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceDeleteCustomerAddonResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

export const AirserviceAddCustomerAddonFetch = (params:AirserviceDeleteCustomerAddonResponseModel) => 
	fetchRequest<AirserviceDeleteCustomerAddonResponseModel>(AIRSERVICE_DELETE_CUSTOMERADDON,{method: 'POST', body: params});



/**CustomerAddon修改*/
const AIRSERVICE_EDIT_CUSTOMERADDON = '/Airservice/editCustomerAddon';

/**请求model*/
export interface AirserviceEditCustomerAddonRequestModel {
/** 主键 */
 customerAddonId:number
 /** 客户id */
 cid:number
 /** 资源包名称 */
 addonName:String 
 /** 资源包类型： 1.im语音通话, 2.stream单兵推流, 3.storage云存储4.device数 */
 addonType:number
 /** 资源包容量 */
 addonCapacity:BigDecimal 
 /** 资源包来源 1套餐默认资源包 2附加的资源包 */
 fromType:number
 /** 是否有效 1有效 0无效 -1长期 */
 valid:Short 
 /** 到期时间;1 自定义 -1 永久 */
 expireDate:Date 
 /** 组织资源表id(风筝线) */
 orgAddonId:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }

/**返回model*/
export interface AirserviceEditCustomerAddonResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}


export const AirserviceEditCustomerAddonFetch = (params:AirserviceEditCustomerAddonResponseModel) => 
	fetchRequest<AirserviceEditCustomerAddonResponseModel>(AIRSERVICE_EDIT_CUSTOMERADDON,{method: 'POST', body: params});



/**查询*/
const AIRSERVICE_FIND_CUSTOMERADDON = '/Airservice/findCustomerAddon';


/**请求model*/
export interface AirservicefindCustomerAddonRequestModel {
/** 主键 */
 customerAddonId:number
 /** 客户id */
 cid:number
 /** 资源包名称 */
 addonName:String 
 /** 资源包类型： 1.im语音通话, 2.stream单兵推流, 3.storage云存储4.device数 */
 addonType:number
 /** 资源包容量 */
 addonCapacity:BigDecimal 
 /** 资源包来源 1套餐默认资源包 2附加的资源包 */
 fromType:number
 /** 是否有效 1有效 0无效 -1长期 */
 valid:Short 
 /** 到期时间;1 自定义 -1 永久 */
 expireDate:Date 
 /** 组织资源表id(风筝线) */
 orgAddonId:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirservicefindCustomerAddonResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicefindCustomerAddonDataModel;
}

/**dataModel*/
export interface AirservicefindCustomerAddonDataModel {
/** 主键 */
 customerAddonId:number
 /** 客户id */
 cid:number
 /** 资源包名称 */
 addonName:String 
 /** 资源包类型： 1.im语音通话, 2.stream单兵推流, 3.storage云存储4.device数 */
 addonType:number
 /** 资源包容量 */
 addonCapacity:BigDecimal 
 /** 资源包来源 1套餐默认资源包 2附加的资源包 */
 fromType:number
 /** 是否有效 1有效 0无效 -1长期 */
 valid:Short 
 /** 到期时间;1 自定义 -1 永久 */
 expireDate:Date 
 /** 组织资源表id(风筝线) */
 orgAddonId:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }

export const AirserviceFindCustomerAddonFetch = (params:AirserviceFindCustomerAddonResponseModel) => 
	fetchRequest<AirserviceFindCustomerAddonResponseModel>(AIRSERVICE_FIND_CUSTOMERADDON,{method: 'POST', body: params});


/**列表查询*/
const AIRSERVICE_CUSTOMERADDON_LIST = '/Airservice/CustomerAddonList';


/**请求model*/
export interface AirserviceCustomerAddonListRequestModel {
/** 主键 */
 customerAddonId:number
 /** 客户id */
 cid:number
 /** 资源包名称 */
 addonName:String 
 /** 资源包类型： 1.im语音通话, 2.stream单兵推流, 3.storage云存储4.device数 */
 addonType:number
 /** 资源包容量 */
 addonCapacity:BigDecimal 
 /** 资源包来源 1套餐默认资源包 2附加的资源包 */
 fromType:number
 /** 是否有效 1有效 0无效 -1长期 */
 valid:Short 
 /** 到期时间;1 自定义 -1 永久 */
 expireDate:Date 
 /** 组织资源表id(风筝线) */
 orgAddonId:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceCustomerAddonListResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirserviceCustomerAddonListDataModel;
}

/**dataModel*/
export interface AirserviceCustomerAddonListDataModel {
/** 主键 */
 customerAddonId:number
 /** 客户id */
 cid:number
 /** 资源包名称 */
 addonName:String 
 /** 资源包类型： 1.im语音通话, 2.stream单兵推流, 3.storage云存储4.device数 */
 addonType:number
 /** 资源包容量 */
 addonCapacity:BigDecimal 
 /** 资源包来源 1套餐默认资源包 2附加的资源包 */
 fromType:number
 /** 是否有效 1有效 0无效 -1长期 */
 valid:Short 
 /** 到期时间;1 自定义 -1 永久 */
 expireDate:Date 
 /** 组织资源表id(风筝线) */
 orgAddonId:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }


export const AirserviceCustomerAddonListFetch = (params:AirserviceCustomerAddonListResponseModel) => 
	fetchRequest<AirserviceCustomerAddonListResponseModel>(AIRSERVICE_CUSTOMERADDONList,{method: 'POST', body: params});





