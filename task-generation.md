現在我寫了很多的 Gherkin feature 案例，
你要幫我將他生成給工程師看的工能單。
不要自己臆測任何的內容，要完全以 feature file 的內容作為產出的標準
如果不清楚的東西以 #TODO 標記起來，那個位置留白

在 feature 中看到 「呼叫<API名稱>」時，請找 /spec 下的 markdown 檔案內的 summary 資料，可以知道呼叫了哪一隻 API，將 API 的資訊也附加到 Task 中。

Task 的範本如下
```markdown
# 使用情境
<放入 feature> 的 user story
# 使用流程
<整理 feature 內的使用案例後，總結使用流程>
# 使用案例（驗收標準）
<將 feature file 的內容放到這邊，工程師可以看到使用的如何使用這個功能>
```
