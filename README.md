# Iterator Lab

利用 collection (set) 的特性，可以針對高頻率變動 array-like 的變動有較好的效能，且可以利用 `set.values()` 回傳一個 iterator object，利用其中的 next() 呼叫下一個在 collection 的物件，直到 `done === true`。 實際模擬建立 soket 的環境 or polling 時不斷疊加物件的效果，利用 set 的方式優化記憶體使用方式。

