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
    addStyleTo(heading, 'JavaScript', )
}, 1500)

setTimeout(() => {
    addStyleTo(headingId, 'Practice', 'green')
}, 3000)

setTimeout(() => {
    addStyleTo(h2List[h2List.length - 1], 'Everything will work out!', 'blue', '2rem')
}, 4500)

setTimeout(() => {
    addStyleTo(headingH3.children[0], 'MDN', 'orange', '3rem', 'none')
}, 6000)

function addStyleTo(node, text, color = 'red', fontSize, textDecoration) {
    node.textContent = text
    node.style.color = color
    node.style.backgroundColor = '#eee'
    node.style.padding = '2rem'
    node.style.textAlign = 'center'
    node.style.display = 'block'
    node.style.width = '100%'
    node.style.textDecoration = 'none'
    //falsy: '', undefined, null, 0,false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

const headingTagName = document.getElementsByTagName('h2')[0] //old and slow method
console.log(headingTagName)

const headingClassName = document.getElementsByClassName('h2-class')[0] //old and slow method
console.log(headingClassName)

const headingTag = document.querySelector('h2') //only one first element
console.log(headingTag)

const headingH3 = document.querySelector('h3') //only one first element
console.log(headingH3)

const headingTag2 = headingTag.nextElementSibling //only one first element
console.log(headingTag2)

const h2List = document.querySelectorAll('h2') //all elements h2
console.log(h2List)
console.log(h2List[0]) //first element h2
console.log(h2List[h2List.length - 1]) //last element h2

const headingId = document.querySelector('#sub-hello') //only one element
console.log(headingId)

const headingClass = document.querySelector('.h2-class') //only one first element
console.log(headingClass)

//adding events

heading.onclick = () => {
    console.log('click heading')
    if (heading.style.color === 'red') {
        heading.style.color = '#eee'
        heading.style.backgroundColor = 'red'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#eee'
    }
}

headingId.addEventListener('click', () => {
    console.log('click headingId')
    if (headingId.style.color === 'green') {
        headingId.style.color = '#eee'
        headingId.style.backgroundColor = 'green'
    } else {
        headingId.style.color = 'green'
        headingId.style.backgroundColor = '#eee'
    }
})

h2List[h2List.length - 1].onclick = () => {
    console.log('click last element')
    if (h2List[h2List.length - 1].style.color === 'blue') {
        h2List[h2List.length - 1].style.color = '#eee'
        h2List[h2List.length - 1].style.backgroundColor = 'blue'
    } else {
        h2List[h2List.length - 1].style.color = 'blue'
        h2List[h2List.length - 1].style.backgroundColor = '#eee'
    }
}


