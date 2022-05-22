// Interaction with the DOM tree

// window.alert('7') //alert
// window.prompt('What is your name?') //prompt
// window.confirm('Ok?') //confirm

// change h1
const heading = document.getElementById('hello')
console.log(heading) //<h1 id="hello" class="heading">Hello world</h1>
console.dir(heading) //h1#hello.heading
console.log(heading.id) //hello
console.log(heading.textContent) //Hello world

setTimeout(() => {
    heading.textContent = 'Change from JavaScript!' //Change from JavaScript!
    heading.style.color = 'red'
    heading.style.textAlign = 'center'
    heading.style.backgroundColor = '#eee'
    heading.style.padding = '2rem'
}, 1500)

setTimeout(() => {
    addStyleTo(heading)
},3000)

function addStyleTo(node) {
    node.style.color = 'green'
    node.style.backgroundColor = '#fff'
    node.style.padding = '2rem'
}

const headingTagName = document.getElementsByTagName('h2')[0] //old and slow method
console.log(headingTagName)

const headingClassName = document.getElementsByClassName('h2-class')[0] //old and slow method
console.log(headingClassName)

const headingTag = document.querySelector('h2')
console.log(headingTag)

const headingClass = document.querySelector('.h2-class')
console.log(headingClass)
