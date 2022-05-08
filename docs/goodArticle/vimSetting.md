# my vimSetting
```
{
  
    
        "vim.easymotion": true,
        "vim.incsearch": true,
        "vim.useSystemClipboard": true,
        "vim.useCtrlKeys": true,
        "vim.hlsearch": true,
        "vim.insertModeKeyBindings": [
          {
            "before": ["j", "j"],
            "after": ["<Esc>"]
          },
          {
            "before": ["leader", "h"],
            "after": ["<Left>"]
          },
          {
            "before": ["leader", "l"],
            "after": ["<right>"]
          },
        ],
        "vim.normalModeKeyBindingsNonRecursive": [
          {
            "before": ["<C-n>"],
            "commands": [":nohl"]
          },
          {
            "before": ["K"],
            "commands": ["lineBreakInsert"],
            "silent": true
          },
          {
            "before": ["H"],
            "after": ["^"]
          },
          {
            "before": ["L"],
            "after": ["$"]
          },
          // 像上滚动半屏
          {
            "before": ["leader", "u"],
            "after": ["<C-u>"]
          },
          // 像下滚动半屏
          {
            "before": ["leader", "d"],
            "after": ["<C-d>"]
          },
          // 像上滚动整屏
          {
            "before": ["leader", "b"],
            "after": ["<C-b>"]
          },
          // 像下滚动整屏
          {
            "before": ["leader", "f"],
            "after": ["<C-f>"]
          },
          
          // 删到行首
          {
            "before": ["leader", "H"],
            "after": ["d","^"]
          },
          // 删到行尾
          {
            "before": ["leader", "L"],
            "after": ["d","$"]
          },



        ],
        "vim.visualModeKeyBindingsNonRecursive": [
          {
            "before":["H"],
            "after":["^"]
          },
          {
            "before":["L"],
            "after": ["$"]
          }
        ],
        "vim.leader": "<space>",
        "vim.handleKeys": {
          "<C-a>": false,
          "<C-f>": false,
        }
      
}

```