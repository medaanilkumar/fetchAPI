var data=document.getElementById('data')
data.addEventListener('click',getdata)

var json=document.getElementById('json')
json.addEventListener('click',getjson)

var post=document.getElementById('post')
post.addEventListener('submit',addpost)




function addpost(e){
    e.preventDefault()
    var title=document.getElementById('title').value
    var body=document.getElementById('body').value
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json,*/*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title,body:body})

    }).then((res)=>res.json())
    .then((data)=>console.log(data))
}

function getdata(){
    fetch('sample.txt')
    .then((res)=>res.text())
    .then((data)=>{
        var btndiv=document.createElement('div')
        var content=document.createTextNode(data)
        btndiv.appendChild(content)
        document.body.appendChild(btndiv)
    })
}


function getjson(){
    fetch('users.json')
    .then((res)=>res.json())
    .then((data)=>{
        let output='<h2>users</h2>'
        data.users.forEach(element => {
            output+=`
            <ul>
            <li>id:${element.id}</li>
            <li>name:${element.name}</li>
            <li>work:${element.work}</li>
            </ul>
            `
        });
        document.getElementById('output').innerHTML=output
    })
}