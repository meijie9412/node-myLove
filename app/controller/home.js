'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userID = 0;
    const userInfo = await ctx.service.home.findUser(userID);
    ctx.body = JSON.stringify(userInfo);
  }
}

module.exports = HomeController;
