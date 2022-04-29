# call-apply-bind

# call

```js
    function myCall(context = window, ...args) {
        if(typeof this !== 'function') {
            throw new TypeError('Type Error')
        }
        const fn = Symbol('fn')
        context[fn] = this

        const result = context[fn](...args)
        delete context[fn]
        return result
    }

```

# apply

```js
    function myApply(context = window, ...args) {
        if(typeof this !== 'function') {
            throw new TypeError('Type Error')
        }
        const fn = Symbol('fn')
        context[fn] = this

        const result = context[fn](args)
        delete context[fn]
        return result
    }

```

# bind

```js
    function myApply(context = window, ...args) {
        if(typeof this !== 'function') {
            throw new TypeError('Type Error')
        }
        const fn = Symbol('fn')
        context[fn] = this

        const result = context[fn](args)
        delete context[fn]
        return result
    }

```