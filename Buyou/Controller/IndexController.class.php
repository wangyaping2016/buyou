<?php

namespace Buyou\Controller;
use Common\Controller\AppBaseController;
/**
 * 首页
 */
class IndexController extends AppBaseController {
	
    //首页
	public function index() {
        $this->display();
    }

    // 登录
    public function login(){
        $this->display(':login');
    }

    // 个人中心
    public function center(){
        $this->display(':center');
    }
}