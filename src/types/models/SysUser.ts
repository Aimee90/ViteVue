/**SysUser列表新增*/
const AIRSERVICE_ADD_SYSUSER = '/Airservice/addSysUser';
/**请求model*/
export interface AirserviceAddSysUserRequestModel {
/** 用户id */
 suid:number;
 /** 用户账号 */
 userName:String 
 /** 手机号 */
 mobile:String 
 /** 密码 */
 password:String 
 /** 盐值 */
 salt:String 
 /** 帐号状态（1正常 0停用) */
 status:Short 
 /** 用户备注 */
 remark:String 
 /** 角色类型;1 管理员 2普通用户 */
 roleType:Short 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceAddSysUserResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

const AirserviceAddSysUserFetch = (params:AirserviceAddSysUserResponseModel) => 
	fetchRequest<AirserviceAddSysUserResponseModel>(AIRSERVICE_ADD_SYSUSER,{method: 'POST', body: params});

/**SysUser列表删除*/
export const AIRSERVICE_DELETE_SYSUSER = '/Airservice/deleteSysUser';

/**请求model*/
export interface AirserviceDeleteSysUserRequestModel {
/** 用户id */
 suid:number
 /** 用户账号 */
 userName:String 
 /** 手机号 */
 mobile:String 
 /** 密码 */
 password:String 
 /** 盐值 */
 salt:String 
 /** 帐号状态（1正常 0停用) */
 status:Short 
 /** 用户备注 */
 remark:String 
 /** 角色类型;1 管理员 2普通用户 */
 roleType:Short 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceDeleteSysUserResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}

export const AirserviceAddSysUserFetch = (params:AirserviceDeleteSysUserResponseModel) => 
	fetchRequest<AirserviceDeleteSysUserResponseModel>(AIRSERVICE_DELETE_SYSUSER,{method: 'POST', body: params});



/**SysUser修改*/
const AIRSERVICE_EDIT_SYSUSER = '/Airservice/editSysUser';

/**请求model*/
export interface AirserviceEditSysUserRequestModel {
/** 用户id */
 suid:number
 /** 用户账号 */
 userName:String 
 /** 手机号 */
 mobile:String 
 /** 密码 */
 password:String 
 /** 盐值 */
 salt:String 
 /** 帐号状态（1正常 0停用) */
 status:Short 
 /** 用户备注 */
 remark:String 
 /** 角色类型;1 管理员 2普通用户 */
 roleType:Short 
 /** 创建时间 */
 createTime:Date 
 }

/**返回model*/
export interface AirserviceEditSysUserResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: null;
}


export const AirserviceEditSysUserFetch = (params:AirserviceEditSysUserResponseModel) => 
	fetchRequest<AirserviceEditSysUserResponseModel>(AIRSERVICE_EDIT_SYSUSER,{method: 'POST', body: params});



/**查询*/
const AIRSERVICE_FIND_SYSUSER = '/Airservice/findSysUser';


/**请求model*/
export interface AirservicefindSysUserRequestModel {
/** 用户id */
 suid:number
 /** 用户账号 */
 userName:String 
 /** 手机号 */
 mobile:String 
 /** 密码 */
 password:String 
 /** 盐值 */
 salt:String 
 /** 帐号状态（1正常 0停用) */
 status:Short 
 /** 用户备注 */
 remark:String 
 /** 角色类型;1 管理员 2普通用户 */
 roleType:Short 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirservicefindSysUserResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirservicefindSysUserDataModel;
}

/**dataModel*/
export interface AirservicefindSysUserDataModel {
/** 用户id */
 suid:number
 /** 用户账号 */
 userName:String 
 /** 手机号 */
 mobile:String 
 /** 密码 */
 password:String 
 /** 盐值 */
 salt:String 
 /** 帐号状态（1正常 0停用) */
 status:Short 
 /** 用户备注 */
 remark:String 
 /** 角色类型;1 管理员 2普通用户 */
 roleType:Short 
 /** 创建时间 */
 createTime:Date 
 }

export const AirserviceFindSysUserFetch = (params:AirserviceFindSysUserResponseModel) => 
	fetchRequest<AirserviceFindSysUserResponseModel>(AIRSERVICE_FIND_SYSUSER,{method: 'POST', body: params});


/**列表查询*/
const AIRSERVICE_SYSUSER_LIST = '/Airservice/SysUserList';


/**请求model*/
export interface AirserviceSysUserListRequestModel {
/** 用户id */
 suid:number
 /** 用户账号 */
 userName:String 
 /** 手机号 */
 mobile:String 
 /** 密码 */
 password:String 
 /** 盐值 */
 salt:String 
 /** 帐号状态（1正常 0停用) */
 status:Short 
 /** 用户备注 */
 remark:String 
 /** 角色类型;1 管理员 2普通用户 */
 roleType:Short 
 /** 创建时间 */
 createTime:Date 
 }
/**返回model*/
export interface AirserviceSysUserListResponseModel {
   code: number,
   message: string,
   success: boolean,
   data: AirserviceSysUserListDataModel;
}

/**dataModel*/
export interface AirserviceSysUserListDataModel {
/** 用户id */
 suid:number
 /** 用户账号 */
 userName:String 
 /** 手机号 */
 mobile:String 
 /** 密码 */
 password:String 
 /** 盐值 */
 salt:String 
 /** 帐号状态（1正常 0停用) */
 status:Short 
 /** 用户备注 */
 remark:String 
 /** 角色类型;1 管理员 2普通用户 */
 roleType:Short 
 /** 创建时间 */
 createTime:Date 
 }


export const AirserviceSysUserListFetch = (params:AirserviceSysUserListResponseModel) => 
	fetchRequest<AirserviceSysUserListResponseModel>(AIRSERVICE_SYSUSERList,{method: 'POST', body: params});





