import {get, post} from '@/axios';

/**
 * 社会单位
 */
//查询检查项大类集合
export const getVideoList = () => get('healthbaby/resource/account/admin', null);

export const getVideoListTest = () => get('healthbaby/resource/account/other', null);

export const getMaxOrder = () => get('healthbaby/maxorder', null);

export const addCountApi = () => post('healthbaby/resource/finish', null);
