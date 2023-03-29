/**PriCustomer列表新增*/
const AIRSERVICE_ADD_PRICUSTOMER = '/Airservice/addPriCustomer';
/**请求model*/
export interface AirserviceAddPriCustomerRequestModel {
/** 主键 */
 priCid:number;
 /** 组织名称 */
 orgName:String 
 /** 客户名称 */
 customerName:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 行业 */
 industry:Short 
 /** 跟进人id */
 suid:number;
 /** 跟进人名称 */
 sysUserName:String 
 /** 新增备注 */
 remark:String 
 /** 维保开始时间 */
 maintainStartDate:Date 
 /** 维保结束时间 */
 maintainEndDate:Date 
 /** 客户机器ip */
 customerIp:String 
 /** 创建人id */
 creatorUid:number;
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorUid:number;
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirserviceAddPriCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

const AirserviceAddPriCustomerFetch = (params:AirserviceAddPriCustomerResponseModel) => 
	fetchRequest<AirserviceAddPriCustomerResponseModel>(AIRSERVICE_ADD_PRICUSTOMER,{method: 'POST', body: params});

/**PriCustomer列表删除*/
export const AIRSERVICE_DELETE_PRICUSTOMER = '/Airservice/deletePriCustomer';

/**请求model*/
export interface AirserviceDeletePriCustomerRequestModel {
/** 主键 */
 priCid:number
 /** 组织名称 */
 orgName:String 
 /** 客户名称 */
 customerName:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 行业 */
 industry:Short 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 sysUserName:String 
 /** 新增备注 */
 remark:String 
 /** 维保开始时间 */
 maintainStartDate:Date 
 /** 维保结束时间 */
 maintainEndDate:Date 
 /** 客户机器ip */
 customerIp:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorUid:number
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirserviceDeletePriCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

export const AirserviceAddPriCustomerFetch = (params:AirserviceDeletePriCustomerResponseModel) => 
	fetchRequest<AirserviceDeletePriCustomerResponseModel>(AIRSERVICE_DELETE_PRICUSTOMER,{method: 'POST', body: params});



/**PriCustomer修改*/
const AIRSERVICE_EDIT_PRICUSTOMER = '/Airservice/editPriCustomer';

/**请求model*/
export interface AirserviceEditPriCustomerRequestModel {
/** 主键 */
 priCid:number
 /** 组织名称 */
 orgName:String 
 /** 客户名称 */
 customerName:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 行业 */
 industry:Short 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 sysUserName:String 
 /** 新增备注 */
 remark:String 
 /** 维保开始时间 */
 maintainStartDate:Date 
 /** 维保结束时间 */
 maintainEndDate:Date 
 /** 客户机器ip */
 customerIp:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorUid:number
 /** 更新时间 */
 updateTime:Date 
 }

/**返回model*/
export interface AirserviceEditPriCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}


export const AirserviceEditPriCustomerFetch = (params:AirserviceEditPriCustomerResponseModel) => 
	fetchRequest<AirserviceEditPriCustomerResponseModel>(AIRSERVICE_EDIT_PRICUSTOMER,{method: 'POST', body: params});



/**查询*/
const AIRSERVICE_FIND_PRICUSTOMER = '/Airservice/findPriCustomer';


/**请求model*/
export interface AirservicefindPriCustomerRequestModel {
/** 主键 */
 priCid:number
 /** 组织名称 */
 orgName:String 
 /** 客户名称 */
 customerName:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 行业 */
 industry:Short 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 sysUserName:String 
 /** 新增备注 */
 remark:String 
 /** 维保开始时间 */
 maintainStartDate:Date 
 /** 维保结束时间 */
 maintainEndDate:Date 
 /** 客户机器ip */
 customerIp:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorUid:number
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirservicefindPriCustomerResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicefindPriCustomerDataModel;
}

/**dataModel*/
export interface AirservicefindPriCustomerDataModel {
/** 主键 */
 priCid:number
 /** 组织名称 */
 orgName:String 
 /** 客户名称 */
 customerName:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 行业 */
 industry:Short 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 sysUserName:String 
 /** 新增备注 */
 remark:String 
 /** 维保开始时间 */
 maintainStartDate:Date 
 /** 维保结束时间 */
 maintainEndDate:Date 
 /** 客户机器ip */
 customerIp:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorUid:number
 /** 更新时间 */
 updateTime:Date 
 }

export const AirserviceFindPriCustomerFetch = (params:AirserviceFindPriCustomerResponseModel) => 
	fetchRequest<AirserviceFindPriCustomerResponseModel>(AIRSERVICE_FIND_PRICUSTOMER,{method: 'POST', body: params});


/**列表查询*/
const AIRSERVICE_PRICUSTOMER_LIST = '/Airservice/PriCustomerList';


/**请求model*/
export interface AirservicePriCustomerListRequestModel {
/** 主键 */
 priCid:number
 /** 组织名称 */
 orgName:String 
 /** 客户名称 */
 customerName:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 行业 */
 industry:Short 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 sysUserName:String 
 /** 新增备注 */
 remark:String 
 /** 维保开始时间 */
 maintainStartDate:Date 
 /** 维保结束时间 */
 maintainEndDate:Date 
 /** 客户机器ip */
 customerIp:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorUid:number
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface AirservicePriCustomerListResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicePriCustomerListDataModel;
}

/**dataModel*/
export interface AirservicePriCustomerListDataModel {
/** 主键 */
 priCid:number
 /** 组织名称 */
 orgName:String 
 /** 客户名称 */
 customerName:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 行业 */
 industry:Short 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 sysUserName:String 
 /** 新增备注 */
 remark:String 
 /** 维保开始时间 */
 maintainStartDate:Date 
 /** 维保结束时间 */
 maintainEndDate:Date 
 /** 客户机器ip */
 customerIp:String 
 /** 创建人id */
 creatorUid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorUid:number
 /** 更新时间 */
 updateTime:Date 
 }


export const AirservicePriCustomerListFetch = (params:AirservicePriCustomerListResponseModel) => 
	fetchRequest<AirservicePriCustomerListResponseModel>(AIRSERVICE_PRICUSTOMERList,{method: 'POST', body: params});





