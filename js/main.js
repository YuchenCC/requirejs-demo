require(['jquery.min'],function(jquery){
    console.log('1')
    let $body = $('body')
    let $hello = $('<div><div>')
    $hello.text('Hello World with jQuery').appendTo($body)
})
something.innerText = 'Hello World with DOM'