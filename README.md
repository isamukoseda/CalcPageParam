# CalcPageParam
ページ番号、1画面あたりの表示レコード数と総レコード数を入力すると、指定されたページの最初のレコードをレコード先頭からの位置（インデックス）として
計算するJavaScriptの関数

## Description
ページ番号、1画面あたりの表示レコード数とそうレコード数から、レコード先頭からの位置（インデックス）を算出する他に、入力されたパラメターを修正する。
各入力パラエータの修正内容な以下の通り。  
  
**ページ番号**  
- 1より小さい値が指定された場合には、1に修正
- 総ページ数より大きな値が指定された場合には、最大ページ数に修正

**1画面あたりの表示レコード数**  
- 総レコード数より大きい値が指定された場合には、総レコード数に修正

**インデックス（レコード先頭からの位置）**  
- page=1, per_page=10, total=50 --> index=1  
- page=2, per_page=10, total=50 --> index=11
- page=5, per_page=10, total=50 --> index=41
- page=6, per_page=10, total=50 --> index=41
- page=0, per_page=10, total=50 --> index=1
- page=-1, per_page=10, total=50 --> index=1

## Usage
```
calc_page_param(page_no, per_page, total);
```

## Example
```
calc_page_param(1, 1, 100);
```
