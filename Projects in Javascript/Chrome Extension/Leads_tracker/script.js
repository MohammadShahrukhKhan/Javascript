let myLeads = []
let oldLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.github.com/MohammadShahrukhKhan/"}
// ]

tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    // console.log(tabs[0].url)
})

function render(leads){
    let listItems = ''
    for (let i = 0; i< leads.length; i++){
        listItems += `
            <li>
                <a href="https://${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    // save the myLeads array to local storage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    // console.log(localStorage.getItem("myLeads"))
})