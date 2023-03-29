/**Clue列表新增*/
const _ADD_CLUE = '//addClue';
/**请求model*/
export interface AddClueRequestModel {
/** 线索id */
 clueId:number;
 /** 手机号（账号） */
 mobile:String; 
 /** 客户名称 */
 customerName:String; 
 /** 联系方式 */
 contactInfo:String; 
 /** 职务 */
 job:String; 
 /** 公司 */
 company:String; 
 /** 地区码 */
 areaCode:String; 
 /** 地区 */
 area:String; 
 /** 详细地址 */
 address:String; 
 /** 行业 */
 industry:number;
 /** 线索来源 */
 source:number;
 /** 客户意向 */
 intention:String; 
 /** 跟进人id */
 suid:number;
 /** 跟进人名称 */
 userName:String; 
 /** 线索状态;0 已申请 1已转化客户 2套餐已分配 */
 clueStatus:number;
 /** 新增备注 */
 remark:String; 
 /** 是否作废(1 使用 2作废) */
 isDeleted:number;
 /** 创建人id */
 creatorSuid:number;
 /** 创建时间 */
 createTime:Date; 
 /** 更新人id */
 updatorSuid:number;
 /** 更新时间 */
 updateTime:Date; 
 }
/**返回model*/
export interface AddClueResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

const AddClueFetch = (params:AddClueResponseModel) => 
	fetchRequest<AddClueResponseModel>(_ADD_CLUE,{method: 'POST', body: params});

/**Clue列表删除*/
export const _DELETE_CLUE = '//deleteClue';

/**请求model*/
export interface DeleteClueRequestModel {
/** 线索id */
 clueId:number
 /** 手机号（账号） */
 mobile:String 
 /** 客户名称 */
 customerName:String 
 /** 联系方式 */
 contactInfo:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 详细地址 */
 address:String 
 /** 行业 */
 industry:Short 
 /** 线索来源 */
 source:Short 
 /** 客户意向 */
 intention:String 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 userName:String 
 /** 线索状态;0 已申请 1已转化客户 2套餐已分配 */
 clueStatus:Short 
 /** 新增备注 */
 remark:String 
 /** 是否作废(1 使用 2作废) */
 isDeleted:Short 
 /** 创建人id */
 creatorSuid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorSuid:number
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface DeleteClueResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

export const AddClueFetch = (params:DeleteClueResponseModel) => 
	fetchRequest<DeleteClueResponseModel>(_DELETE_CLUE,{method: 'POST', body: params});



/**Clue修改*/
const _EDIT_CLUE = '//editClue';

/**请求model*/
export interface EditClueRequestModel {
/** 线索id */
 clueId:number
 /** 手机号（账号） */
 mobile:String 
 /** 客户名称 */
 customerName:String 
 /** 联系方式 */
 contactInfo:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 详细地址 */
 address:String 
 /** 行业 */
 industry:Short 
 /** 线索来源 */
 source:Short 
 /** 客户意向 */
 intention:String 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 userName:String 
 /** 线索状态;0 已申请 1已转化客户 2套餐已分配 */
 clueStatus:Short 
 /** 新增备注 */
 remark:String 
 /** 是否作废(1 使用 2作废) */
 isDeleted:Short 
 /** 创建人id */
 creatorSuid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorSuid:number
 /** 更新时间 */
 updateTime:Date 
 }

/**返回model*/
export interface EditClueResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}


export const EditClueFetch = (params:EditClueResponseModel) => 
	fetchRequest<EditClueResponseModel>(_EDIT_CLUE,{method: 'POST', body: params});



/**查询*/
const _FIND_CLUE = '//findClue';


/**请求model*/
export interface findClueRequestModel {
/** 线索id */
 clueId:number
 /** 手机号（账号） */
 mobile:String 
 /** 客户名称 */
 customerName:String 
 /** 联系方式 */
 contactInfo:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 详细地址 */
 address:String 
 /** 行业 */
 industry:Short 
 /** 线索来源 */
 source:Short 
 /** 客户意向 */
 intention:String 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 userName:String 
 /** 线索状态;0 已申请 1已转化客户 2套餐已分配 */
 clueStatus:Short 
 /** 新增备注 */
 remark:String 
 /** 是否作废(1 使用 2作废) */
 isDeleted:Short 
 /** 创建人id */
 creatorSuid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorSuid:number
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface findClueResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: findClueDataModel;
}

/**dataModel*/
export interface findClueDataModel {
/** 线索id */
 clueId:number
 /** 手机号（账号） */
 mobile:String 
 /** 客户名称 */
 customerName:String 
 /** 联系方式 */
 contactInfo:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 详细地址 */
 address:String 
 /** 行业 */
 industry:Short 
 /** 线索来源 */
 source:Short 
 /** 客户意向 */
 intention:String 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 userName:String 
 /** 线索状态;0 已申请 1已转化客户 2套餐已分配 */
 clueStatus:Short 
 /** 新增备注 */
 remark:String 
 /** 是否作废(1 使用 2作废) */
 isDeleted:Short 
 /** 创建人id */
 creatorSuid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorSuid:number
 /** 更新时间 */
 updateTime:Date 
 }

export const FindClueFetch = (params:FindClueResponseModel) => 
	fetchRequest<FindClueResponseModel>(_FIND_CLUE,{method: 'POST', body: params});


/**列表查询*/
const _CLUE_LIST = '//ClueList';


/**请求model*/
export interface ClueListRequestModel {
/** 线索id */
 clueId:number
 /** 手机号（账号） */
 mobile:String 
 /** 客户名称 */
 customerName:String 
 /** 联系方式 */
 contactInfo:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 详细地址 */
 address:String 
 /** 行业 */
 industry:Short 
 /** 线索来源 */
 source:Short 
 /** 客户意向 */
 intention:String 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 userName:String 
 /** 线索状态;0 已申请 1已转化客户 2套餐已分配 */
 clueStatus:Short 
 /** 新增备注 */
 remark:String 
 /** 是否作废(1 使用 2作废) */
 isDeleted:Short 
 /** 创建人id */
 creatorSuid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorSuid:number
 /** 更新时间 */
 updateTime:Date 
 }
/**返回model*/
export interface ClueListResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: ClueListDataModel;
}

/**dataModel*/
export interface ClueListDataModel {
/** 线索id */
 clueId:number
 /** 手机号（账号） */
 mobile:String 
 /** 客户名称 */
 customerName:String 
 /** 联系方式 */
 contactInfo:String 
 /** 职务 */
 job:String 
 /** 公司 */
 company:String 
 /** 地区码 */
 areaCode:String 
 /** 地区 */
 area:String 
 /** 详细地址 */
 address:String 
 /** 行业 */
 industry:Short 
 /** 线索来源 */
 source:Short 
 /** 客户意向 */
 intention:String 
 /** 跟进人id */
 suid:number
 /** 跟进人名称 */
 userName:String 
 /** 线索状态;0 已申请 1已转化客户 2套餐已分配 */
 clueStatus:Short 
 /** 新增备注 */
 remark:String 
 /** 是否作废(1 使用 2作废) */
 isDeleted:Short 
 /** 创建人id */
 creatorSuid:number
 /** 创建时间 */
 createTime:Date 
 /** 更新人id */
 updatorSuid:number
 /** 更新时间 */
 updateTime:Date 
 }


export const ClueListFetch = (params:ClueListResponseModel) => 
	fetchRequest<ClueListResponseModel>(_CLUEList,{method: 'POST', body: params});





