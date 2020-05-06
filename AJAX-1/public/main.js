let n = 1



getXML.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("get", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let dom = request.responseXML
                let text = dom.getElementsByTagName("warning")[0].textContent
                console.log(text.trim());
            }
        }
    }
    request.send()
}

getPage.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("get", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let array = JSON.parse(request.response)
                array.forEach(item => {
                    let li = document.createElement("li")
                    li.textContent = item.id
                    xxx.append(li)
                })
                n = n + 1
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("get", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response);
                let object = JSON.parse(request.response)
                myName.textContent = object.name
            }
        }
    }
    request.send()
}

getHTML.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("get", "/3.html")
    request.onload = () => {
        //创建div标签
        let div = document.createElement("div")
        //填写div内容
        div.innerHTML = request.response
        //插入到body里面
        document.body.appendChild(div)
    }

    request.onerror = () => {
        console.log("失败了");
    }

    request.send()
}

getJS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("get", "/2.js")
    request.onload = () => {
        //创建script标签
        let script = document.createElement("script")

        //填写script内容
        script.innerHTML = request.response

        //放到index的body里面
        document.body.appendChild(script)
    }

    request.onerror = () => {
        console.log("失败了");
    }

    request.send()
}

getCSS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("get", "/style.css")   //readyState 1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 等于4则下载完成，但我不知道是正确页面还是404下载完成 只要200~300之间就正确
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                let style = document.createElement("style")

                //创建style内容
                style.innerHTML = request.response

                //放到index的头部
                document.head.appendChild(style)
            } else {
                alert("加载CSS 失败")
            }
        }
    }

    request.send()   //readyState 1
}
