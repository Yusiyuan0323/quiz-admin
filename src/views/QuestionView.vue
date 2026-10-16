<template>
  <div class="question-view">
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
              class="sidebar-menu-item"
              @click="$router.push('/user')"
            >用户管理</li>
            <li
              class="sidebar-menu-item active"
              @click="$router.push('/question')"
            >题目管理</li>
          </ul>
        </div>
      </aside>

      <!-- 右侧内容区 -->
      <main class="content-area">
        <!-- 搜索栏 -->
        <div class="search-bar">
          <span class="search-label">题目</span>
          <el-input
            v-model="searchKeyword"
            placeholder="题目关键词"
            class="search-input"
          ></el-input>
          <el-button type="success" class="btn-query">查询题目</el-button>
          <el-button type="success" class="btn-add" @click="addDialogVisible = true">添加题目</el-button>
        </div>

        <!-- 题目表格 -->
        <el-table
          :data="questionList"
          class="question-table"
          header-class-name="table-header"
        >
          <el-table-column prop="index" label="序号" width="80"></el-table-column>
          <el-table-column prop="question" label="问题"></el-table-column>
          <el-table-column prop="options" label="选项"></el-table-column>
          <el-table-column prop="answer" label="答案"></el-table-column>
          <el-table-column label="操作" width="180">
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

    <!-- 添加题目弹窗 -->
    <el-dialog
      title="添加题目"
      :visible.sync="addDialogVisible"
      width="500px"
    >
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="问题">
          <el-input v-model="addForm.question" placeholder="请输入题目问题"></el-input>
        </el-form-item>
        <el-form-item label="选项">
          <el-input v-model="addForm.options" placeholder="请输入选项，用逗号分隔"></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <el-input v-model="addForm.answer" placeholder="请输入正确答案"></el-input>
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
  name: 'QuestionView',
  data() {
    return {
      searchKeyword: '',
      currentPage: 1,
      addDialogVisible: false,
      addForm: {
        question: '',
        options: '',
        answer: ''
      },
      questionList: [
        { index: 1, question: '法国的首都是什么？', options: '巴黎,巴黎,巴黎,巴黎', answer: '巴黎' },
        { index: 1, question: '法国的首都是什么？', options: '巴黎,巴黎,巴黎,巴黎', answer: '巴黎' },
        { index: 1, question: '法国的首都是什么？', options: '巴黎,巴黎,巴黎,巴黎', answer: '巴黎' },
        { index: 1, question: '法国的首都是什么？', options: '巴黎,巴黎,巴黎,巴黎', answer: '巴黎' },
        { index: 1, question: '法国的首都是什么？', options: '巴黎,巴黎,巴黎,巴黎', answer: '巴黎' }
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
.question-view {
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
  background-color: #67c23a;
  border-color: #67c23a;
}
.btn-add {
  background-color: #67c23a;
  border-color: #67c23a;
}

/* 表格 */
.question-table {
  width: 100%;
}
.table-header {
  background-color: #f5f7fa !important;
  color: #606266 !important;
  font-weight: 600;
}

/* 分页 */
.pagination-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
}
</style>
