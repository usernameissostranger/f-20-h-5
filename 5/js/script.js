async function makeRequest(url) {
    try {
        const responce = await fetch(url)
        if(responce.ok) {
            console.log('error');
        }
        const result = await responce.json();
        return result
    } catch (error) {
        console.log(error);
    }
}
function renderItems(result) {
    const conteineer = document.getElementById('result')
    result.map((item) => {
        conteineer.innerHTML += `
        <div class="block">
            <img width="200px" src="${item.avatar}" alt="avatar" />
            <h1>${item.name}</h1>
            <p>${item.id}</p>
            <p>${item.desperation}</p>
        </div>
        <button class="button" id="delete">delete</button>`
    })
}

async function fetchData() {
    const url = 'https://63d304794abff88834170d21.mockapi.io/ss'
    try {
        const result = await makeRequest(url)
        renderItems(result)
    } catch (error) {
        console.log('error');
    }
}

async function PutReqest(url, data) {
    try {

        const responce = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!responce.ok) {
            console.log('error');
        }
        const result = await responce.json()
        return result
    } catch (error) {
        console.log(error);
    }
}

async function uopdateData() {
    const url = 'https://63d304794abff88834170d21.mockapi.io/ss/11'
    const newData = {
        "name": "agahshdasd",
        "age": "12",
        "adress": "213",
        "avatar": "https://cojo.ru/wp-content/uploads/2022/12/plov-s-goviadinoi-veles-1.webp",
        "desprition": "kuba",

    }
    try {
        const result = await PutReqest(url, newData)
        console.log(result);
    } catch (error) {
        console.log(error);

    }

}

function deleteFunction() {
    const deleteButton = document.getElementById("delete");
    deleteButton.addEventListener("click", deleteFunction);
    
    console.log(`Функция удаления выполнена!`);
  }
  

fetchData()
