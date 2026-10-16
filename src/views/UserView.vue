<template>
  <div class="user-view">
    <!-- 顶部标题栏 -->
    <div class="header-bar">
      <h1 class="page-title">Quiz后台管理</h1>
    </div>

    <div class="main-wrapper">
      <!-- 左侧侧边栏 -->
      <aside class="sidebar">
        <div class="sidebar-menu-group">
          <div class="sidebar-menu-title">
            <i class="el-icon-message"></i>
            <span>系统信息管理</span>
            <i class="el-icon-arrow-down arrow-icon"></i>
          </div>
          <ul class="sidebar-menu-list">
            <li
              class="sidebar-menu-item active"
              @click="$router.push('/user')"
            >用户管理</li>
            <li
              class="sidebar-menu-item"
              @click="$router.push('/question')"
            >题目管理</li>
          </ul>
        </div>
      </aside>

      <!-- 右侧内容区 -->
      <main class="content-area">
        <!-- 搜索栏 -->
        <div class="search-bar">
          <span class="search-label">用户名</span>
          <el-input
            v-model="searchKeyword"
            placeholder="用户名"
            class="search-input"
          ></el-input>
          <el-button type="primary" class="btn-query">查询用户</el-button>
          <el-button type="success" class="btn-add" @click="addDialogVisible = true">添加用户</el-button>
        </div>

        <!-- 用户表格 -->
        <el-table
          :data="userList"
          class="user-table"
          header-class-name="table-header"
        >
          <el-table-column prop="date" label="日期">
            <template slot-scope="scope">
              <i class="el-icon-time date-icon"></i>
              <span>{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="username" label="用户名">
            <template slot-scope="scope">
              <span class="username-link">{{ scope.row.username }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="password" label="密码">
            <template slot-scope="scope">
              <span>{{ scope.row.password }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small" class="btn-edit">编辑</el-button>
              <el-button size="small" type="danger" class="btn-delete">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="pagination-wrapper">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
            :current-page="currentPage"
            @current-change="handlePageChange"
          ></el-pagination>
        </div>
      </main>
    </div>

    <!-- 添加用户弹窗 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="400px"
    >
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="addForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  data() {
    return {
      searchKeyword: '',
      currentPage: 1,
      addDialogVisible: false,
      addForm: {
        username: '',
        password: ''
      },
      userList: [
        { date: '2016-05-02', username: '王小虎', password: '123456' },
        { date: '2016-05-04', username: '王小虎', password: '123456' },
        { date: '2016-05-01', username: '王小虎', password: '123456' },
        { date: '2016-05-03', username: '王小虎', password: '123456' }
      ]
    }
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page
    }
  }
}
</script>

<style scoped>
.user-view {
  min-height: 100vh;
  background-color: #f5f7fa;
}

/* 顶部标题栏 */
.header-bar {
  background-color: #f0f2f5;
  padding: 16px 24px;
  border-bottom: 1px solid #e4e7ed;
}
.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #303133;
  margin: 0;
}

/* 主区域 */
.main-wrapper {
  display: flex;
  min-height: calc(100vh - 64px);
}

/* 左侧侧边栏 */
.sidebar {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #e4e7ed;
  padding-top: 16px;
}
.sidebar-menu-group {
  width: 100%;
}
.sidebar-menu-title {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
}
.sidebar-menu-title .el-icon-message {
  margin-right: 8px;
  font-size: 16px;
}
.arrow-icon {
  margin-left: auto;
  font-size: 12px;
}
.sidebar-menu-list {
  list-style: none;
  margin-top: 8px;
}
.sidebar-menu-item {
  padding: 12px 20px 12px 40px;
  font-size: 14px;
  color: #722ed1;
  cursor: pointer;
  transition: background-color 0.2s;
}
.sidebar-menu-item:hover {
  background-color: #f5f7fa;
}
.sidebar-menu-item.active {
  background-color: #ecf5ff;
}

/* 右侧内容区 */
.content-area {
  flex: 1;
  padding: 24px;
  background-color: #fff;
}

/* 搜索栏 */
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 12px;
}
.search-label {
  font-size: 14px;
  color: #606266;
}
.search-input {
  width: 200px;
}
.btn-query {
  background-color: #409eff;
  border-color: #409eff;
}
.btn-add {
  background-color: #67c23a;
  border-color: #67c23a;
}

/* 表格 */
.user-table {
  width: 100%;
}
.table-header {
  background-color: #f5f7fa !important;
  color: #606266 !important;
  font-weight: 600;
}
.date-icon {
  margin-right: 6px;
  color: #909399;
}
.username-link {
  color: #409eff;
}
.btn-edit {
  margin-right: 8px;
}

/* 分页 */
.pagination-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
}
</style>
