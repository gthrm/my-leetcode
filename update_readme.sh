#!/bin/bash

REPO_PATH='./'
REPO_URL='https://github.com/gthrm/my-leetcode/blob/main/'
README_PATH='README.md'

echo '# My Leetcode' >$README_PATH
echo '' >>$README_PATH

# Создаем два массива: один для чисел, другой для соответствующих файлов
number_list=()
file_list=()

for file in $REPO_PATH*.js; do
    FILENAME=$(basename $file)
    NUMBER=$(echo $FILENAME | awk 'BEGIN{FS="."}{print $1}')

    # Если номер является числом, сохраняем его и имя файла
    if [[ $NUMBER =~ ^[0-9]+$ ]]; then
        number_list+=($NUMBER)
        file_list+=($FILENAME)
    fi
done

# Получаем индексы в отсортированном порядке
sorted_indices=$(for i in "${!number_list[@]}"; do echo $i ${number_list[$i]}; done | sort -k2,2n | awk '{print $1}')

# Используем отсортированные индексы для вывода файлов
for index in $sorted_indices; do
    FILENAME=${file_list[$index]}
    PROBLEM_NAME="${FILENAME%.*}"
    echo "- [${PROBLEM_NAME}](${REPO_URL}${FILENAME})" >>$README_PATH
done

echo '' >>$README_PATH
echo '[Leetcode link](https://leetcode.com/gthrm/)' >>$README_PATH
