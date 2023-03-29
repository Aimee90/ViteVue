/**PubCustomer列表新增*/
const AIRSERVICE_ADD_PUBCUSTOMER = '/Airservice/addPubCustomer';
/**请求model*/
export interface AirserviceAddPubCustomerRequestModel {
/** 主键 */
 pubCid:number;
 /** 用户id */
 uid:String 
 /** 组织id */
 oid:String 
 /** 线索id */
 clueId:number;
 /** 创建人id */
 creatorUid:number;
 /** 创建时间 */
 createTime:Date 
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirserviceAddPubCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

const AirserviceAddPubCustomerFetch = (params:AirserviceAddPubCustomerResponseModel) => 
	fetchRequest<AirserviceAddPubCustomerResponseModel>(AIRSERVICE_ADD_PUBCUSTOMER,{method: 'POST', body: params});

/**PubCustomer列表删除*/
export const AIRSERVICE_DELETE_PUBCUSTOMER = '/Airservice/deletePubCustomer';

/**请求model*/
export interface AirserviceDeletePubCustomerRequestModel {
/** 主键 */
 pubCid:number
 /** 用户id */
 uid:String 
 /** 组织id */
 oid:String 
 /** 线索id */
 clueId:number
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirserviceDeletePubCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

export const AirserviceAddPubCustomerFetch = (params:AirserviceDeletePubCustomerResponseModel) => 
	fetchRequest<AirserviceDeletePubCustomerResponseModel>(AIRSERVICE_DELETE_PUBCUSTOMER,{method: 'POST', body: params});



/**PubCustomer修改*/
const AIRSERVICE_EDIT_PUBCUSTOMER = '/Airservice/editPubCustomer';

/**请求model*/
export interface AirserviceEditPubCustomerRequestModel {
/** 主键 */
 pubCid:number
 /** 用户id */
 uid:String 
 /** 组织id */
 oid:String 
 /** 线索id */
 clueId:number
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新时间 */
 updateTime:Date 
 }

/**返回model*/
export interface AirserviceEditPubCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}


export const AirserviceEditPubCustomerFetch = (params:AirserviceEditPubCustomerResponseModel) => 
	fetchRequest<AirserviceEditPubCustomerResponseModel>(AIRSERVICE_EDIT_PUBCUSTOMER,{method: 'POST', body: params});



/**查询*/
const AIRSERVICE_FIND_PUBCUSTOMER = '/Airservice/findPubCustomer';


/**请求model*/
export interface AirservicefindPubCustomerRequestModel {
/** 主键 */
 pubCid:number
 /** 用户id */
 uid:String 
 /** 组织id */
 oid:String 
 /** 线索id */
 clueId:number
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirservicefindPubCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicefindPubCustomerDataModel;
}

/**dataModel*/
export interface AirservicefindPubCustomerDataModel {
/** 主键 */
 pubCid:number
 /** 用户id */
 uid:String 
 /** 组织id */
 oid:String 
 /** 线索id */
 clueId:number
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新时间 */
 updateTime:Date 
 }

export const AirserviceFindPubCustomerFetch = (params:AirserviceFindPubCustomerResponseModel) => 
	fetchRequest<AirserviceFindPubCustomerResponseModel>(AIRSERVICE_FIND_PUBCUSTOMER,{method: 'POST', body: params});


/**列表查询*/
const AIRSERVICE_PUBCUSTOMER_LIST = '/Airservice/PubCustomerList';


/**请求model*/
export interface AirservicePubCustomerListRequestModel {
/** 主键 */
 pubCid:number
 /** 用户id */
 uid:String 
 /** 组织id */
 oid:String 
 /** 线索id */
 clueId:number
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirservicePubCustomerListResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicePubCustomerListDataModel;
}

/**dataModel*/
export interface AirservicePubCustomerListDataModel {
/** 主键 */
 pubCid:number
 /** 用户id */
 uid:String 
 /** 组织id */
 oid:String 
 /** 线索id */
 clueId:number
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新时间 */
 updateTime:Date 
 }


export const AirservicePubCustomerListFetch = (params:AirservicePubCustomerListResponseModel) => 
	fetchRequest<AirservicePubCustomerListResponseModel>(AIRSERVICE_PUBCUSTOMERList,{method: 'POST', body: params});





