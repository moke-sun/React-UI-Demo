import xhr from './xhr/'

/**
 * 对应后端涉及到用户认证的 API
 */
class WorkerService {

  getList (keyword, skip, limit) {
    return xhr({ url: '/api/list?keyword=' + keyword + '&skip=' + skip + '&limit=' + limit })
  }

  getDetails (id) {
    return xhr({ url: '/api/details?id=' + id })
  }

}

// 实例化后再导出
export default new WorkerService()
