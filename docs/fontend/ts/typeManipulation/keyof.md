# Keyof Type Operator


keyof 操作符使用一个**对象类型**，生成一个由它的属性名组成的字符或者数字字面量联合类型

```ts
    type Point = { x: number; y: number };
    type P = keyof Point;

    // type P = keyof Point

```

如果这个类型有一个字符串或者数字**索引签名**，keyof将会返回它们的类型

```ts
    type Arrayish = { [n: number]: unknown };
    type A = keyof Arrayish;
        
    type A = number
    
    type Mapish = { [k: string]: boolean };
    type M = keyof Mapish;
        
    type M = string | number
```