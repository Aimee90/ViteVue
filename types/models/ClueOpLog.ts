/**ClueOpLog列表新增*/
const AIRSERVICE_ADD_CLUEOPLOG = '/Airservice/addClueOpLog';
/**请求model*/
export interface AirserviceAddClueOpLogRequestModel {
/** 操作日志id */
 operLogId:number;
 /** 操作描述 */
 operDesc:String 
 /** 客户id */
 cid:String 
 /** 客户名称 */
 customerName:String 
 /** 手机号（账号） */
 mobile:String 
 /** 创建人id */
 creatorSuid:number;
 /** 创建人名称 */
 creatorName:String 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceAddClueOpLogResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

const AirserviceAddClueOpLogFetch = (params:AirserviceAddClueOpLogResponseModel) => 
	fetchRequest<AirserviceAddClueOpLogResponseModel>(AIRSERVICE_ADD_CLUEOPLOG,{method: 'POST', body: params});

/**ClueOpLog列表删除*/
export const AIRSERVICE_DELETE_CLUEOPLOG = '/Airservice/deleteClueOpLog';

/**请求model*/
export interface AirserviceDeleteClueOpLogRequestModel {
/** 操作日志id */
 operLogId:number
 /** 操作描述 */
 operDesc:String 
 /** 客户id */
 cid:String 
 /** 客户名称 */
 customerName:String 
 /** 手机号（账号） */
 mobile:String 
 /** 创建人id */
 creatorSuid:number
 /** 创建人名称 */
 creatorName:String 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceDeleteClueOpLogResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

export const AirserviceAddClueOpLogFetch = (params:AirserviceDeleteClueOpLogResponseModel) => 
	fetchRequest<AirserviceDeleteClueOpLogResponseModel>(AIRSERVICE_DELETE_CLUEOPLOG,{method: 'POST', body: params});



/**ClueOpLog修改*/
const AIRSERVICE_EDIT_CLUEOPLOG = '/Airservice/editClueOpLog';

/**请求model*/
export interface AirserviceEditClueOpLogRequestModel {
/** 操作日志id */
 operLogId:number
 /** 操作描述 */
 operDesc:String 
 /** 客户id */
 cid:String 
 /** 客户名称 */
 customerName:String 
 /** 手机号（账号） */
 mobile:String 
 /** 创建人id */
 creatorSuid:number
 /** 创建人名称 */
 creatorName:String 
 /** 创建时间 */
 createTime:Date 
 }

/**返回model*/
export interface AirserviceEditClueOpLogResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}


export const AirserviceEditClueOpLogFetch = (params:AirserviceEditClueOpLogResponseModel) => 
	fetchRequest<AirserviceEditClueOpLogResponseModel>(AIRSERVICE_EDIT_CLUEOPLOG,{method: 'POST', body: params});



/**查询*/
const AIRSERVICE_FIND_CLUEOPLOG = '/Airservice/findClueOpLog';


/**请求model*/
export interface AirservicefindClueOpLogRequestModel {
/** 操作日志id */
 operLogId:number
 /** 操作描述 */
 operDesc:String 
 /** 客户id */
 cid:String 
 /** 客户名称 */
 customerName:String 
 /** 手机号（账号） */
 mobile:String 
 /** 创建人id */
 creatorSuid:number
 /** 创建人名称 */
 creatorName:String 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirservicefindClueOpLogResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicefindClueOpLogDataModel;
}

/**dataModel*/
export interface AirservicefindClueOpLogDataModel {
/** 操作日志id */
 operLogId:number
 /** 操作描述 */
 operDesc:String 
 /** 客户id */
 cid:String 
 /** 客户名称 */
 customerName:String 
 /** 手机号（账号） */
 mobile:String 
 /** 创建人id */
 creatorSuid:number
 /** 创建人名称 */
 creatorName:String 
 /** 创建时间 */
 createTime:Date 
 }

export const AirserviceFindClueOpLogFetch = (params:AirserviceFindClueOpLogResponseModel) => 
	fetchRequest<AirserviceFindClueOpLogResponseModel>(AIRSERVICE_FIND_CLUEOPLOG,{method: 'POST', body: params});


/**列表查询*/
const AIRSERVICE_CLUEOPLOG_LIST = '/Airservice/ClueOpLogList';


/**请求model*/
export interface AirserviceClueOpLogListRequestModel {
/** 操作日志id */
 operLogId:number
 /** 操作描述 */
 operDesc:String 
 /** 客户id */
 cid:String 
 /** 客户名称 */
 customerName:String 
 /** 手机号（账号） */
 mobile:String 
 /** 创建人id */
 creatorSuid:number
 /** 创建人名称 */
 creatorName:String 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceClueOpLogListResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirserviceClueOpLogListDataModel;
}

/**dataModel*/
export interface AirserviceClueOpLogListDataModel {
/** 操作日志id */
 operLogId:number
 /** 操作描述 */
 operDesc:String 
 /** 客户id */
 cid:String 
 /** 客户名称 */
 customerName:String 
 /** 手机号（账号） */
 mobile:String 
 /** 创建人id */
 creatorSuid:number
 /** 创建人名称 */
 creatorName:String 
 /** 创建时间 */
 createTime:Date 
 }


export const AirserviceClueOpLogListFetch = (params:AirserviceClueOpLogListResponseModel) => 
	fetchRequest<AirserviceClueOpLogListResponseModel>(AIRSERVICE_CLUEOPLOGList,{method: 'POST', body: params});





