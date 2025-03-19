#!/bin/bash

# 指定要检查的目录
TARGET_DIR="$HOME/code/doflam-z.github.io"
COMMIT_MESSAGE="Auto commit: $(date '+%Y-%m-%d %H:%M:%S')"

# 遍历目标目录下的所有文件夹
if [ -d "$TARGET_DIR/.git" ]; then  # 判断是否是 Git 项目
    cd "$TARGET_DIR"
    
    # 检查是否有变更
    if [[ -n $(git status --porcelain) ]]; then
        echo "Changes detected, committing and pushing..."
        git add .
        git commit -m "$COMMIT_MESSAGE"
        git push origin main
    else
        echo "No changes detected."
    fi
fi
done

echo "Done."

