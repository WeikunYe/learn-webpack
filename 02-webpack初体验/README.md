# 备注

## webpack-cli

使用 `webpack-cli` 指定路径和 output 文件名需如下:

``` bash
webpack ./src/index.js -o ./build --output-filename built.js --mode=development 
```

- `-o`: 为 `--output-path` 简写，定义输出文件的目录 (注意该项配置只定义目录，不定义文件名)

- `--output-filename`: 定义输出文件名