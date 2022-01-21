---
title: "Git"
author: C.-X. Zhao
tags: Git
---

<!-- cover image -->
<p style="text-align: center">
    <img src="https://titangene.github.io/images/cover/git.jpg" height=150/>
</p>

<!-- table of contents (TOC) -->
<details>
  <summary>目錄</summary>
    
  [TOC]

</details>
# [Git](https://www.youtube.com/watch?v=OVLR9qRc9ak&list=PLK2w-tGRdrj5jO9Y1k2iAPCw7iSo6YVdx&index=2&ab_channel=%E4%BB%A3%E7%A0%81%E7%9C%9F%E9%A6%99)
> 分佈式管理系統

## Git Global Setting

[learnGitBranching](https://learngitbranching.js.org/?NODEMO=&locale=zh_TW)

> `git config --global user.name "yourname"` > `git config --global user.email "youremail"`

## Git 基本指令

在目錄下 `cat ~/.gitconfig` 會看到的設定

- `git status` 當前分支下的狀態
- `git add file` 新增檔案的版控，建立追蹤
- `git rm --cached file` 取消追蹤
- `git add -A` / `git add .` 將當前所有檔案加入版控
- `git commit -m` "做了哪些事描述"
- `git checkout ID` 當前 HEAD 跳到那一個 commit
  > 預設是跟著 master 一起

## Git 添加遠端

- `git remote add origin http://10.249.65.21:1995/cindychao2020/git-tutorial.git`
- `git remote -v `
- `git push origin master -u`
  > origin 是遠端的名稱, master 是目前的分支, -u 是指以後會默認遠端跟分支情況下只需要輸入 git push （可輸入也可不輸入）
- `git clone http://10.249.65.21:1995/cindychao2020/git-tutorial.git git-demo `
  > 當已經有 clone 下來的 repo 卻想要建立新的目錄可以在最尾巴上打名稱(但仍舊是同一個倉庫下)
- `git pull `
  > 將遠端版本拉下

## Git 分支

- `git branch branchName` 新增一個分支
- `git branch` 查看目前分支
- `git checkout branchName` 切換分支
- `git checkout -b branchName3` 同時切換 + 開新分支
- `git checkout -d branchName3` 刪除分支
- `git checkout ID` HEAD 切換到選擇 ID 的 commit 上
- `git branch -D feature2`
  > 如果分支上有做修改卻沒有推回 master 的話是沒辦法做刪除動作的，所以大寫 -D 則是強制刪除
- `git merge feature2 `
- `git push origin feature2`
  > 一般來說新開的分支並不會同時更新到遠端上，如果要更新的話需要切換到當前分支在 push ` \* [new branch] feature1 -> feature1
- `git push origin feature2:f2`
  > 如果本地叫 fetrue2 但是遠端分支不想與本地分支同名的話，可以在後面加上：遠端分支新名稱
- `git push origin --delete feature2` 刪除遠端分支

## Git 合併

- `git log` 過往動作與行為
  > 最上面的是近期顯示的，git log --oneline 顯示一行
- `git show 04bf6a1`
  > 04bf6a1 是各檔案的 ID（Hash 碼）

但如果要這樣每個特別下指令的話太麻煩，所以建議可以參考這篇 [git log - Pretty Git Branch](https://stackoverflow.com/questions/1057564/pretty-git-branch-graphs)，有個狗狗的指令 `git log --all --decorate --oneline --graph`

1. `vm ~/.gitconfig`
2. 新增快速指令

```
[alias]
    co = checkout
    br = branch
    ci = commit
    dog = log --all --decorate --oneline --graph
```

3. 輸入 `git dog` 即可

### 取消快轉

- git commit merge devlop --no-ff
  > 當我們合併到 main 分支上時，git 會自動快轉到當前最新的分支上，如果使用 ``--no-ff` 就會多一個 commit 來保留合併分線的動作

[何時該用 git merge --no-ff？](https://medium.com/@fcamel/%E4%BD%95%E6%99%82%E8%A9%B2%E7%94%A8-git-merge-no-ff-d765c3a6bef5)

## Git reset

- `git reset master^ / git rest HEAD^`
  > 回到上一版本，最新版本檔案並非有被管理，一個 ^ 符號代表前一次，回退兩次打兩個，但如果要回到前好幾個版本會改成 ~5 而不是打五個 ^，此時在工作目錄中會顯示尚未 commit 的（就是有修改的檔案的）檔案，如果確定回到上前版本但連檔案都不要的話可以打 `git reset HEAD^ --hard`
- `git reset ID`
  > 也可以直接將 HEAD 和 master 一起帶回到 reset 過的 ID

## Git reflog

- `git reflog` 觀看詳細歷史紀錄
  > 當我們 git reset HEAD^ --hard 可能不小心做錯時，可以使用`git reflog` 歷史紀錄找回 reset 的不見的檔案

## Git rebase

- `git rebase --abort` 在 rebase 下可以終止 rebase

## Git 更改語言

MAC 設定

- `vm ~/.bash_profile `
  > 每個人設定檔案不同，有些人是 .bashrc 有些是 .bash_profile
- `alias git='LANG=en_US.UTF-8 git' `
  `If LANG doesn't work, try LC_ALL or LANGUAGE`

- 更新 `source ~/.bash_profile`

[Change git's language to English without changing the locale](https://askubuntu.com/questions/320661/change-gits-language-to-english-without-changing-the-locale)

[如何將命令行中的 git 提示語言改為英文](https://blog.csdn.net/michael_wgy_/article/details/105858848)

## Change Git Commit Author

[GitHub / Git 修改已提交紀錄的作者和 email](https://blog.csdn.net/rain_zhao_0102/article/details/104902117?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&utm_relevant_index=1)

````
#!/bin/sh

git filter-branch --env-filter '

OLD_EMAIL="your old email"
CORRECT_NAME="your new name"
CORRECT_EMAIL="your new email"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```
````
