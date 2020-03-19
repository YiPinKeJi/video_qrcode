import {get, post} from '@/axios';

/**
 * 社会单位
 */
//查询检查项大类集合
export const getVideoList = (queryParams) => get('healthbaby/resource/account/admin', queryParams);
