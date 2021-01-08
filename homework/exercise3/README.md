1.eq - 傳統方式:先寫測試在寫程式

測試結果
```
$ deno test eq_test.js
Check file:///C:/Users/nan/Desktop/se109a/se109a/homework/exercise3/test/.deno.test.ts
running 1 tests
test eq test ... x= true
y= false
z= true
w= false
v= true
ok (20ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (23ms)
```

2.gt - TDD 先寫測試在寫程式

測試結果
```
$ deno test gt_test.js
Check file:///C:/Users/nan/Desktop/se109a/se109a/homework/exercise3/test/.deno.test.ts
running 1 tests
test gt test ... x= true
y= false
z= false
ok (104ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (148ms)
```

3.gte -BDD 客戶取向:適合用來跟沒有程式背景的客戶講解

測試結果
```
$ deno test gte_test.js
Check file:///C:/Users/nan/Desktop/se109a/se109a/homework/exercise3/test/.deno.test.ts
running 1 tests
test gte test ... x= true
y= true
z= false
ok (127ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (173ms)
```
