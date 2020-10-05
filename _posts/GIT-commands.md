---
title: 'Learning simple commands on GIT'
excerpt: "GIT allows you to create versions of your code and makes all programmer lives easier. It's a fantastic tool. And in this post I'm going to show you some basic commands that you must know"
coverImage: '/assets/blog/GIT-commands/git-github.jpg'
date: '2020-03-09T05:35:07.322Z'
author:
  name: Caio Yoshida
  picture: '/assets/blog/authors/profile.jpg'
ogImage:
  url: '/assets/blog/GIT-commands/git-github.jpg'
---

# GIT commands guide

This guide is composed by some very precious git commands that you must know to make your git experience more dynamic and trustful.

**Initializing new repository**
```git init``` 

## Handling branches

After initializing a new git repository a new branch called "Master" is created as well. You can easily check which branch you are in with the command below:

**Check branch**
```git branch```

Sometimes you need to create a new branch in your repository:

**Creating a new branch**
```git branch <name_of_the_branch>```

Switch to others branches is a very simple task.

**Switch branches**
```git checkout <name_of_the_branch>```

And of course if It would be necessary, you can delete your branch

**Deleting branches**
```git branch -D <name_of_the_branch>```

## Handling commits

If you want to push some code versions inside your branch you need to make a commit. But before make any commit is really important to check which changes, insertions or deletes will be inside this commit. 

**Git status** (this command will show you the last changes, insertions or deletes inside the project)
```git status```

However if you need to check the changes into the files you can run:

**See lasts changes**
```git diff``` or you can run ```git diff <filename>```  (to see the changes of an specific file.)

And if you want to insert all of changes, just run on terminal.

**Add all changes**
```git add *```  or  ```git add .```

But if you want to want to avoid some changes you can easily run:

**Avoid some changes**
```git checkout <name_of_the_file>```

or create a new file called **.gitignore** and put all the files that you want to git ignore.

Sometimes we make some unnecessary or unlike changes into our code after committing, and you need to revert this commit. Well, there's three ways to make this happen.

**Reset --soft** (the last commit will be erased but the changes keep on the commit track)
```git reset --soft <commit_hash>```

**Reset --mixed** (the last commit will be erased and the changes are removed from commit track)
```git reset --mixed <commit_hash>```

**Reset --hard** (the last commit will be erased and the changes are deleted permanently)
```git reset --hard <commit_hash>```

Besides you may just revert the last commit but without deleting. You can easy run:

**Revert commit**
```git revert --no-edit <last_commit_hash>```

## Github / BitBucket

Now you want to move this local repository for a remote one. First you need to create a profile into Github and click on **create a new repository**.

Before make your first push you need to reference your Github repository to the local one by running on terminal:

**linking remote repository**
```git remote add origin <link_of_remote_repository>``` 

At this moment your are able to start pushing your new commits into Github repository.

**push your commits to remote repository**
```git push -u origin master``` (for the first push inside a new Github's project)
```git push origin master``` (for the another ones)

If you want to pull the changes that are just inside your remote repository to the local one you need to run:

**Syncing your remote repository to the local one**
```git pull origin master```

In case you want to delete a branch in your remote repository, it's a very simple task

**Deleting a branch in remote repository**
```git push origin :teste```

> Written with [StackEdit](https://stackedit.io/).
