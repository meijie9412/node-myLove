'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async findUser(userID) {
    // 查找用户
    const userData = await this.app.mysql.get('user', { id: userID });
    return { userData };
  }
  async addUser() {
    // 添加用户
    const addResult = await this.app.mysql.insert('user', { id: 0, name: 'meijie' });
    return addResult;
  }
}

module.exports = HomeService;
