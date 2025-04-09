# 前端必备

## 环境

新手可以直接安装最新版本的 Node，有工作项目经验的建议安装 Nvm 或 n 这种 Node 版本管理工具，这样可以在不同项目之间切换 Node 版本，避免出现兼容性问题。

### Nvm

### 安装 Nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

### 使用

```bash
# 查看nvm安装路径
nvm root
# 查看nvm安装路径
nvm path
# 查看当前安装的node版本列表
nvm ls
# 查看当前安装的nvm版本
nvm -v
# 下载指定node版本
nvm install xx.xx
# 切换node版本
nvm use xx.xx
# 查看当前安装的node版本
node -v
```

### 安装其他依赖包工具

```bash

# 安装 yarn
npm install -g yarn
# 安装 pnpm
npm install -g pnpm
```

### 安装 git

### 安装

```bash
# 查看npm配置
git config --list
npm config --list
npm config --global --list
# 查看镜像源地址
npm config get registry
# 淘宝镜像源地址
npm config set registry https://registry.npmmirror.com
# windows
https://git-scm.com/download/win
# mac
https://git-scm.com/download/mac
# 查看git版本
git --version
# 设置用户名
git config --g user.name 'xxx'
# 设置邮箱
git config --g user.email 'xxx'
# 查看git配置
git config --list
# 设置代理 上传github 端口号不一致需要设置
git config --g http.proxy 127.0.0.1:xxxx
```

### 使用

### 远程仓库

```bash
# 添加远程仓库
git remote add origin https://github.com/xxx/xxx.git
# 拉取远程仓库
git clone https://github.com/xxx/xxx.git
# 查看本地变更
git status
# 添加本地变更
git add .
# 提交本地变更
git commit -m 'xxx'
# 推送远程仓库
git push -u origin master
```

### 安装

corepack enable --all

Set-ExecutionPolicy RemoteSigned -Force

Get-ExecutionPolicy

echo $NVM_HOME
