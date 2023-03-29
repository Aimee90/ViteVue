/**CustomerCombo列表新增*/
const AIRSERVICE_ADD_CUSTOMERCOMBO = '/Airservice/addCustomerCombo';
/**请求model*/
export interface AirserviceAddCustomerComboRequestModel {
/** 主键 */
 customerComboId:number;
 /** 客户id */
 cid:number;
 /** 套餐id */
 comboId:String 
 /** 套餐名称 */
 comboName:String 
 /** int */
 comboVersion:number;
 /** 到期时间 */
 expireDate:Date 
 /** 套餐内容 */
 comboContent:Map<String, Object> 
 /** 当前状态1可用 0不可（历史版本） */
 status:String 
 /** 创建人id */
 creatorUid:number;
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceAddCustomerComboResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

const AirserviceAddCustomerComboFetch = (params:AirserviceAddCustomerComboResponseModel) => 
	fetchRequest<AirserviceAddCustomerComboResponseModel>(AIRSERVICE_ADD_CUSTOMERCOMBO,{method: 'POST', body: params});

/**CustomerCombo列表删除*/
export const AIRSERVICE_DELETE_CUSTOMERCOMBO = '/Airservice/deleteCustomerCombo';

/**请求model*/
export interface AirserviceDeleteCustomerComboRequestModel {
/** 主键 */
 customerComboId:number
 /** 客户id */
 cid:number
 /** 套餐id */
 comboId:String 
 /** 套餐名称 */
 comboName:String 
 /** int */
 comboVersion:number
 /** 到期时间 */
 expireDate:Date 
 /** 套餐内容 */
 comboContent:Map<String, Object> 
 /** 当前状态1可用 0不可（历史版本） */
 status:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceDeleteCustomerComboResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

export const AirserviceAddCustomerComboFetch = (params:AirserviceDeleteCustomerComboResponseModel) => 
	fetchRequest<AirserviceDeleteCustomerComboResponseModel>(AIRSERVICE_DELETE_CUSTOMERCOMBO,{method: 'POST', body: params});



/**CustomerCombo修改*/
const AIRSERVICE_EDIT_CUSTOMERCOMBO = '/Airservice/editCustomerCombo';

/**请求model*/
export interface AirserviceEditCustomerComboRequestModel {
/** 主键 */
 customerComboId:number
 /** 客户id */
 cid:number
 /** 套餐id */
 comboId:String 
 /** 套餐名称 */
 comboName:String 
 /** int */
 comboVersion:number
 /** 到期时间 */
 expireDate:Date 
 /** 套餐内容 */
 comboContent:Map<String, Object> 
 /** 当前状态1可用 0不可（历史版本） */
 status:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }

/**返回model*/
export interface AirserviceEditCustomerComboResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}


export const AirserviceEditCustomerComboFetch = (params:AirserviceEditCustomerComboResponseModel) => 
	fetchRequest<AirserviceEditCustomerComboResponseModel>(AIRSERVICE_EDIT_CUSTOMERCOMBO,{method: 'POST', body: params});



/**查询*/
const AIRSERVICE_FIND_CUSTOMERCOMBO = '/Airservice/findCustomerCombo';


/**请求model*/
export interface AirservicefindCustomerComboRequestModel {
/** 主键 */
 customerComboId:number
 /** 客户id */
 cid:number
 /** 套餐id */
 comboId:String 
 /** 套餐名称 */
 comboName:String 
 /** int */
 comboVersion:number
 /** 到期时间 */
 expireDate:Date 
 /** 套餐内容 */
 comboContent:Map<String, Object> 
 /** 当前状态1可用 0不可（历史版本） */
 status:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirservicefindCustomerComboResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicefindCustomerComboDataModel;
}

/**dataModel*/
export interface AirservicefindCustomerComboDataModel {
/** 主键 */
 customerComboId:number
 /** 客户id */
 cid:number
 /** 套餐id */
 comboId:String 
 /** 套餐名称 */
 comboName:String 
 /** int */
 comboVersion:number
 /** 到期时间 */
 expireDate:Date 
 /** 套餐内容 */
 comboContent:Map<String, Object> 
 /** 当前状态1可用 0不可（历史版本） */
 status:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }

export const AirserviceFindCustomerComboFetch = (params:AirserviceFindCustomerComboResponseModel) => 
	fetchRequest<AirserviceFindCustomerComboResponseModel>(AIRSERVICE_FIND_CUSTOMERCOMBO,{method: 'POST', body: params});


/**列表查询*/
const AIRSERVICE_CUSTOMERCOMBO_LIST = '/Airservice/CustomerComboList';


/**请求model*/
export interface AirserviceCustomerComboListRequestModel {
/** 主键 */
 customerComboId:number
 /** 客户id */
 cid:number
 /** 套餐id */
 comboId:String 
 /** 套餐名称 */
 comboName:String 
 /** int */
 comboVersion:number
 /** 到期时间 */
 expireDate:Date 
 /** 套餐内容 */
 comboContent:Map<String, Object> 
 /** 当前状态1可用 0不可（历史版本） */
 status:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceCustomerComboListResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirserviceCustomerComboListDataModel;
}

/**dataModel*/
export interface AirserviceCustomerComboListDataModel {
/** 主键 */
 customerComboId:number
 /** 客户id */
 cid:number
 /** 套餐id */
 comboId:String 
 /** 套餐名称 */
 comboName:String 
 /** int */
 comboVersion:number
 /** 到期时间 */
 expireDate:Date 
 /** 套餐内容 */
 comboContent:Map<String, Object> 
 /** 当前状态1可用 0不可（历史版本） */
 status:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 }


export const AirserviceCustomerComboListFetch = (params:AirserviceCustomerComboListResponseModel) => 
	fetchRequest<AirserviceCustomerComboListResponseModel>(AIRSERVICE_CUSTOMERCOMBOList,{method: 'POST', body: params});





