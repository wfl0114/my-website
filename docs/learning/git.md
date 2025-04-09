![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021608.png)

## 关于版本控制

### 什么是版本控制(管理)

如果你用Microsoft Word写过长篇大论，那你一定有这样的经历：

想删除一个段落，又怕将来想恢复找不回来怎么办？有办法，先把当前文件“另存为……”一个新的Word文件，再接着改，改到一定程度，再“另存为……”一个新文件，这样一直改下去，最后你的Word文档变成了这样：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021632.jpeg)

过了一周，你想找回被删除的文字，但是已经记不清删除前保存在哪个文件里了，只好一个一个文件去找，真麻烦。

看着一堆乱七八糟的文件，想保留最新的一个，然后把其他的删掉，又怕哪天会用上，还不敢删，真郁闷。

更要命的是，有些部分需要你的财务同事帮助填写，于是你把文件Copy到U盘里给她（也可能通过Email发送一份给她），然后，你继续修改Word文件。一天后，同事再把Word文件传给你，此时，你必须想想，发给她之后到你收到她的文件期间，你作了哪些改动，得把你的改动和她的部分合并，真困难。

于是你想，如果有一个软件，不但能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以，岂不是很方便？

这个软件用起来就应该像这个样子，能记录每次文件的改动：

| 版本 | 文件名      | 用户 | 说明                   | 日期       |
| :--- | :---------- | :--- | :--------------------- | :--------- |
| 1    | service.doc | 张三 | 删除了软件服务条款5    | 7/12 10:38 |
| 2    | service.doc | 张三 | 增加了License人数限制  | 7/12 18:09 |
| 3    | service.doc | 李四 | 财务部门调整了合同金额 | 7/13 9:51  |
| 4    | service.doc | 张三 | 延长了免费升级周期     | 7/14 15:17 |

这样，你就结束了手动管理多个“版本”的史前时代，进入到版本控制的20世纪。

版本控制主要解决两个问题：

- 历史记录
- 多人协作

### 本地版本控制系统

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021653.png)

### 集中式

先说集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021738.jpeg)

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021755.png)

集中式版本控制系统最大的毛病就是必须联网才能工作，如果在局域网内还好，带宽够大，速度够快，可如果在互联网上，遇到网速慢的话，可能提交一个10M的文件就需要5分钟，这还不得把人给憋死啊。

集中式版本管理的代表：

- SVN（Subversion）

### 分布式

那分布式版本控制系统与集中式版本控制系统有何不同呢？首先，分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。

和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。

在实际使用分布式版本控制系统的时候，其实很少在两人之间的电脑上推送版本库的修改，因为可能你们俩不在一个局域网内，两台电脑互相访问不了，也可能今天你的同事病了，他的电脑压根没有开机。因此，分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021814.jpeg)

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021830.png)

当然，Git的优势不单是不必联网这么简单，后面我们还会看到Git极其强大的分支管理，把SVN等远远抛在了后面。

CVS作为最早的开源而且免费的集中式版本控制系统，直到现在还有不少人在用。由于CVS自身设计的问题，会造成提交文件不完整，版本库莫名其妙损坏的情况。同样是开源而且免费的SVN修正了CVS的一些稳定性问题，是目前用得最多的集中式版本库控制系统。

除了免费的外，还有收费的集中式版本控制系统，比如IBM的ClearCase（以前是Rational公司的，被IBM收购了），特点是安装比Windows还大，运行比蜗牛还慢，能用ClearCase的一般是世界500强，他们有个共同的特点是财大气粗，或者人傻钱多。

微软自己也有一个集中式版本控制系统叫VSS，集成在Visual Studio中。由于其反人类的设计，连微软自己都不好意思用了。

分布式版本控制系统除了Git以及促使Git诞生的BitKeeper外，还有类似Git的Mercurial和Bazaar等。这些分布式版本控制系统各有特点，但最快、最简单也最流行的依然是Git！

## Git 介绍

### 是什么

- 分布式版本控制系统
  - 历史记录
  - 多人协同

### 发展历史

很多人都知道，Linus 在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。

Linus虽然创建了Linux，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？

事实是，在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过手工方式合并代码！

你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。

不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。

安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。

Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：

Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？大家可以体会一下。

Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。

历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。

### Git 作者

> [百度百科 - 林纳斯·本纳第克特·托瓦兹]([https://baike.baidu.com/item/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%9C%AC%E7%BA%B3%E7%AC%AC%E5%85%8B%E7%89%B9%C2%B7%E6%89%98%E7%93%A6%E5%85%B9](https://baike.baidu.com/item/林纳斯·本纳第克特·托瓦兹))

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021845.jpg)


### 前置知识

> 基本的命令行操作

### 资源连接

- [Git 官网](https://git-scm.com/)
- [官方文档](<https://git-scm.com/docs>)
- [GitHub Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [Visual Git Cheat Sheet](http://ndpsoftware.com/git-cheatsheet.html)
- [一个国人写的Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)
- **[Pro Git](https://git-scm.com/book/zh/v2)**
- [猴子都能懂得 GIT 入门](<https://backlog.com/git-tutorial/cn/>)
- [git 简明指南](<https://rogerdudler.github.io/git-guide/index.zh.html>)
- ...

## 起步

### 安装 Git

- 下载地址：https://git-scm.com/downloads
- 安装
  - Windows

在命令行中输入以下命令查看 Git 是否安装成功。

```bash
$ git --version

git version 2.21.0.windows.1
```

> 注：`$` 表示命令提示符，不需要输入它

### Git 的使用方式

- 命令行（通用性最强）
  - cmd
  - powershell
  - terminal
  - iterm2
  - bash
  - 。。。
- 图形软件（鼠标点点点的方式）

> 学会命令操作，使用图形软件可以快速上手，无师自通；学会图形软件，很难上手命令操作。

### 使用 Git Bash

> 在 Windows 上推荐使用安装 Git 自带的 Git Bash，因为 Git Bash 中可以运行一些 Linux 命令，比 Windows 的操作命令更为强大和易用。尤其是当你涉及到一些 Linux 服务器操作时，掌握这些 Linux 命令是有很大的益处的。


打开方式：

- 在开始目录中找到 `Git Bash`
- 在目录（或者目录空白）位置右键，选择 `Git Bash Here`


### 常用文件操作命令补充

```bash
# change directory
# cd 目录路径
# cd .. 切换上级
# cd ../a 切换到上级下的 a 目录
$ cd

# print working directory
# 打印当期工作目录（仅 Linux）
$ pwd

# list
# 查看目录内容（只能在类 Unix 系统使用，例如 Linux）
# Windows 上是 dir
# ls -a 包括隐藏文件|目录
$ ls

# make directory
# 新建目录
# mkdir 目录路径
# mkdir -p 嵌套目录结构
$ mkdir

# remove directory
# 删除目录（只能删除空目录）
# rmdir 目录路径
$ rmdir

# 新建文件
$ touch 文件路径

# remove
# 删除文件（仅 Linux）
# rm 文件路径
# rm -rf 目录路径
# rm -rf *
# 使用这种方式可以删除一些顽固文件|目录
$ rm

# copy
# 拷贝
# cp -r 源 目标
$ cp

# move
# 移动（改名）文件|目录
$ mv

# 查看文件，适用于内容比较少的情况
# 针对的是文本文件
$ cat 文件路径

# 查看文件，适用于文件内容比较多的情况
# 退出使用 q
$ less

# 清屏
$ clear

# 编辑
# i 进入插入模式
# 无论你处于任何默认，esc 都回到命令模式
# :w 保存
# :q 退出
# :wq 保存并退出
# :q! 强制退出不保存
# dd 删除一行，ndd 删除多行（n 是数字）
# u 撤销
# nyy 复制，n 是数字，默认为1
# p 粘贴
$ vi
```

> 扩展学习：
>
> - [Linux命令大全----常用文件操作命令](<https://blog.csdn.net/Evankaka/article/details/49227669>)
> - [Linux vi/vim](<https://www.runoob.com/linux/linux-vim.html>)

### 初始设置

```bash
# --global 会将配置项保存到用户配置
$ git config --global user.name "xxx"
$ git config --global user.email "xxx"

# 查看当前的 Git 配置
$ git config --list

# 查看 Git 的某一项配置
$ git config user.name
```

> 全局配置
>
> 用户配置
>
> - 路径：`用户目录/.gitconfig`
>
> 项目配置


### 核心概念

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021901.png)

```bash
Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库
```

#### 快照流

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021910.png)

```
Git 更像是把数据看作是对小型文件系统的一组快照。 每次你提交更新，或在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。 为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个 快照流。
```


#### 三种区域

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021920.png)

- Git 仓库
  - Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。
- 工作目录
  - 工作目录是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。
- 暂存区域
  - 暂存区域是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作`‘索引’'，不过一般说法还是叫暂存区域。


基本的 Git 工作流程如下：

1. 在工作目录中修改文件。
2. 暂存文件，将文件的快照放入暂存区域。
3. 提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。


### 基本操作

```bash
# 初始化 git 仓库
$ git init

# 查看状态
$ git status

# 添加文件到暂存区
$ git add 文件路径

# 恢复暂存区指定文件到工作区
$ git checkout 文件

# 提交暂存区到仓库区形成历史记录
$ git commit -m "提交日志"

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 查看提交日志
$ git log

# 使用图形化方式查看
$ gitk
```

### 文件的状态

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021933.png)

> 文件状态变化周期

- 未跟踪
- 已暂存
- 已修改
- 已提交（没有提示）


**未跟踪（Untracked files）**，表示还没有被 Git 管理过，既没有进入过暂存区，更没有进入过仓库区。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021946.png)

> 如图所示

**已暂存（staged）**，表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314021954.png)

> 暂存区的文件

已提交（committed），表示数据已经安全的保存在本地数据库中。

已修改（modified），表示修改了文件，但还没保存到历史记录中。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022001.png)

> 已修改了文件，但是还没有保存到仓库区

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022010.png)

> 修改了工作区，但是和暂存区不一致

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022017.png)

> 表示工作区|暂存区 和仓库区最新的版本历史记录是一样的
>
> 说白了就是自上次提交之后还没有做过任何改动


**总结：**如果新增的文件并且没有放入暂存区，此时就是未跟踪状态。如果 Git 目录中保存着特定版本的文件，就属于已提交状态。 如果作了修改并已放入暂存区域，就属于已暂存状态。 如果自上次取出后，作了修改但还没有放到暂存区域，就是已修改状态。 

## Git 基础

### 增加/删除文件

> [] 表示可选的

```bash
# 添加指定文件到暂存区
# 以空格隔开可以一次 add 多个文件
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir] [file] [dir] [file] [file] ...

# 添加当前目录的所有文件到暂存区，包括子目录
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
# -f 是 force 是简写，强制删除的意思
# 删除文件并直接进入暂存区，以待下一次提交
$ git rm -f [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

### .gitignore

- 参考官方文档：[https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%AE%B0%E5%BD%95%E6%AF%8F%E6%AC%A1%E6%9B%B4%E6%96%B0%E5%88%B0%E4%BB%93%E5%BA%93](https://git-scm.com/book/zh/v2/Git-基础-记录每次更新到仓库)

- https://github.com/github/gitignore

### 代码提交

```bash
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
# 注意：不包括未跟踪文件
$ git commit -a -m "提交日志"

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
# 如果代码有变化，则将本次变化和最后一次提交混合形成历史记录
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

### 查看状态

```bash
# 最好用的是 gitk
$ gitk

# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```


### 标签（了解）

```bash
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

### 撤销操作

```bash
# 修改最后一次提交
# 如果暂存区没有新的内容，则仅仅修改提交日志
# 如果有新内容，则将本地新内容混入修改的提交中
git commit --amend -m "xxx"

# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 
$ git checkout [commit]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```


### Git 别名（了解）

如果不想每次都输入完整的 Git 命令，可以通过 `git config` 文件来轻松地为每一个命令设置一个别名。 这里有一些例子你可以试试：

```bash
# git co
$ git config --global alias.co checkout

# git br
$ git config --global alias.br branch

# git ci
$ git config --global alias.ci commit

# git st
$ git config --global alias.st status
```

 例如，为了解决取消暂存文件的易用性问题，可以向 Git 中添加你自己的取消暂存别名：

```bash
$ git config --global alias.unstage 'reset HEAD --'
```

这会使下面的两个命令等价：

```bash
$ git unstage fileA
$ git reset HEAD -- fileA
```

这样看起来更清楚一些。 通常也会添加一个 `last` 命令，像这样：

```bash
$ git config --global alias.last 'log -1 HEAD'
```

这样，可以轻松地看到最后一次提交：

```bash
$ git last
commit 66938dae3329c7aebe598c2246a8e6af90d04646
Author: Josh Goebel <dreamer3@example.com>
Date:   Tue Aug 26 19:48:51 2008 +0800

    test for current head

    Signed-off-by: Scott Chacon <schacon@example.com>
```

## 分支

分支就是科幻电影里面的平行宇宙，当你正在电脑前努力学习Git的时候，另一个你正在另一个平行宇宙里努力学习SVN。

如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，你既学会了Git又学会了SVN！

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022029.png)

分支在实际中有什么用呢？假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了50%的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。

现在有了分支，就不用怕了。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。

其他版本控制系统如SVN等都有分支管理，但是用过之后你会发现，这些版本控制系统创建和切换分支比蜗牛还慢，简直让人无法忍受，结果分支功能成了摆设，大家都不去用。

但Git的分支是与众不同的，无论创建、切换和删除分支，Git在1秒钟之内就能完成！无论你的版本库是1个文件还是1万个文件。

### 分支概念

让我们来看一个简单的分支新建与分支合并的例子，实际工作中你可能会用到类似的工作流。 你将经历如下步骤：

1. 开发某个网站。
2. 为实现某个新的需求，创建一个分支。
3. 在这个分支上开展工作。

正在此时，你突然接到一个电话说有个很严重的问题需要紧急修补。 你将按照如下方式来处理：

1. 切换到你的线上分支（production branch）。
2. 为这个紧急任务新建一个分支，并在其中修复它。
3. 在测试通过之后，切换回线上分支，然后合并这个修补分支，最后将改动推送到线上分支。
4. 切换回你最初工作的分支上，继续工作。

几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。 在很多版本控制系统中，这是一个略微低效的过程——常常需要完全创建一个源代码目录的副本。对于大项目来说，这样的过程会耗费很多时间。

有人把 Git 的分支模型称为它的`‘必杀技特性’'，也正因为这一特性，使得 Git 从众多版本控制系统中脱颖而出。 为何 Git 的分支模型如此出众呢？ Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。 与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。 理解和精通这一特性，你便会意识到 Git 是如此的强大而又独特，并且从此真正改变你的开发方式。

### 分支的新建与合并

在[版本回退里，你已经知道，每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即 `master` 分支。`HEAD` 严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，`HEAD` 指向的就是当前分支。

一开始的时候，`master`分支是一条线，Git 用 `master` 指向最新的提交，再用 `HEAD` 指向 `master`，就能确定当前分支，以及当前分支的提交点：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022044.png)

每次提交，`master` 分支都会向前移动一步，这样，随着你不断提交，`master` 分支的线也越来越长。

当我们创建新的分支，例如 `dev` 时，Git 新建了一个指针叫 `dev`，指向 `master` 相同的提交，再把 `HEAD` 指向 `dev`，就表示当前分支在 `dev` 上：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022050.png)

你看，Git创建一个分支很快，因为除了增加一个`dev`指针，改改`HEAD`的指向，工作区的文件都没有任何变化！

不过，从现在开始，对工作区的修改和提交就是针对`dev`分支了，比如新提交一次后，`dev`指针往前移动一步，而`master`指针不变：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022059.png)

假如我们在`dev`上的工作完成了，就可以把`dev`合并到`master`上。Git怎么合并呢？最简单的方法，就是直接把`master`指向`dev`的当前提交，就完成了合并：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022107.png)

所以Git合并分支也很快！就改改指针，工作区内容也不变！

合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，我们就剩下了一条`master`分支：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022116.png)

真是太神奇了，你看得出来有些提交是通过分支完成的吗？

下面开始实战。

首先，我们创建`dev`分支，然后切换到`dev`分支：

```bash
$ git checkout -b dev
Switched to a new branch 'dev'
```

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：

```bash
$ git branch dev
$ git checkout dev
Switched to branch 'dev'
```

然后，用 `git branch` 命令查看当前分支：

```bash
$ git branch
* dev
  master
```

`git branch` 命令会列出所有分支，当前分支前面会标一个`*`号。

然后，我们就可以在 `dev` 分支上正常提交，比如对 readme.txt 做个修改，加上一行：

```
Creating a new branch is quick.
```

然后提交：

```bash
$ git add readme.txt 
$ git commit -m "branch test"
[dev b17d20e] branch test
 1 file changed, 1 insertion(+)
```

现在，`dev` 分支的工作完成，我们就可以切换回 `master` 分支：

```bash
$ git checkout master
Switched to branch 'master'
```

切换回 `master` 分支后，再查看一个 readme.txt 文件，刚才添加的内容不见了！因为那个提交是在 `dev` 分支上，而 `master` 分支此刻的提交点并没有变：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022129.png)

现在，我们把`dev`分支的工作成果合并到`master`分支上：

```bash
$ git merge dev
Updating d46f35e..b17d20e
Fast-forward
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
```

`git merge`命令用于合并指定分支到当前分支。合并后，再查看readme.txt的内容，就可以看到，和`dev`分支的最新提交是完全一样的。

注意到上面的`Fast-forward`信息，Git告诉我们，这次合并是“快进模式”，也就是直接把`master`指向`dev`的当前提交，所以合并速度非常快。

当然，也不是每次合并都能`Fast-forward`，我们后面会讲其他方式的合并。

合并完成后，就可以放心地删除`dev`分支了：

```bash
$ git branch -d dev
Deleted branch dev (was b17d20e).
```

删除后，查看`branch`，就只剩下`master`分支了：

```bash
$ git branch
* master
```

因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在`master`分支上工作效果是一样的，但过程更安全。

**小结：**

Git鼓励大量使用分支：

```bash
# 查看分支
git branch

# 创建分支
$ git branch <name>

# 切换分支
$ git checkout <name>

# 创建+切换分支
$ git checkout -b <name>

# 合并某分支到当前分支
$ git merge <name>

# 删除分支
$ git branch -d <name>
```


### 合并分支

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022159.png)

> 如果 dev 分支包含 master 分支最新提交，那么当你合并 dev 到 master 的时候，会执行快进模式合并
>
> 快速模块就是直接指向最新提交。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022227.png)

> 如果两个分支都进行了新的提交，那么在合并的时候就执行合并模式，Git 会自动将两个分支的不同提交的改动尝试自动合并，如果合并的过程没有冲突，则直接进入 bi 编辑模式让你输入提交日志完成合并提交。
>
> 合并模式会生成一次新的提交记录。


### 解决冲突

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022258.png)

人生不如意之事十之八九，合并分支往往也不是一帆风顺的。

准备新的`feature1`分支，继续我们的新分支开发：

```
$ git checkout -b feature1
Switched to a new branch 'feature1'
```

修改`readme.txt`最后一行，改为：

```
Creating a new branch is quick AND simple.
```

在`feature1`分支上提交：

```
$ git add readme.txt

$ git commit -m "AND simple"
[feature1 14096d0] AND simple
 1 file changed, 1 insertion(+), 1 deletion(-)
```

切换到`master`分支：

```
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
```

Git还会自动提示我们当前`master`分支比远程的`master`分支要超前1个提交。

在`master`分支上把`readme.txt`文件的最后一行改为：

```
Creating a new branch is quick & simple.
```

提交：

```
$ git add readme.txt 
$ git commit -m "& simple"
[master 5dc6824] & simple
 1 file changed, 1 insertion(+), 1 deletion(-)
```

现在，`master`分支和`feature1`分支各自都分别有新的提交，变成了这样：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022321.png)

这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看：

```bash
$ git merge feature1
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
```

果然冲突了！Git告诉我们，`readme.txt`文件存在冲突，必须手动解决冲突后再提交。`git status`也可以告诉我们冲突的文件：

```
$ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

	both modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

我们可以直接查看readme.txt的内容：

```
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
<<<<<<< HEAD
Creating a new branch is quick & simple.
=======
Creating a new branch is quick AND simple.
>>>>>>> feature1
```

Git用`<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容，我们修改如下后保存：

```
Creating a new branch is quick and simple.
```

再提交：

```
$ git add readme.txt 
$ git commit -m "conflict fixed"
[master cf810e4] conflict fixed
```

现在，`master`分支和`feature1`分支变成了下图所示：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022334.png)

用带参数的`git log`也可以看到分支的合并情况：

```
$ git log --graph --pretty=oneline --abbrev-commit
*   cf810e4 (HEAD -> master) conflict fixed
|\  
| * 14096d0 (feature1) AND simple
* | 5dc6824 & simple
|/  
* b17d20e branch test
* d46f35e (origin/master) remove test.txt
* b84166e add test.txt
* 519219b git tracks changes
* e43a48b understand how stage works
* 1094adb append GPL
* e475afc add distributed
* eaadf4e wrote a readme file
```

最后，删除`feature1`分支：

```
$ git branch -d feature1
Deleted branch feature1 (was 14096d0).
```

工作完成。


小结：

当 Git 无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把 Git 合并失败的文件手动编辑为我们希望的内容，再提交。

用 `git log --graph` 命令可以看到分支合并图。


总结：

1. 使用 `git status` 查看冲突的文件
2. 解决冲突
3. 使用 `git add 冲突文件` 将冲突文件标记为已解决冲突状态
4. 使用 `git commit -m "提交日志"` 提交合并冲突的结果
5. 完成合并


### 冲突解决工具

当我们执行 `git merge 分支` 命令合并分支的时候，如果遇到冲突，例如：

```bash
$ git merge feature1
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
```

当冲突文件内容比较少的时候，我们可以手动解决。

当冲突文件内容比较多的时候，手动解决就比较麻烦了，这里可以通过配置一些工具来提高解决冲突的效率。

- [Beyound Compare](<https://www.scootersoftware.com/>)
  - 还有很多别的
- 下载安装
  - 下载地址：<https://www.scootersoftware.com/download.php>
  - 安装文件在今天的下发资料中
  - 安装方式：下一步下一步。。。
- 配置结合 Git 使用 Beyound Compare

- 然后找到 `用户目录/.gitconfig` 文件，增加以下配置项：

```bash
[merge]
	tool = bc4

[mergetool]
  keepBackup = false

[mergetool "bc4"]
	cmd = \"C:/Program Files/Beyond Compare 4/BComp.exe\" \"$LOCAL\" \"$REMOTE\" \"$BASE\" \"$MERGED\"
```

> 注意：将 BComp.exe 路径修改为你自己的

使用：

例如当我 `git merge 分支` 的时候遇到了冲突：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022401.png)

接下来，输入以下命令：

```bash
$ git mergetool
```

然后你会看到：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022421.png)

> 等待冲突解决

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022427.png)

> 根据你的配置使用 Beyound Compare 解决冲突

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022437.png)

> 基本使用

然后根据需要执行合并操作。

解决完毕，保存结果，退出软件。

最后 `git commit` 提交合并结果，完成合并操作。

### 命令参考

```bash
# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 切换到上一个分支
$ git checkout -

# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 合并指定分支到当前分支
$ git merge [branch]

# 删除分支
$ git branch -d [branch-name]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```


## 远程仓库

- 备份代码
- 多人协作

Git是分布式版本控制系统，同一个Git仓库，可以分布到不同的机器上。怎么分布呢？最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。

你肯定会想，至少需要两台机器才能玩远程库不是？但是我只有一台电脑，怎么玩？

其实一台电脑上也是可以克隆多个版本库的，只要不在同一个目录下。不过，现实生活中是不会有人这么傻的在一台电脑上搞几个远程库玩，因为一台电脑上搞几个远程库完全没有意义，而且硬盘挂了会导致所有库都挂掉，所以我也不告诉你在一台电脑上怎么克隆多个仓库。

实际情况往往是这样，找一台电脑充当服务器的角色，每天24小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。

完全可以自己搭建一台运行Git的服务器，不过现阶段，为了学Git先搭个服务器绝对是小题大作。好在这个世界上有个叫 [GitHub](https://github.com/) 的神奇的网站，从名字就可以看出，这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库。

第三方远程仓库托管服务：

- GitHub
- 码云（gitee）
- coding
- Gitlab
  - 一个开源的类似于 GitHub 的 Git 仓库托管服务
  - 支持自行搭建

### 创建账号

### 配置 SSH（不是必须）

### 基本使用

#### 将本地仓库放到线上

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022458.png)

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022535.png)

如何把一个本地仓库放到 GitHub：

1. 在 GitHub 中新建一个远程仓库

2. 在本地仓库下执行

第1次推送：

```bash
# 别名我们通常喜欢使用 origin 作为默认仓库的别名
$ git remote add 别名 远程仓库地址

# 当本地分支和远程分支名字一样的时候，可以简写只写一些
# -u 的作用是记住本次的 push 地址和分支信息
# 如果不加 -u，则下一次 push 的时候，还需要使用完整的命令
$ git push -u 远程仓库地址别名 本地分支:远程分支

如果要推送的本地分支和远端分支已有，可以简写为
git push origin 分支
```

之后有了新的历史记录的时候，直接 ：

```bash
git push
```

#### 推送不同分支

```bash
$ git push -u 远程仓库地址别名 本地分支:远程分支
```


#### 从线上克隆仓库

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022607.png)

> 找到仓库地址。
>
> 注意：非仓库页面的浏览器 url 地址。

然后：

```bash
git clone 仓库地址
```

编写代码，提交历史记录，然后推送：

```bash
# clone 下来的仓库会自动创建一个名字叫 origin 的 remote 远端地址
# 并且自动和 origin master 建立关系
# 所以你这里可以直接 git push
git push
```

但是，如果你要推送别的分支代码，你还得：

```bash
git push -u 仓库地址别名 本地分支:远程分支
```


### 拉取和更新

```bash
git pull
```


```bash
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

## 多人协作

默认情况下，只有仓库的所有者才可以推送代码。

如果非仓库所有者推送的话，会给出以下信息：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022621.png)

常见的协作方式无外乎两种：

**方式一：直接为协作成员分配提交权限**

- 适用于公司内部项目，所有人可以直接提交代码到仓库

**方式二：Pull Request 协作方式**

- 适用于开源项目，互联网上的协作者可能是未知的


实际工作中不同公司不同情况，一般方式一居多，简单粗暴。

下面分别说明两种方式的使用步骤。

### 方式一：直接为协作成员分配提交权限

两步操作：

1. 仓库所有者邀请协作者
2. 协作者接受邀请
3. 开始协作

下面是具体的操作步骤。

#### 仓库所有者

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022645.png)

> 进入仓库界面的 Settings-Collaborators

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022705.png)

> 输入 GitHub 用户名查找添加协作成员

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022713.png)

> 点击添加协作者

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022724.png)

> 可以看到，GitHub 会向被邀请协作者发送一封邀请协作邮件
>
> 提示： 被邀请的协作者需要做的操作，请移步下一小节查看

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022738.png)

> 当被邀请者接受邀请之后，该用户就显示为已接受邀请状态了。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022808.png)

> 如果不需要改用户继续参与协作了，可以点击这里删除该协作用户，协作用户的提交权限也就没有了

仓库所有者的邀请操作就是这些，下面是被邀请者所需要做的操作步骤。

#### 被邀请者

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022915.png)

> 首先查收一封来自仓库所有者的邀请协作邮件，点击打开邀请链接

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022923.png)

> 打开邀请链接之后，选择接受邀请。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210314022958.png)

> 提示你已成功加入该项目，并拥有了提交权限。

接下来就可以直接提交代码到该仓库中了。

#### 开始协作

- 用户a推送（push）更新代码到远程仓库，用户b拉取（pull）更新
- 用户b推送（push）更新代码到远程仓库，用户a拉取（pull）更新
- 。。。

### 方式二：Pull Request（了解）

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315182657.jpeg)

> PR 协同流程图

1. Fork一个项目，比如 spring-framework，该操作会复制该项目的所有历史提交内容到个人仓库中，并生成一个相同的项目；

2. Clone之前Fork的项目到本地计算机中；

3. 在本地仓库中更新某些文件；

4. 提交更新的文件到本地仓库；

5. 将本地仓库的更改内容推送push到个人github远程仓库；

6. 创建pull请求，既可以同步更新fork的原始项目中别人的更新到自己的github仓库中，也可以提交个人更新的内容到fork的原始项目。

#### 更新 fork 过来的项目

我Fork的 **spring-framework**项目如下：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315181953.png)

我Fork的spring-framework

**spring-framework**项目最新进展如下：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315182613.jpeg)

spring-framework最新进展

可以看到在我Fork以后spring-framework有了很大新的代码提交，本文就是想简单介绍一下，如何同被Fork的项目保持同步更新，将以spring-framework项目为例。

#### 保持Fork同步更新

1.打开自己的github中Fork的项目，打开Code选项卡，点击下面的New pull request创建一个新的pull请求；

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315182935.jpeg)

Code-New pull request

2.打开Comparing chanages，默认如下图所示，这时base fork是你fork的项目，二head fork是你自己的仓库。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183348.png)

Comparing chanages

3.在上图中进行选择，前面选择base-fork选择自己的github仓库的spring-framework项目，会出现下图所示，这时需要点击**compare across forks**,并进行选择。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183401.png)

compare across forks

4.具体选择如下：base:master是自己仓库和分支，后面选择head fork,compare:master是你fork项目来源的仓库和分支，可以对比两个项目前后的变化情况。然后点击**Create pull request**，创建新的pull请求。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183409.png)

Create pull request

5.填写标题Title和评论Comment，并点击Create pull request。Preview可以预览评论效果，右侧有5个选项可以设置Reviewers检阅用户、Assignees分配给哪个用户、Labels标签(bug、duplocate、enhancement、help wanted、invalid、question、wontfix，也支持自定义)、Projects项目、Milestone里程碑事件。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183832.png)

填写标题Title和评论Comment

6.点击Create pull request之后，就可以在Pull request中看到刚才提交的comment，如下所示：

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183831.png)

可以期间有很多更新，往下翻可以找到如下图所示，点击Merge pull request即可。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183819.png)

Merge pull request

填写Merge的评论并且提交，如果有冲突一定要先解决冲突，然后就全部OK了。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183833.png)

最后，再次打开自己仓库的spring-framework项目，可以看到项目已更新到最新版本，和最开始spring-framework原始项目内容一致了。

![](https://gitee.com/wfl0114/image-hosting/raw/master/img/20210315183834.png)


Fork更新之后

总结：

本文详细讲解了同步更新Github上Fork项目的其中一种方法，还有其他的方法比如可以删除个人github中fork的该项目然后重新fork，这种方式不能合并自己已更新的代码；还有另外一种方式是在本地建立两个仓库，把两个远程库都clone到本地，然后拉取原fork项目更新到本地，合并更新，最后push到你个人的github即可。

作者：梁朋举

链接：https://www.jianshu.com/p/8ab6ef7ce5e3

来源：简书

简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。


## 其它环境中的 Git（自行了解即可）

### 图形界面

Git 官网收录推荐的第三方图形客户端软件：https://git-scm.com/downloads/guis

- SourceTree
- GitHub Desktop
- Tortoise Git
- Git Extensions
- SmartGit

### Visual Studio Code 中的 Git

### Sublime 中的 Git

### Eclipse 中的 Git